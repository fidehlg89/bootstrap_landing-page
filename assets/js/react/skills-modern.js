const { useState } = React;

// Grupo 1 de tags
const tagsDataGroup1 = [
  {
    name: "WordPress",
    gradient: "linear-gradient(90deg, #F33C3A 0%, #F50C83 100%)",
    shadow: "0px 4px 14px rgba(244, 29, 104, 0.55)",
    initial: { top: "10px", left: "100px", rotate: "-2deg" },
    hover: { top: "120%", left: "35%" },
    animation: "animate-floatwp",
  },
  ,
  {
    name: "HTML y HTML5",
    gradient: "linear-gradient(90deg, #85FFCE 0%, #0FE859 100%)",
    shadow: "0px 4px 14px rgba(44, 185, 186, 0.55)",
    initial: { top: "120px", left: "150px", rotate: "-1.73deg" },
    hover: { top: "30%", left: "40%" },
    animation: "animate-floathtml",
  },
  {
    name: "Bootstrap",
    gradient: "linear-gradient(90deg, #FCEF5E 0%, #FF5C00 100%)",
    shadow: "0px 4px 14px rgba(151, 212, 69, 0.55)",
    initial: { top: "150px", left: "500px", rotate: "-5.63deg" },
    hover: { top: "100px", left: "20%" },
    animation: "animate-floatbootstrap",
  },
  {
    name: "Django",
    gradient: "linear-gradient(90deg, #00FFC2 0%, #006DD2 100%)",
    shadow: "0px 4px 14px rgba(30, 223, 221, 0.55)",
    initial: { top: "70px", left: "380px", rotate: "20deg" },
    hover: { top: "90%", left: "50%" },
    animation: "animate-floatdjango",
  },
  {
    name: "C#",
    gradient: "linear-gradient(90deg, #44FF57 0%, #00D4FF 100%)",
    shadow: "0px 4px 14px rgba(0, 212, 255, 0.55)",
    initial: { top: "-20px", left: "560px", rotate: "-25deg" },
    hover: { top: "10%", left: "45%" },
    animation: "animate-floatcsharp",
  },
  {
    name: "Java",
    gradient: "linear-gradient(90deg, #85FF91 0%, #0FDBE8 100%)",
    shadow: "0px 4px 14px rgba(30, 223, 221, 0.55)",
    initial: { top: "150px", left: "180px", rotate: "-10deg" },
    hover: { top: "40%", left: "52%" },
    animation: "animate-floatjava",
  },
  {
    name: "Ruby",
    gradient: "linear-gradient(90deg, #FBFF47 0%, #E5BD23 100%)",
    shadow: "0px 4px 14px rgba(229, 189, 35, 0.55)",
    initial: { top: "110px", left: "620px", rotate: "20deg" },
    hover: { top: "10%", left: "5%" },
    animation: "animate-floatruby",
  },
  {
    name: "CSS y CSS3",
    gradient: "linear-gradient(90deg, #C12DF5 0%, #9B0BF5 100%)",
    shadow: "0px 4px 14px rgba(155, 11, 245, 0.55)",
    initial: { top: "300px", left: "20px", rotate: "23.62deg" },
    hover: { top: "140%", left: "10%", rotate: "-2deg" },
    animation: "animate-floatcss",
  },
  {
    name: "Angular",
    gradient: "linear-gradient(90deg, #E5BD23 0%, #F18822 100%)",
    shadow: "0px 4px 14px rgba(166, 216, 88, 0.55)",
    initial: { top: "200px", left: "350px", rotate: "-6.27deg" },
    hover: { top: "90%", left: "25%" },
    animation: "animate-floatangular",
  },
  {
    name: "MongoDB",
    gradient: "linear-gradient(90deg, #FF4B4B 0%, #FF2149 100%)",
    shadow: "0px 4px 14px rgba(255, 65, 73, 0.55)",
    initial: { top: "380px", left: "320px", rotate: "1.6deg" },
    hover: { top: "60%", left: "35%" },
    animation: "animate-floatmongodb",
  },
  {
    name: "SQL",
    gradient: "linear-gradient(90deg, #D178FC 0%, #9B0BF5 100%)",
    shadow: "0px 4px 14px rgba(255, 89, 89, 0.55)",
    initial: { top: "350px", left: "600px", rotate: "-8.27deg" },
    hover: { top: "45%", left: "15%" },
    animation: "animate-floatsql",
  },
  {
    name: "NodeJS",
    gradient: "linear-gradient(90deg, #85FFCE 0%, #0FCEE8 100%)",
    shadow: "0px 4px 14px rgba(64, 175, 208, 0.55)",
    initial: { top: "550px", left: "260px", rotate: "8.58deg" },
    hover: { top: "20%", left: "25%" },
    animation: "animate-floatnode",
  },

  //Fix positions
  {
    name: "PHP",
    gradient: "linear-gradient(90deg, #FFB076 0%, #FF2149 100%)",
    shadow: "0px 4px 14px rgba(229, 189, 35, 0.55)",
    initial: { top: "380px", left: "600px", rotate: "-8.27deg" },
    hover: { top: "20px", left: "10%" },
    animation: "animate-floatphp",
  },
];

function Tags() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative w-full h-[650px]">
      {/* Texto */}
      <div className="skills-intro">
        <p className="max-w-xs text-md text-white bg-black bg-opacity-50 rounded-lg p-4">
        Unlock exceptional software solutions, honed through extensive experience working with companies and as a freelance developer. My expertise spans both Front End and Back End development, with a deep mastery of diverse languages, CMS platforms, and frameworks. I specialize in delivering innovative, technically advanced software tailored to meet your unique business needs. With an agile, user-centric approach, I create engaging interfaces and robust backend systems that drive your business forward. Trust me to provide cutting-edge solutions that cover the full spectrum of modern software development.
        </p>
      </div>

      {/* Grupo 1 de Tags */}
      <div
        className="absolute top-0 left-1/2 -translate-x-40 w-full h-1/2 z-0"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {tagsDataGroup1.map((tag, index) => (
          <div
            key={index}
            className={`absolute text-white text-md p-2 rounded-lg cursor-pointer transition-all duration-300 ease-in-out transform ${
              hovered ? tag.animation : ""
            }`}
            style={{
              background: tag.gradient,
              boxShadow: tag.shadow,
              top: tag.initial.top,
              left: tag.initial.left,
              rotate: tag.initial.rotate,
            }}
          >
            {tag.name}
          </div>
        ))}
      </div>
    </div>
  );
}

// Renderiza el componente en el div con id "root"
ReactDOM.render(<Tags />, document.getElementById("app-skills"));
