module.exports = function(eleventyConfig) {
  
  // Set custom directories for input, output, includes, and data
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/css/main.css");
  eleventyConfig.addPassthroughCopy("./src/main.js");

  // Get current year
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Specify the input, output, includes, and data directories
  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    // Set Nunjucks as the HTML template engine
    HTMLTemplateEngine: 'njk',
    // Specify that Nunjucks includes should have the .njk extension
    markdownTemplateEngine: 'njk',
    // Add additional directories or files to watch for changes
    addWatchTarget: "./src/_data",
  };
};