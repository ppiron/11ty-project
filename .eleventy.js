const { EleventyRenderPlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("posts");

  let markdownIt = require("markdown-it");
  let markdownItFM = require("markdown-it-front-matter");
  let options = {
    html: true,
  };
  let markdownLib = markdownIt(options).use(markdownItFM, function (fm) {
    console.log(fm);
  });

  eleventyConfig.setLibrary("md", markdownLib);

  return {
    templateFormats: ["html", "njk", "yml"],
    // markdownTemplateEngine: false,
  };
};
