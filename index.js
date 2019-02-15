const { ConcatSource } = require("webpack-sources");
const validateOptions = require("schema-utils");
const schema = require('./schema.json');

class BabelExternalHelpersWebpackPlugin {
  constructor(options) {
    this.options = options || {};
    validateOptions(schema, this.options, 'BabelExternalHelpersWebpackPlugin');
  }

  apply(compiler) {
    let {
      outputType = 'global',
      whitelist = 'auto',
      babel
    } = this.options;

    if (typeof babel === 'string') {
      babel = require(babel);
    }

		compiler.hooks.compilation.tap("BabelExternalHelpersWebpackPlugin", compilation => {
			compilation.hooks.optimizeChunkAssets.tap("BabelExternalHelpersWebpackPlugin", chunks => {
				for (const chunk of chunks) {
					if (!chunk.canBeInitial()) {
						continue;
					}

					for (const file of chunk.files) {
            if (whitelist === 'auto') {
              const code = compilation.assets[file].source();
              const helpers = code.match(/babelHelpers\.(\w+)/g);
              whitelist = helpers && helpers.length ? 
                helpers.filter((m, i) => helpers.indexOf(m) === i).map(m => m.split('.')[1]) : null;
            }
						compilation.assets[file] = new ConcatSource(
							babel.buildExternalHelpers(whitelist, outputType),
							"\n\n",
							compilation.assets[file]
						);
					}
				}
			});
		});
  }
}

module.exports = BabelExternalHelpersWebpackPlugin;