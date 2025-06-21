const BioData = () => {
    return (
        <div className="bio-data">
        <h2>BioData of Khalid Hossain</h2>
        <hr/>
        <div className="personal-info">
          <p>Phone: +88274937722</p>
          <p>Email: <a href="#">khalidhossain@gmail.com</a></p>
          <p>LinkedId: linked/In/KH</p>

        </div>
        <div className="skills">
          <h3>My skills</h3>
          <ul>
            <li>React</li>
            <li>JS</li>
            <li>Node</li>
            <li>WP</li>
            <li>PHP</li>
          </ul>
        </div>
        <div className="interests">
          <h3>My Interests</h3>
          <ul>
            <li>Chess</li>
            <li>Football</li>
            <li>Coading</li>
            <li>TT</li>
            <li>Traveling</li>
          </ul>
        </div>
      </div>
    );
};

export default BioData;