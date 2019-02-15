# babel-external-helpers-webpack-plugin

Webpack plugin to auto inject babel external helpers.

## How to use

Use with [@babel/plugin-external-helpers](https://www.npmjs.com/package/@babel/plugin-external-helpers) or [babel-plugin-external-helpers](https://www.npmjs.com/package/babel-plugin-external-helpers)

```js
// webpack.config.js
{
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-external-helpers'] // work with external-helpers
        }
      }
    ]
  },
  plugins: [
    new BabelExternalHelpersWebpackPlugin({
      babel: require('@babel/core'), // "babel" is a required option
      // babel: require.resolve('@babel/core')
    })
  ],
}
```

## Options

* **babel**: `required`, `@babel/core` or `babel-core` module (or resolved path).
* **whitelist**: Whitelist for `@babel/plugin-external-helpers`, by default `auto`, it'll scan the code and analyses which helpers are being used.
* **outputType**: By default `global`, `global/umd/var`.




