# webpack-crash-course

- dist
  - webpackはmoduleをかき集めるので、bundleし終わったファイルを出力する先として利用する

### $ npx webpack --config webpack.config.js
明示的に設定ファイルを使いたいときに`--config`オプションを利用する

### $ npx webpack --mode development
`mode`オプションをつけないと下記のWARNINGが出力される
```
WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/concepts/mode/
```


## CSS-Loader
CSSをJavascriptで利用するためのモジュール

### エラーについて
- https://webpack.js.org/concepts/loaders/#loader-features
- moduleの実行(use)は逆順に実行される。style-loaderとcss-loaderの実行順で間違って利用される可能性ある

```
ERROR in ./src/style.css
Module build failed (from ./node_modules/css-loader/dist/cjs.js):
CssSyntaxError

(2:1) Unknown word

  1 |
> 2 | var content = require("!!./style.css");
    | ^
  3 |
  4 | if(typeof content === 'string') content = [[module.id, content, '']];

 @ ./src/index.js 8:0-31
ℹ ｢wdm｣: Failed to compile.
```
