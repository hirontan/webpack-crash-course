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
