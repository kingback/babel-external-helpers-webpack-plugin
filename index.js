const { ConcatSource } = require("webpack-sources");
const validateOptions = require("schema-utils");
const schema = require("./schema.json");

function uniq(a) {
  const r = {};
  return a.filter(function(i) {
    if (r[i]) {
      return false;
    } else {
      r[i] = 1;
      return true;
    }
  });
}

function includes(r, s) {
  let ret = true;
  s.some(function(i) {
    return !(ret = r.indexOf(i) >= 0);
  });
  return ret;
}

function getWhitelist(code) {
  const helpers = (code || "").match(/babelHelpers(\.|\["|\[')(\w+)/g);
  return helpers && helpers.length
    ? uniq(helpers.map(m => m.split(/(\.|\["|\[')/)[2]))
    : [];
}

function getHelpersCode(babel, whitelist, outputType) {
  const code = babel.buildExternalHelpers(
    whitelist,
    outputType
  );
  const codeWhitelist = getWhitelist(code);
  if (!whitelist || !codeWhitelist.length || includes(whitelist, codeWhitelist)) {
    return code;
  } else {
    return getHelpersCode(babel, uniq(whitelist.concat(codeWhitelist)), outputType);
  }
}

class BabelExternalHelpersWebpackPlugin {
  constructor(options) {
    this.options = options || {};
    validateOptions(schema, this.options, "BabelExternalHelpersWebpackPlugin");
  }

  apply(compiler) {
    const _thisOptions = this.options;

    if (typeof _thisOptions.babel === "string") {
      _thisOptions.babel = require(_thisOptions.babel);
    }

    compiler.hooks.compilation.tap(
      "BabelExternalHelpersWebpackPlugin",
      compilation => {
        compilation.hooks.optimizeChunkAssets.tap(
          "BabelExternalHelpersWebpackPlugin",
          chunks => {
            for (const chunk of chunks) {
              if (!chunk.canBeInitial()) continue;

              for (const file of chunk.files) {
                if (!/\.js$/.test(file)) continue;
                
                // default options
                let whitelist = typeof _thisOptions.whitelist === "undefined" ? "auto" : null;
                let outputType = _thisOptions.outputType || "global";
                
                // auto analyse whitelist
                if (whitelist === "auto") whitelist = getWhitelist(compilation.assets[file].source());
                let helpersCode = getHelpersCode(_thisOptions.babel, whitelist, outputType);
                
                // combine babelHelpers object
                if (outputType === "global") {
                  helpersCode = helpersCode.replace(
                    /global\.babelHelpers\s*=\s*\{\}/i,
                    "global.babelHelpers = (global.babelHelpers || {})"
                  );
                } else if (outputType === "var") {
                  helpersCode = helpersCode.replace(
                    /var\s+babelHelpers\s*=\s*\{\}/i,
                    "var babelHelpers = typeof babelHelpers === \"undefined\" ? {} : babelHelpers"
                  );
                }
                
                // concat source code
                compilation.assets[file] = new ConcatSource(
                  helpersCode,
                  "\n\n",
                  compilation.assets[file]
                );
              }
            }
          }
        );
      }
    );
  }
}

module.exports = BabelExternalHelpersWebpackPlugin;