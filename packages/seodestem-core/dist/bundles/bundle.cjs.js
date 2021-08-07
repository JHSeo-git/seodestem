"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sum = sum;
exports.sub = sub;
exports.logger = logger;
exports["default"] = void 0;

function sum(i, j) {
  return i + j;
}

function sub(i, j) {
  return i - j;
}

function logger(text) {
  return text;
}

var _default = {
  sum: sum,
  sub: sub,
  logger: logger
};
exports["default"] = _default;

//# sourceMappingURL=bundle.cjs.js.map