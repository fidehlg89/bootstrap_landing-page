// import portfolioAccordionItems from "./portfolio-accordionitems";
const portfolioAccordionItems = [
  {
    id: "front10",
    title: "Front10",
    description:
      "Front10 enterprise, with headquarter in Miami Implementation of catalog products with an experimental team of developers. Florida",
    headerTitle: "Front 10 - Web developer",
    url: "https://www.front10.com",
    image: "assets/img/portfolio/front10.svg",
    status: "online"
  },
  {
    id: "raptor-web",
    title: "Raptor web",
    description:
      "Web developer and designer of sites in php frameworks at Raptor web",
    headerTitle: "Raptor Web - Wordpress developer and design",
    url: "https://www.raptor-web.com/",
    image: "assets/img/portfolio/raptor-web.png",
    status: "online"
  },
  {
    id: "laravel-shipments",
    title: "Laravel Shipments",
    description:
      "LAMP Stack developer and designer at Raptor web with Laravel and MySQL",
    headerTitle: "Registro de Envíos - Laravel - Lamp stack",
    url: "https://sistema.martelexpresssa.com/",
    image: "assets/img/portfolio/php-shipments.jpg",
    status: "online"
  },
  {
    id: "genius-referrals",
    title: "Genius Referrals",
    description:
      "Genius Referrals developer team, with headquarter in Miami Florida, Web site developed in symfony",
    headerTitle: "Genius Referrals - Symfony, Docker",
    url: "https://geniusreferrals.com/",
    image: "assets/img/portfolio/H-Degradado.webp",
    status: "online"
  },
  {
    id: "vue-qvasell",
    title: "QvaSell",
    description:
      "Qvasell is a project from Knales developer team, with headquarter in USA, SPA developed with vue js",
    headerTitle: "QvaSell - Vue js",
    url: "https://recargacubana.com/",
    image: "assets/img/portfolio/qvasell.jpg",
    status: "online"
  },
  {
    id: "taxioncuba",
    title: "Taxi en Cuba",
    description: "This project was developed with yii2 MVC framework",
    headerTitle: "Taxi en Cuba - Yii2 - Lamp stack",
    url: "https://www.taxiencuba.com/frontend/web/",
    image: "assets/img/portfolio/taxi-cuba.png",
    status: "offline"
  }
];

const Portfolio = () => {
  return (
    <>
      <div className="section-title">
        <h2>Projects</h2>
        {/* <!-- TODO: Add organization for projects and divide personal from companies --> */}
        <p>
          Companies and personal projects I've been worked - Review for more
          personal projects on{" "}
          <a href="https://github.com/fidehlg89/">github</a>
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
