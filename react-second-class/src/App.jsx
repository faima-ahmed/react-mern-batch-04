import "./App.css";

function App() {
  const people = [
    "Creola Katherine Johnson: mathematician",
    "Mario José Molina-Pasquel Henríquez: chemist",
    "Mohammad Abdus Salam: physicist",
    "Percy Lavon Julian: chemist",
    "Subrahmanyan Chandrasekhar: astrophysicist",
  ];

  // const person=[];
  // people.forEach((p)=>{
  //   person.push(<li>{p}</li>)
  // })
  return (
    <section>
      <h1>People List</h1>
      <ul>
        {people.map((p) => (
          <li>{p}</li>
        ))}
      </ul>
    </section>
  );
}

export default App;
