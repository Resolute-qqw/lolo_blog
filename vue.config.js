"use strict";
module.exports = {
  pages: {
    pc: {
      // 入口文件
      entry: "./src/pc_main.js",
      // 模板来源
      template: "public/index.html",
      // 在 dist/index.html 的输出
      filename: "index.html",
      title: "pc",
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ["chunk-vendors", "chunk-common", "pc"]
    },
    h5: {
      // 入口文件
      entry: "./src/h5_main.js",
      // 模板来源
      template: "public/index.html",
      // 在 dist/index.html 的输出
      filename: "h5.html",
      title: "h5",
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ["chunk-vendors", "chunk-common", "h5"]
    }
  }
};
