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
              Kadir Zilkić, rođen 11. aprila 1991. godine u Tutinu. Nakon
              završene osnovne škole "Vuk Karadžić" u Tutinu, jednu godinu
              srednje škole završio je u medresi Gazi Isa-beg u Novom Pazaru,
              dok je preostale tri godine završio u medresi Sinan-beg, koja se
              takođe nalazi u Novom Pazaru.
            </p>
            <br />
            <p>
              Godine 2009. počeo je sa učenjem jezika na Ankara univerzitetu
              TÖMER, isturenom odeljenju u Izmiru. Godine 2010. započeo je
              studije na Istanbul univerzitetu, koji je osnovan 1453. godine i
              najstariji je univerzitet u Turskoj, na Stomatološkom fakultetu,
              koji je osnovan davne 1908. godine.
            </p>
            <br />
            <p> Studije je završio 2016. godine.</p>
            <p>Iste godine počeo je raditi na klinici "Kemal Ömür".</p>
            <p>
              Godine 2017. počeo je raditi na Naturadent klinici koja se takođe
              nalazi u Istanbulu.
            </p>
            <p>
              Godine 2018. počeo je raditi na klinici Dentisyon i u isto vreme
              radio na dve klinike.
            </p>
          </div>
          <div className="aboutSkills">
            <div className="aboutSkill">
              <p>
                Godine 2020. istovremeno radeći na dve klinike, počeo je raditi
                i na Dentavie klinici koja se nalazi u Istanbulu.
              </p>
              <p>
                U periodu od 2018. do 2020. učestvovao je na 30 kurseva iz
                različitih oblasti stomatologije.
              </p>
              <p>
                Godine 2021. osnovao je stomatološku ordinaciju Dentica World u
                Novom Pazaru i nastavio je raditi na dve klinike u Istanbulu, u
                part-time obliku.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutAchievements">
        <div className="aboutAchievement">
          <h1>8+</h1>
          <p>Godina Iskustva</p>
        </div>
        <hr />
        <div className="aboutAchievement">
          <h1>30+</h1>
          <p>Edukacije</p>
        </div>
        <hr />
        <div className="aboutAchievement">
          <h1>20 000+</h1>
          <p>Završeni slučajevi</p>
        </div>
      </div>
    </div>
  );
}

export default About;
