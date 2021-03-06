/* postcss.config.js */
const postcssNormalize = require('postcss-normalize');
module.exports = {
    "plugins": [
        require('postcss-flexbugs-fixes'),
        require('autoprefixer')({
            overrideBrowserslist: [
              "Android 4.1",
              "iOS 7.1",
              "Chrome > 31",
              "ff > 31",
              "ie >= 8"
              //'last 10 versions', // 所有主流浏览器最近10版本用
        ], grid: true}),
        require("postcss-aspect-ratio-mini"),
        require("postcss-write-svg")({ utf8: false }),
        require("postcss-cssnext"),
        require("postcss-px-to-viewport")({
            viewportWidth: 750,
            viewportHeight: 1334,
            unitPrecision: 3,
            viewportUnit: 'vw',
            selectorBlackList: ['.ignore', '.hairlines'],
            minPixelValue: 1,
            mediaQuery: false
        }),
        require("postcss-viewport-units"),
        require("cssnano")({
            preset: "advanced",
            autoprefixer: false,
            "postcss-zindex": false
        }),
        require('postcss-flexbugs-fixes'),
        postcssNormalize()
    ]
}