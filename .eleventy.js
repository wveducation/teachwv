const yaml = require("js-yaml");
const { DateTime } = require("luxon");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const htmlmin = require("html-minifier");
const util = require('util');
const svgContents = require("eleventy-plugin-svg-contents");
const Image = require("@11ty/eleventy-img");

function imageShortcode({src, alt, cls, styleName}) {
  if(alt === undefined) {
    // You bet we throw an error on missing alt (alt="" works okay)
    throw new Error(`Missing \`alt\` on myImage from: ${src}`);
  }

  if (styleName === undefined) {
    throw new Error(`Missing \`styleName\` on myImage from: ${src}`);
  }

  let styles = {
    medium_half: {
      sizes: "(max-width: 767px) 100vw, 600px"
    }
  }

  let options = {
    widths: [640, 768, 1024],
    formats: ['webp', 'jpeg'],
    urlPath: "/static/img/",
    outputDir: "./_site/static/img/"
  };

  Image(src, options);

  let sizes = styles[styleName].sizes;

  let imageAttributes = {
    class: cls,
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };
  // get metadata even the images are not fully generated
  metadata = Image.statsSync(src, options);
  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(svgContents); 

  // Disable automatic use of your .gitignore
  eleventyConfig.setUseGitIgnore(false);

  // Merge data instead of overriding
  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addFilter('console', function(value) {
    const str = util.inspect(value);
    return `<pre class="block" style="max-height: 500px; overflow-y: scroll;">${unescape(str)}</pre>;`
  });

  // human readable date
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLL yyyy"
    );
  });

  eleventyConfig.addFilter("sortByName", (items) => {
    let data = [...items];
    return data.sort((a, b) => { b.data.name.localeCompare(a.data.name) });
  })

  eleventyConfig.addFilter("sortResultsDirectory", (results) => {
    // Using sort for multiple columns
    // https://dev.to/markbdsouza/js-sort-an-array-of-objects-on-multiple-columns-keys-2bj1

    // avoids mutating results collection
    let data = [...results];
    // sorts by grade, then subject, then area.
    return data.sort((a, b) => (a.data.grade.localeCompare(b.data.grade) || a.data.subject.localeCompare(b.data.subject) || a.data.area.localeCompare(b.data.area)) );
  });

  eleventyConfig.addShortcode("image", imageShortcode);

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  eleventyConfig.addShortcode("buildTime", () => `${new Date().toISOString()}`);
  
  eleventyConfig.addShortcode("getItemName", (collection, id) => {

    let items = collection.filter( (item) => {
      if (item.data.id == id ) {
        return item;
      }
    });
    
    return items[0].data.name;
  });

  eleventyConfig.addShortcode("getSubjectField", (collection, id, fieldName) => {

    let items = collection.filter( (item) => {
      if (item.data.id == id ) {
        return item;
      }
    });
    
    return items[0].data[fieldName];
  });

  eleventyConfig.addShortcode("subjectTree", (results, grades, subjects, areas) => {
    const tree = {};

    // Make a list of subjects which are used in any results.
    results.forEach(result => {

      // if the tree doesn't yet have this result's subject, add it
      if (!(tree.hasOwnProperty(result.data.grade))) {
        tree[result.data.grade] = {
          "name": getNameById(grades, result.data.grade),
          "subjects": {}
        };
      }

      // if this subject id branch doesn't have this grade yet, add it
      if (!(tree[result.data.grade]['subjects'].hasOwnProperty(result.data.subject))) {
        tree[result.data.grade]['subjects'][result.data.subject] = {
          "name": getNameById(subjects, result.data.subject),
          "areas": {}
        };
      }

      // if this subject and grade branch doesn't have this area yet, add it
      if (!(tree[result.data.grade]['subjects'][result.data.subject]['areas'].hasOwnProperty(result.data.area))) {
        tree[result.data.grade]['subjects'][result.data.subject]['areas'][result.data.area] = {
          "name": getNameById(areas, result.data.area),
          "url": result.url
        };
      }

    });

    return JSON.stringify(tree);
  });

  // Return grades which are referenced on results which also include a given subject.
  const getNameById = (data, id) => {
    let name;

    data.every(item => {
      if (item.data.id == id) {
        name = item.data.name;
        return false;
      }
      return true;
    });

    return name;
  }

  // Syntax Highlighting for Code blocks
  eleventyConfig.addPlugin(syntaxHighlight);

  // To Support .yaml Extension in _data
  // You may remove this if you can use JSON
  eleventyConfig.addDataExtension("yaml", (contents) =>
    yaml.safeLoad(contents)
  );

  // Copy Static Files to /_Site
  eleventyConfig.addPassthroughCopy({
    "./src/robots.txt": "./robots.txt",
    "./src/admin/config.yml": "./admin/config.yml",
    "./node_modules/prismjs/themes/prism-tomorrow.css": "./static/css/prism-tomorrow.css",
    "./src/static/fonts/icons/fonts/*": "./static/fonts/icons/fonts/",
    "./src/static/fonts/icons/style.css": "./static/fonts/icons/style.css",
    "./src/static/files/*": "./static/files/",
  });

  // Copy Image Folder to /_site
  eleventyConfig.addPassthroughCopy("./src/static/img");

  // Copy favicon to route of /_site
  eleventyConfig.addPassthroughCopy("./src/static/favicon");

  // Minify HTML
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    // Eleventy 1.0+: use this.inputPath and this.outputPath instead
    if (outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }

    return content;
  });

  // Let Eleventy transform HTML files as nunjucks
  // So that we can use .html instead of .njk
  return {
    dir: {
      input: "src",
    },
    htmlTemplateEngine: "njk",
  };
};
