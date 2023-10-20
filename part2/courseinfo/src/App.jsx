const MainHeader = ({ text }) => <h1>{text}</h1>

const Subheader = ({ text }) => <h2>{text}</h2>

const Total = ({ sum }) => <p><b>total of {sum} exercises</b></p>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
    {parts.map(part => <Part key={part.id} part={part}/>)}
  </>

const Course = ({ course }) => {
  const total = course.parts.reduce((accumulator, part) => accumulator + part.exercises, 0)
  return (
    <>
      <Subheader text={course.name} />
      <Content parts={course.parts} />
      <Total sum={total} />
    </>
  )
}

const App = () => {
  const courses = [
    {
      id: 1,
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <>
      <MainHeader text={'Web development curriculum'} />
      {courses.map(course => <Course key={course.id} course={course} />)}
    </>
  )
}

export default App