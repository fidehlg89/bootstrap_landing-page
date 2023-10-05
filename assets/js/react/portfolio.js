// import portfolioAccordionItems from "./portfolio-accordionitems";
const portfolioAccordionItems = [
  {
    id: "front10",
    title: "Front10",
    description:
      "Empresa Front 10, con sede MIAMI, Florida. USA. Implementación de productos de catálogo con un equipo experimental de desarrolladores.",
    headerTitle: "Front 10 - Programador web frontend",
    url: "https://www.front10.com",
    image: "assets/img/portfolio/front10.svg",
    status: "online"
  },
  {
    id: "raptor-web",
    title: "Raptor web",
    description:
      "Diseñador y programador de sitios Wordpress y Desarrollador web con Laravel en Raptor web",
    headerTitle: "Raptor Web - Desarrollador y diseño de Wordpress, Laravel",
    url: "https://www.raptor-web.com/",
    image: "assets/img/portfolio/raptor-web.png",
    status: "online"
  },
  {
    id: "laravel-shipments",
    title: "Registro de Envíos",
    description:
      "Desarrollador y diseñador LAMP Stack en Raptor web con Laravel y MySQL",
    headerTitle: "Registro de Envíos - Laravel - Lamp stack",
    url: "https://sistema.martelexpresssa.com/",
    image: "assets/img/portfolio/php-shipments.jpg",
    status: "online"
  },
  {
    id: "genius-referrals",
    title: "Genius Referrals",
    description:
      "Trabajo en equipo de desarrollo en Genius Referrals, con sede en Miami Florida, sitio web desarrollado en Symfony",
    headerTitle: "Genius Referrals - Symfony, Docker",
    url: "https://geniusreferrals.com/",
    image: "assets/img/portfolio/H-Degradado.webp",
    status: "online"
  },
  {
    id: "vue-qvasell",
    title: "QvaSell",
    description:
      "Qvasell es un proyecto del equipo de desarrolladores de Knales, con sede en USA, SPA desarrollado con vue js",
    headerTitle: "QvaSell - Vue js",
    url: "https://recargacubana.com/",
    image: "assets/img/portfolio/qvasell.jpg",
    status: "online"
  }
];

const Portfolio = () => {
  return (
    <>
      <div className="section-title">
        <h2>Proyectos</h2>
        {/* <!-- TODO: Add organization for projects and divide personal from companies --> */}
        <p>
          {`Empresas y proyectos personales en los que he trabajado - Más en: `}
        </p>
        <a href="https://github.com/fidehlg89" target="_blank">
          GitHub repositories
        </a>
      </div>

      <div className="accordion" id="accordionPortfolio">
        {portfolioAccordionItems.length > 0
          ? portfolioAccordionItems.map((item, i) => {
              return (
                <article className="card" key={i}>
                  <div
                    className="card-header mb-1 d-flex align-items-center justify-content-between"
                    id={`heading-${item.id}`}
                  >
                    <h2 className="mb-0">
                      <button
                        className="btn btn-link btn-block text-left"
                        type="button"
                        data-toggle="collapse"
                        data-target={`#collapse-${item.id}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${item.id}`}
                      >
                        {item.headerTitle}
                      </button>
                    </h2>
                    <span>
                      status:{" "}
                      <i
                        className={`text-${
                          item.status === "online" ? "success" : "danger"
                        }`}
                      >
                        {item.status}
                      </i>
                    </span>
                  </div>
                  <div
                    id={`collapse-${item.id}`}
                    className="collapse"
                    aria-labelledby={`heading-${item.id}`}
                    data-parent="#accordionPortfolio"
                  >
                    <div className="img-Card">
                      <div className="col-lg-4 col-md-6 portfolio-item filter-php">
                        <div className="portfolio-wrap">
                          <img src={item.image} className="img-fluid" alt="" />
                          <div className="portfolio-links">
                            <a
                              href="https://www.taxiencuba.com/frontend/web/"
                              target="_blank"
                              title="Taxi en Cuba"
                            >
                              <i className="bx bx-link"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      {item.description}
                      <div>
                        <a href={item.url} target="_blank">
                          {item.title}
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })
          : null}
      </div>
    </>
  );
};

const container = document.getElementById("app-portfolio");
const root = ReactDOM.createRoot(container);
root.render(<Portfolio />);
