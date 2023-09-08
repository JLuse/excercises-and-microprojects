const name = 'Jay'
const element = <h1>Hello {name}!</h1>;

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(element);