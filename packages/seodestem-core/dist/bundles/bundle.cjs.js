"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Core = void 0;

var _figmaApi = require("@seodestem/figma-api");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Core = function Core(baseUrl) {
  _classCallCheck(this, Core);

  this.baseUrl = baseUrl !== null && baseUrl !== void 0 ? baseUrl : 'https://api.figma.com';
  this.request = _figmaApi.request;
};

exports.Core = Core;

//# sourceMappingURL=bundle.cjs.js.map