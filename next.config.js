
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['s5qqx2XSuQYkJY3sLachCa'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  