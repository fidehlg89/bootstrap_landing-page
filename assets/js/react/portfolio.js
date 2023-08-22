const Portfolio = () => {
  const portfolioAccordionItems = [
    { id: 'taxioncuba', title:'Taxi en Cuba', description:'This project was developed with yii2 MVC framework', headerTitle: 'Taxi en Cuba - Yii2 - Lamp stack', url: 'https://www.taxiencuba.com/frontend/web/', status: 'offline' },
  ];
  return (
      <>
        <div className="section-title">
          <h2>Projects</h2>
          {/* <!-- TODO: Add organization for projects and divide personal from companies --> */}
          <p>
            Companies and personal projects I've been worked -
            Review for more personal projects on <a href="https://github.com/fidehlg89/">github</a>
          </p>
          <a href="https://github.com/fidehlg89" target="_blank">GitHub repositories</a>
        </div>

        <div className="accordion" id="accordionPortfolio">
          {portfolioAccordionItems.length > 0
              ? portfolioAccordionItems.map((item, i) => {
                  return (
                      <article className='card' key={i}>
                        <div className="card-header mb-1 d-flex align-items-center justify-content-between" id={`heading-${item.id}`}>
                          <h2 className="mb-0">
                            <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
                              data-target={`#collapse-${item.id}`} aria-expanded="true" aria-controls={`collapse-${item.id}`}>
                              {item.headerTitle}
                            </button>
                          </h2>
                          <span>status: <i className="text-danger">{item.status}</i></span>
                        </div>
                        <div id={`collapse-${item.id}`} className="collapse show" aria-labelledby={`heading-${item.id}`} data-parent="#accordionPortfolio">
                          <div className="img-Card">
                            <div className="col-lg-4 col-md-6 portfolio-item filter-php">
                              <div className="portfolio-wrap">
                                <img src="assets/img/portfolio/taxi-cuba.png" className="img-fluid" alt="" />
                                <div className="portfolio-links">
                                  <a href="https://www.taxiencuba.com/frontend/web/" target="_blank" title="Taxi en Cuba"><i
                                      className="bx bx-link"></i></a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-body">
                            {item.description}
                            <a href={item.url} target="_blank">
                              {item.title}
                            </a>
                          </div>
                        </div>
                      </article>
                    )
                })
              : null}
        </div>
        {/* <!-- TODO - make this acordion with react por vue js --> */}
        <div className="accordion" id="accordionPortfolio">
          {/* <!-- Card Front 10 dev --> */}
          <article className="card">
            <div className="card-header mb-1 d-flex align-items-center justify-content-between" id="headingTwo">
              <h2 className="mb-0">
                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                  data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Front 10 - Frontend developer
                </button>
              </h2>
              <span>status: <i className="text-success">online</i></span>
            </div>
            {/* <!-- Collapse 2 Front 10 #bte  --> */}
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionPortfolio">
              {/* <!-- https://catalog.f10.page/ --> */}
              <div className="img-Card">
                <div className="col-lg-4 col-md-6 portfolio-item filter-php">
                  <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/front10.svg" className="img-fluid" alt="" />
                    <div className="portfolio-links">
                      <a href="https://www.front10.com" target="_blank" title="Front10"><i className="bx bx-link"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <p className="p-0">Front10 enterprise, with headquarter in Miami. Florida</p>
                <p className="p-0">Implementation of catalog products with an experimental team of developers </p>
                <a href="https://catalog.f10.page/" target="_blank">Front 10 Catalog</a>
              </div>
            </div>
          </article>

          {/* <!-- Card Raptor Web wordpress dev --> */}
          <div className="card">
            <div className="card-header mb-1 d-flex align-items-center justify-content-between" id="headingThree">
              <h2 className="mb-0">
                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                  data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Raptor Web - Wordpress developer and design
                </button>
              </h2>
              <span>status: <i className="text-success">online</i></span>
            </div>
            {/* <!-- Collapse 3 Raptor web  --> */}
            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionPortfolio">
              <div className="img-Card">
                <div className="col-lg-4 col-md-6 portfolio-item filter-php">
                  <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/raptor-web.png" className="img-fluid" alt="" />
                    <div className="portfolio-links">
                      <a href="https://www.raptor-web.com/" target="_blank" title="Raptor web"><i
                          className="bx bx-link"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                Web developer and designer of sites in php frameworks at Raptor web
                <a href="https://www.raptor-web.com/" target="_blank">Raptor web</a>
              </div>
            </div>
          </div>

          {/* <!-- Card Raptor Web wordpress dev --> */}
          <div className="card">
            <div className="card-header mb-1 d-flex align-items-center justify-content-between" id="headingShipments">
              <h2 className="mb-0">
                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                  data-target="#collapseShipments" aria-expanded="false" aria-controls="collapseShipments">
                  Registro de Envíos - Laravel - Lamp stack
                </button>
              </h2>
              <span>status: <i className="text-success">online</i></span>
            </div>
            {/* <!-- Shipments - Raptor Web App  --> */}
            <div id="collapseShipments" className="collapse" aria-labelledby="headingShipments" data-parent="#accordionPortfolio">
              <div className="img-Card">
                <div className="col-lg-4 col-md-6 portfolio-item filter-php">
                  <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/php-shipments.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-links">
                      <a href="https://sistema.martelexpresssa.com/" target="_blank" title="Registro de envíos"><i
                          className="bx bx-link"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                LAMP Stack developer and designer at Raptor web with Laravel and MySQL
                <a href="https://sistema.martelexpresssa.com/" target="_blank">Registro de envíos</a>
              </div>
            </div>
          </div>

          {/* <!-- Card Genius Referrals symfony dev --> */}
          <div className="card">
            <div className="card-header mb-1 d-flex align-items-center justify-content-between" id="headingFour">
              <h2 className="mb-0">
                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                  data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  Genius Referrals - Symfony, Docker
                </button>
              </h2>
              <span>status: <i className="text-success">online</i></span>
            </div>
            {/* <!-- Collapse 2 Front 10 #bte  --> */}
            <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionPortfolio">
              {/* <!-- https://catalog.f10.page/ --> */}
              <div className="img-Card">
                <div className="col-lg-4 col-md-6 portfolio-item filter-php">
                  <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/H-Degradado.webp" className="img-fluid" alt="" />
                    <div className="portfolio-links">
                      <a href="https://geniusreferrals.com/" target="_blank" title="Genius Referrals"><i
                          className="bx bx-link"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <p className="p-0">Genius Referrals developer team, with headquarter in Miami. Florida</p>
                <p className="p-0">Web site developed in symfony</p>
                <a href="https://geniusreferrals.com/" target="_blank">Genius Referrals</a>
              </div>
            </div>
          </div>

          {/* <!-- Card QvaSell vue js ---> */}
          <div className="card">
            <div className="card-header mb-1 d-flex align-items-center justify-content-between" id="headingFive">
              <h2 className="mb-0">
                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                  data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  QvaSell - Vue js
                </button>
              </h2>
              <span>status: <i className="text-danger">offline</i></span>
            </div>
            {/* <!-- Collapse 2 Front 10 #bte  --> */}
            <div id="collapseFive" className="collapse" aria-labelledby="headingFour" data-parent="#accordionPortfolio">
              {/* <!-- https://catalog.f10.page/ --> */}
              <div className="img-Card">
                <div className="col-lg-4 col-md-6 portfolio-item filter-php">
                  <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/qvasell.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-links">
                      <a href="https://www.qvasell.com/" target="_blank" title="QvaSell"><i className="bx bx-link"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <p className="p-0">Qvasell is a project from Knales developer team, with headquarter in USA</p>
                <p className="p-0">Web SPA developed with vue js</p>
                <a href="https://www.qvasell.com/" target="_blank">QvaSell</a>
              </div>
            </div>
          </div>
        </div>
      </>
  );
};

const container = document.getElementById("app-portfolio");
const root = ReactDOM.createRoot(container);
root.render(<Portfolio />);
