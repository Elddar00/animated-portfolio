import "./about.scss";

function About() {
  return (
    <div className="about">
      <div className="aboutTitle">
        <h1>O Meni</h1>
      </div>
      <div className="aboutSection">
        <div className="aboutLeft">
          <img src="profilna2.png" alt="Profilna" />
        </div>
        <div className="aboutRight">
          <div className="aboutPara">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
              similique enim facilis error ipsa incidunt ducimus corporis omnis
              ab quaerat.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
              similique enim facilis error ipsa incidunt ducimus corporis omnis
              ab quaerat.
            </p>
          </div>
          <div className="aboutSkills">
            <div className="aboutSkill">
              <p>Stručnost u dijagnostici</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="aboutSkill">
              <p>Lečenje zubnih oboljenja</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="aboutSkill">
              <p>Estetska stomatologija</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="aboutSkill">
              <p>Komunikacione veštine</p> <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="aboutAchievements">
        <div className="aboutAchievement">
          <h1>10+</h1>
          <p>Godina Iskustva</p>
        </div>
        <hr />
        <div className="aboutAchievement">
          <h1>90+</h1>
          <p>Zavrsenih Projekata</p>
        </div>
        <hr />
        <div className="aboutAchievement">
          <h1>89+</h1>
          <p>Zadovoljnih Klijenata</p>
        </div>
      </div>
    </div>
  );
}

export default About;
