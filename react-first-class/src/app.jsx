import BioData from "./components/BioData";

const App = () => {
  return (
    <>
      <div className="bio-data">
        <h2>BioData of Faima Ahmed</h2>
        <hr />
        <div className="personal-info">
          <p>Phone: +882835672852</p>
          <p>
            Email: <a href="#">faimaahmed@gmail.com</a>
          </p>
          <p>LinkedId: linked/In/faimaahmed</p>
        </div>
        <div className="skills">
          <h3>My skills</h3>
          <ul>
            <li>React</li>
            <li>JS</li>
            <li>Node</li>
          </ul>
        </div>
        <div className="interests">
          <h3>My Interests</h3>
          <ul>
            <li>Chess</li>
            <li>Football</li>
            <li>Coading</li>
          </ul>
        </div>
      </div>
      <hr />
      <br />
      <BioData />
    </>
  );
};

export default App;
