import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

export default function Modall(props) {
  const [active, setActive] = useState(0);
  const urls = props.urls;
  const handleClose = () => {
    // props.hide(true);
    props.video([]);
    props.remDisplay([]);
  };
  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = `http://216.48.186.249:5002/${urls[active]}`;
    a.download = `http://216.48.186.249:5002/${urls[active]}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
    // useEffect(() => {
    //   alert("Processing Video :"`${active}` )
    // }, [active]);

  return (
    <div className="d-flex justify-content-between">
      <div className="modal-dialog  modal-fullscreen-sm-down py-4">
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
            {console.log(active, "ac")}
            <Carousel
              interval={null}
              activeIndex={active}
              onSelect={(index) => {
                setActive(index);
              }}
            >
              {props.display.map((item, index) => (
                <Carousel.Item key={index}>
                  <video
                    controls
                    // autoPlay
                    src={`http://216.48.186.249:5002/${item}`}
                    style={{ width: "100%" }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
            {/* <Carousel
              activeIndex={activeIndex}
              onSelect={(index) => setActiveIndex(index)}
            >
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
            </Carousel> */}
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
          <div className="modal-footer d-flex justify-content-between">
            <h5>Video : {active+1}</h5>

            <button
              className="btn btn-primary"
              onClick={() => handleDownload()}
            >
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
