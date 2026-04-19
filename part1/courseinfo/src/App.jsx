const Header = ({ course }) => {
  return (
    <h1>{course}</h1>
  );
};

const Part = ({ part, exercises }) => {
  return (
    <p>{part} {exercises}</p>
  );
};

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => <Part key={part.id} {...part} />)}
    </>
  );
};

const Total = ({ parts }) => {
  return (
    <p>Number of exercises {parts.reduce((sum, part) => sum + part.exercises, 0)}</p>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
    {id: 1, part: 'Fundamentals of React', exercises: 10},
    {id: 2, part: 'Using props to pass data', exercises: 7},
    {id: 3, part: 'State of component', exercises: 14}
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;