const { ConcatSource } = require("webpack-sources");
const validateOptions = require("schema-utils");
const schema = require("./schema.json");

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
                let whitelist = _thisOptions.whitelist || "auto";
                let outputType = _thisOptions.outputType || "global";
                if (whitelist === "auto") {
                  const code = compilation.assets[file].source();
                  const helpers = code.match(/babelHelpers\.(\w+)/g);
                  whitelist =
                    helpers && helpers.length
                      ? helpers
                          .filter((m, i) => helpers.indexOf(m) === i)
                          .map(m => m.split(".")[1])
                      : [];
                }
                let helpersCode = _thisOptions.babel.buildExternalHelpers(
                  whitelist,
                  outputType
                );
                if (outputType === "global") {
                  helpersCode = helpersCode.replace(
                    /global\.babelHelpers\s*=\s*\{\}/i,
                    "global.babelHelpers = (global.babelHelpers || {})"
                  );
                } else if (outputType === "var") {
                  helpersCode = helpersCode.replace(
                    /var\s+babelHelpers\s*=\s*\{\}/i,
                    'var babelHelpers = typeof babelHelpers === "undefined" ? {} : babelHelpers'
                  );
                }
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