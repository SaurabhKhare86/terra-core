'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MultiSelectList = require('terra-list/lib/MultiSelectList');

var _MultiSelectList2 = _interopRequireDefault(_MultiSelectList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var list = function list() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h2',
      null,
      'Examples'
    ),
    _react2.default.createElement(
      'h3',
      null,
      'Multi Select List'
    ),
    _react2.default.createElement(
      _MultiSelectList2.default,
      { isDivided: true },
      _react2.default.createElement(_MultiSelectList2.default.Item, { content: _react2.default.createElement(
          'span',
          null,
          'test'
        ), key: '123' }),
      _react2.default.createElement(_MultiSelectList2.default.Item, { content: _react2.default.createElement(
          'span',
          null,
          'test'
        ), key: '124' }),
      _react2.default.createElement(_MultiSelectList2.default.Item, { content: _react2.default.createElement(
          'span',
          null,
          'test'
        ), key: '125' })
    ),
    _react2.default.createElement(
      'h3',
      null,
      'Multi Select List (Max Selectable: 2)'
    ),
    _react2.default.createElement(
      _MultiSelectList2.default,
      { maxSelectionCount: 2 },
      _react2.default.createElement(_MultiSelectList2.default.Item, { content: _react2.default.createElement(
          'span',
          null,
          'test'
        ), key: '123' }),
      _react2.default.createElement(_MultiSelectList2.default.Item, { content: _react2.default.createElement(
          'span',
          null,
          'test'
        ), key: '124' }),
      _react2.default.createElement(_MultiSelectList2.default.Item, { content: _react2.default.createElement(
          'span',
          null,
          'test'
        ), key: '125' })
    )
  );
};
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
exports.default = list;