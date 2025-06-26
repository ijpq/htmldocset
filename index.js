// index.js
const { DocSetGenerator } = require("docset-generator");
const version = "12.2.0";

new DocSetGenerator({
  name: `GCC ${version}`,               // 会生成 "GCC 12.2.0.docset"
  destination: "./output/",             // CI 中的输出目录
  documentation: `./gcc-${version}/html`, // 解包后 HTML 所在路径
  entries: [
    { name: "GCC Manual", type: "Guide", path: "./index.html" }
  ]
}).create();

