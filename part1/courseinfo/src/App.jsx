const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3}/>
      <Total part1={part1} part2={part2} part3={part3}/>
    </div>
  )
}

const Header = (course) => {
  return (<h1>{course}</h1>)
}

const Content = ( {part1, part2, part3} ) => {
  return (
    <>
      <Part description={part1.name} exercises={part1.exercises}/>
      <Part description={part2.name} exercises={part2.exercises}/>
      <Part description={part3.name} exercises={part3.exercises}/>
    </>
  )
}

const Total = ( {part1, part2, part3} ) => {
  return (
    <>
      <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
    </>
  )
}

const Part = ( {description, exercises} ) => {
  return (<p>{description} {exercises}</p>)
}

export default App