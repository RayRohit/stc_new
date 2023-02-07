import React from "react";
import { Carousel } from "react-bootstrap";

export default function Modall(props) {
  const urls = props.urls;
  const handleClose = () => {
    // props.hide(true);
    props.video([]);
    props.remDisplay([]);
  };
  const handleDownload = () => {
    urls.map((item) => {
      if (item === props.display) {
        const a = document.createElement("a");
        a.href = `http://216.48.186.249:5002/${item}`;
        a.download = `http://216.48.186.249:5002/${item}`;
        document.body.appendChild(a);
        a.click();
      }
    });

    // a.click();
  };
  console.log(props.display);
  return (
    <>
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-fullscreen-sm-down py-4">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleClose}
            ></button>
          </div>
          <div className="modal-body">
            <Carousel>
              {props.display.map((item, index) => (
                <Carousel.Item key={index}>
                  <video
                    controls
                    autoPlay
                    src={`http://216.48.186.249:5002/${item}`}
                    style={{ width: "100%" }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
            {/* <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              {props.display.map((item, index) => {
                return (
                  <div className="carousel-inner" key={index}>
                    <div className="carousel-item active">
                      <video
                        controls
                        autoPlay
                        src={`http://216.48.186.249:5002/${item}`}
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                );
              })}
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div> */}
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-primary"
              onClick={() => handleDownload()}
            >
              Download
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
