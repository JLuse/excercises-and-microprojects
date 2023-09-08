
var Temp = function Temp(props) {
  return React.createElement(
    "h1",
    null,
    "Its ",
    props.degree,
    " degree ",
    props.unit,
    " out hurr!"
  );
};
var ele = React.createElement(Temp, { degree: 102, unit: "Fahrenheit" });

var container = document.getElementById('root');
var root = ReactDOM.createRoot(container);
root.render(ele);