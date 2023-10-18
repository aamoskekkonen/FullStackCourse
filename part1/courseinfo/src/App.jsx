const App = () => {
  const course = 'Half Stack application development'
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  return (
    <div>
      <Header course={course} />
      <Content exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}

const Header = (course) => {
  return (<h1>{course}</h1>)
}

const Content = ( {exercises1, exercises2, exercises3} ) => {
  const part1 = 'Fundamentals of React'
  const part2 = 'Using props to pass data'
  const part3 = 'State of a component'
  return (
    <>
      <Part description={part1} exercises={exercises1}/>
      <Part description={part2} exercises={exercises2}/>
      <Part description={part3} exercises={exercises3}/>
    </>
  )
}

const Total = ( {exercises1, exercises2, exercises3} ) => {
  return (
    <>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </>
  )
}

const Part = ( {description, exercises} ) => {
  return (<p>{description} {exercises}</p>)
}

export default App