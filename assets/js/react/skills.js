const Skill = ({ name, level }) => {
  return (
    <div className="progress">
      <span className="skill">
        {name} <i className="val">{`${level}%`}</i>
      </span>
      <div className="progress-bar-wrap">
        <div
          className="progress-bar"
          role="progressbar"
          aria-label={`${name}-${level}%`}
          aria-valuenow={level}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
};

const Skillslist = () => {
  const skills1 = [
    { name: "HTML", level: 85 },
    { name: "CSS", level: 80 },
    { name: "JS", level: 70 },
    { name: "JQuery", level: 45 },
    { name: "Vue js", level: 60 },
    { name: "React js", level: 75 },
    { name: "TS", level: 60 },
    { name: "PHP", level: 70 },
    { name: "Yii2", level: 40 },
    { name: "Laravel", level: 60 },
    { name: "Symfony", level: 30 }
  ];
  const skills2 = [
    { name: "Python", level: 30 },
    { name: "Django", level: 35 },
    { name: "Ruby", level: 20 },
    { name: "Ruby o Rails", level: 20 },
    { name: "Java", level: 30 },
    { name: "C#", level: 55 },
    { name: ".Net Core", level: 45 },
    { name: "Blazor WASM", level: 55 },
    { name: "Xamarin", level: 35 },
    { name: "Wordpress/CMS", level: 75 },
    { name: "SQL", level: 55 }
  ];

  return (
    <div className="row">
      <div className="col-lg-6" data-aos="fade-up">
        {skills1.length > 0
          ? skills1.map((skill, i) => {
              return <Skill key={i} name={skill.name} level={skill.level} />;
            })
          : null}
      </div>
      <div className="col-lg-6" data-aos="fade-up">
        {skills2.length > 0
          ? skills2.map((skill, i) => {
              return <Skill key={i} name={skill.name} level={skill.level} />;
            })
          : null}
      </div>
    </div>
  );
};

const container = document.getElementById("app-skills");
const root = ReactDOM.createRoot(container);
root.render(<Skillslist />);
