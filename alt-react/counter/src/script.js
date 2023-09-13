// Example with handleClick()
// class Button extends React.Component {
//   handleClick() {
//     console.log('this is:', this);
//   }

//   render() {
//     // This syntax ensures `this` is bound within handleClick
//     return (
//       <button onClick={(e) => this.handleClick(e)}>
//         Click me
//       </button>
//     );
//   }
// }

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {count: 0}
    // Pretty important
    this.addCount = this.addCount.bind(this);
  }

  addCount(amount) {
    this.setState({
      count: this.state.count + amount
    })
  }

  render() {
    return (
      <React.Fragment>
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => this.addCount(1)}>+1</button>
        <button onClick={() => this.addCount(2)}>+2</button>
        <button onClick={() => this.addCount(3)}>+3</button>
      </React.Fragment>
    )
  }
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Counter />);