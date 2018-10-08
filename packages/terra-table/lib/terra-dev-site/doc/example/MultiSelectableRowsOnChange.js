'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Table = require('terra-table/lib/Table');

var _Table2 = _interopRequireDefault(_Table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var onChange = function onChange(event, selectedIndexes, newIndex) {
  // eslint-disable-next-line no-alert
  alert('Selected indexes changed. Newly changed index: ' + newIndex + '. Selected indexes: ' + selectedIndexes);
};
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions


var MultiSelectableRowsDisableUnselectedRows = function MultiSelectableRowsDisableUnselectedRows() {
  return _react2.default.createElement(
    _Table2.default,
    { isStriped: false },
    _react2.default.createElement(
      _Table2.default.Header,
      null,
      _react2.default.createElement(_Table2.default.HeaderCell, { content: 'Name', key: 'NAME', minWidth: 'small' }),
      _react2.default.createElement(_Table2.default.HeaderCell, { content: 'Address', key: 'ADDRESS', minWidth: 'medium' }),
      _react2.default.createElement(_Table2.default.HeaderCell, { content: 'Phone Number', key: 'PHONE_NUMBER', minWidth: 'large' })
    ),
    _react2.default.createElement(
      _Table2.default.MultiSelectableRows,
      { onChange: onChange },
      _react2.default.createElement(
        _Table2.default.Row,
        { key: 'PERSON_0' },
        _react2.default.createElement(_Table2.default.Cell, { content: 'John Smith', key: 'NAME' }),
        _react2.default.createElement(_Table2.default.Cell, { content: '123 Adams Drive', key: 'ADDRESS' }),
        _react2.default.createElement(_Table2.default.Cell, { content: '111-222-3333', key: 'PHONE_NUMBER' })
      ),
      _react2.default.createElement(
        _Table2.default.Row,
        { key: 'PERSON_1' },
        _react2.default.createElement(_Table2.default.Cell, { content: 'Jane Smith', key: 'NAME' }),
        _react2.default.createElement(_Table2.default.Cell, { content: '321 Drive Street', key: 'ADDRESS' }),
        _react2.default.createElement(_Table2.default.Cell, { content: '111-222-3333', key: 'PHONE_NUMBER' })
      ),
      _react2.default.createElement(
        _Table2.default.Row,
        { key: 'PERSON_2' },
        _react2.default.createElement(_Table2.default.Cell, { content: 'Dave Smith', key: 'NAME' }),
        _react2.default.createElement(_Table2.default.Cell, { content: '213 Raymond Road', key: 'ADDRESS' }),
        _react2.default.createElement(_Table2.default.Cell, { content: '111-222-3333', key: 'PHONE_NUMBER' })
      )
    )
  );
};

exports.default = MultiSelectableRowsDisableUnselectedRows;