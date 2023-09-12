// const Clock = (props) => {
//   return (
//     <div>
//       <h1>The time is: {props.date.toLocaleTimeString()}</h1>
//     </div>
//   )
// }

class Clock extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      date: new Date(),
      location: 'The City',
    } // this is the component state property object
  }

  render() {
    return (
          <div>
            <h1>The time in {this.state.location} is: {this.state.date.toLocaleTimeString()}</h1>
          </div>
        )
    }
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Clock />);