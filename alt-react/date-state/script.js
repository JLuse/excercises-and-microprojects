var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// // const Clock = (props) => {
// //   return (
// //     <div>
// //       <h1>The time is: {props.date.toLocaleTimeString()}</h1>
// //     </div>
// //   )
// // }

var DisplayDate = function DisplayDate(props) {
  return React.createElement(
    'h1',
    null,
    'The time in ',
    props.location,
    ' is: ',
    props.date.toLocaleTimeString()
  );
};

var Clock = function (_React$Component) {
  _inherits(Clock, _React$Component);

  function Clock(props) {
    _classCallCheck(this, Clock);

    var _this = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

    _this.state = {
      date: new Date(),
      location: 'The City' // this is the component state property object
    };return _this;
  }

  _createClass(Clock, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      // run code when component is first rendered into the DOM
      this.timer = setInterval(function () {
        return _this2.updateTime();
      }, 1000);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      // run code just before component is removed from the DOM
      clearInterval(this.timer);
    }
  }, {
    key: 'updateTime',
    value: function updateTime() {
      this.setState({
        date: new Date()
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(DisplayDate, {
          location: this.state.location,
          date: this.state.date
        })
      );
    }
  }]);

  return Clock;
}(React.Component);

DateDisplay.defaultProps = {
  date: new Date()
};

var container = document.getElementById('root');
var root = ReactDOM.createRoot(container);
root.render(React.createElement(Clock, null));