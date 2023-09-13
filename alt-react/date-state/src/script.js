// // const Clock = (props) => {
// //   return (
// //     <div>
// //       <h1>The time is: {props.date.toLocaleTimeString()}</h1>
// //     </div>
// //   )
// // }

const DisplayDate = (props) => {
  return <h1>The time in {props.location} is: {props.date.toLocaleTimeString()}</h1>
}

class Clock extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      date: new Date(),
      location: 'The City',
    } // this is the component state property object
  }

  componentDidMount () {
    // run code when component is first rendered into the DOM
    this.timer = setInterval(
      () => this.updateTime(),
      1000
    );
  }

  componentWillUnmount () {
    // run code just before component is removed from the DOM
    clearInterval(this.timer)
  }

  updateTime() {
    this.setState({
      date: new Date()
    })
  }


  render() {
    return (
          <div>
            <DisplayDate 
              location={this.state.location}
              date={this.state.date}
            />
          </div>
        )
    }
}

DateDisplay.defaultProps = {
  date: new Date()
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Clock />);