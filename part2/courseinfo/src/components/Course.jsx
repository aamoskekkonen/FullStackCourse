const Subheader = ({ text }) => <h2>{text}</h2>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
    {parts.map(part => <Part key={part.id} part={part}/>)}
  </>

const Total = ({ sum }) => <p><b>total of {sum} exercises</b></p>

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

export default Course