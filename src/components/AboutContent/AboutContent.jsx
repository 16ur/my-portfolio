import "./AboutContent.css";
import aboutMe from "../../assets/aboutMe.jpg";

function AboutContent() {
  return (
    <div id="aboutme">
      <div className="aboutMeContainer">
        <div className="aboutContent">
          <h1>À propos de moi</h1>
        </div>
        <div className="aboutText">
          <p className="hiName">
            Salut, je suis <strong>Axel Manguian.</strong>
          </p>
          <div className="paraText">
            <p className="textInPara">
              As a passionate Front-end Engineer with 4+ years in the field, my
              expertise spans from dynamic web agencies, where versatility and
              creativity are paramount, to prestigious banking corporations
              known for their robust tech stacks. In every setting, I've
              translated complex code into captivating web experiences,
              collaborating with diverse teams to bring visionary projects to
              life. My passion lies in harnessing innovative solutions and
              working alongside forward-thinking individuals to create something
              truly remarkable. Let's join forces and make your next project
              unforgettable!
            </p>
            <img src={aboutMe} className="aboutMePic" alt="pdp-logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
