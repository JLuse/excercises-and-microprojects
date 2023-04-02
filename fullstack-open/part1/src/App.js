import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

// part 1b
// const App = () => {
//   const course = 'Half Stack application development'
//   const parts = [
//     {
//       name: 'Fundamentals of React',
//       exercises: 10
//     },
//     {
//       name: 'Using props to pass data',
//       exercises: 7
//     },
//     {
//       name: 'State of a component',
//       exercises: 14
//     }
//   ]

//   return (
//   <div>
//     <Header course={course} />
//     <Content parts={parts} />
//     <Total parts={parts} />
//   </div>
//   )
// }

// Part 1c
// const Hello = ({name, age}) => {
//   const bornYear = () => new Date().getFullYear() - age

//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   )
// }
import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  console.log('rendering with counter value', counter)

  const increaseByOne = () => {
    console.log('increasing, value before', counter)
    setCounter(counter + 1)
  }

  const decreaseByOne = () => { 
    console.log('decreasing, value before', counter)
    setCounter(counter - 1)
  }

  const setToZero = () => {
    console.log('resetting to zero, value before', counter)
    setCounter(0)
  }


  return (
    <div>
      <Display counter={counter}/>
      <Button handleClick={increaseByOne} text="Up"/>
      <Button handleClick={decreaseByOne} text="Down"/>
      <Button handleClick={setToZero} text="Zero"/>
    </div>
  )
}

const Display = ({counter}) => <div>{counter}</div>

const Button = ({text, handleClick}) => <butto onClick={handleClick}>{text}</butto>


export default App