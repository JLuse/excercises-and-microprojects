
const Temp = (props) => {
  return <h1>Its {props.degree} degree {props.unit} out hurr!</h1>
}
const ele = <Temp degree={102} unit="Fahrenheit" />

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(ele);