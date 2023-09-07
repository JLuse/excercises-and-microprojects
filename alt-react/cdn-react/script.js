const ele = React.createElement(
  'h1', // type
  {
    className: 'title',
    onClick: () => {console.log('clicked'); },
    style: {color: 'green'}
  }, // props
  'YOOOOO' // children
)

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(ele);