'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _xfc = require('xfc');

require('./Provider.scss');

require('./ProviderIframe.module.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomEventsProvider = function (_React$Component) {
  _inherits(CustomEventsProvider, _React$Component);

  function CustomEventsProvider() {
    _classCallCheck(this, CustomEventsProvider);

    return _possibleConstructorReturn(this, (CustomEventsProvider.__proto__ || Object.getPrototypeOf(CustomEventsProvider)).apply(this, arguments));
  }

  _createClass(CustomEventsProvider, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.body.classList.toggle('embedded-content-body');
      if (!window.location.origin) {
        var port = window.location.port ? ':' + window.location.port : '';
        window.location.origin = window.location.protocol + '//' + window.location.hostname + port;
      }
      _xfc.Provider.init({ acls: [window.location.origin] });
      _xfc.Provider.trigger('EventA');
      setTimeout(function () {
        _xfc.Provider.trigger('EventB');
      }, 1000);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.body.classList.toggle('embedded-content-body');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'title',
          null,
          'Custom Events Provider'
        ),
        _react2.default.createElement('meta', { charSet: 'utf-8' }),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h1',
            null,
            'Custom Events'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Custom events can be registered with the consumer and intiated by the provider.'
          ),
          _react2.default.createElement(
            'p',
            null,
            'After a one second delay the provider sends the message and consumer handles the message by adding a border.'
          ),
          _react2.default.createElement(
            'p',
            null,
            'After another second delay the provider sends the message and consumer handles the message by updating the border.'
          )
        )
      );
    }
  }]);

  return CustomEventsProvider;
}(_react2.default.Component);

exports.default = CustomEventsProvider;