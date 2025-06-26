// index.js
const fs = require("fs");
const path = require("path");
const { DocSetGenerator } = require("docset-generator");

// 指定 HTML 根目录
const docRoot = process.env.DOC_ROOT || "./docs/html";
// DocSet 名称，可根据需要改
const docSetName = process.env.DOCSET_NAME || "GCC Manual";

if (!fs.existsSync(docRoot)) {
  console.error(`ERROR: documentation directory "${docRoot}" not found.`);
  process.exit(1);
}

// 读取所有一级子目录，每个子目录代表一个模块
const modules = fs.readdirSync(docRoot).filter(name => {
  return fs.statSync(path.join(docRoot, name)).isDirectory();
});

// 为每个模块生成一个索引条目
const entries = modules.map(mod => ({
  name: mod,
  type: "Guide",
  path: `./${mod}/index.html`
}));

new DocSetGenerator({
  name: docSetName,
  destination: "./output/",
  documentation: docRoot,
  entries
}).create();

