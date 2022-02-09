const withTM = require("next-transpile-modules")(["@turbo-ui/core"]);

module.exports = withTM({
  reactStrictMode: true,
});
