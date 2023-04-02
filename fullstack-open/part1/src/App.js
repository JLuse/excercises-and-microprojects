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
const App = (props) => {
  const {counter} = props
  return (
    <div>
      {counter}
    </div>
  )
}


export default App