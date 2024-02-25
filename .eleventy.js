module.exports = function(eleventyConfig) {
    // Set custom directories for input, output, includes, and data
    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy("./src/css/main.css");
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