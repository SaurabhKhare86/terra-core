'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('terra-base/lib/baseStyles');

var _ModalOverlayModule = require('./ModalOverlay.module.scss');

var _ModalOverlayModule2 = _interopRequireDefault(_ModalOverlayModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cx = _bind2.default.bind(_ModalOverlayModule2.default);

var zIndexes = ['6000', '7000', '8000', '9000'];

var propTypes = {
  /**
   * Z-Index layer to apply to the ModalContent and ModalOverlay.
   */
  zIndex: _propTypes2.default.oneOf(zIndexes)
};

var defaultProps = {
  zIndex: '6000'
};

var ModalOverlay = function (_React$Component) {
  _inherits(ModalOverlay, _React$Component);

  function ModalOverlay() {
    _classCallCheck(this, ModalOverlay);

    return _possibleConstructorReturn(this, (ModalOverlay.__proto__ || Object.getPrototypeOf(ModalOverlay)).apply(this, arguments));
  }

  _createClass(ModalOverlay, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.overflow = document.documentElement.style.overflow;
      // Disable scrolling on the page when Overlay is displayed
      document.documentElement.style.overflow = 'hidden';
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      // Enable scrolling on the page since Overlay has gone away
      document.documentElement.style.overflow = this.overflow;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          zIndex = _props.zIndex,
          customProps = _objectWithoutProperties(_props, ['zIndex']);

      var zIndexLayer = '6000';
      if (zIndexes.indexOf(zIndex) >= 0) {
        zIndexLayer = zIndex;
      }
      return _react2.default.createElement('div', _extends({}, customProps, { className: cx(['overlay', 'layer-' + zIndexLayer, customProps.className]) }));
    }
  }]);

  return ModalOverlay;
}(_react2.default.Component);

ModalOverlay.propTypes = propTypes;
ModalOverlay.defaultProps = defaultProps;

exports.default = ModalOverlay;