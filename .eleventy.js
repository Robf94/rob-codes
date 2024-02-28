module.exports = function(eleventyConfig) {
  
  // Set custom directories for input, output, includes, and data
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/css/main.css");

  // Get current year NOTE lowercase "c" in "addShortcode" - took me about 30 minutes to realise this was throwing an error...
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    HTMLTemplateEngine: 'njk',
  };
};