const withCSS = require("@zeit/next-css");
const withPurgeCss = require("next-purgecss");

module.exports = withCSS(
  withPurgeCss({
    target: "serverless",
    webpack: config => {
      config.node = {
        fs: "empty"
      };
      config.module.rules.push({
        test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 8192,
            publicPath: "/_next/static/",
            outputPath: "static/",
            name: "[name].[ext]"
          }
        }
      });
      return config;
    }
  })
);
