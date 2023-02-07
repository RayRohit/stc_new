import React from "react";

export default function Modall(props) {
  const urls = props.urls;
  const handleClose = () => {
    // props.hide(true);
    props.video([]);
    props.remDisplay([]);
  };
  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = `http://216.48.186.249:5002/${urls[0]}`;
    a.download = `http://216.48.186.249:5002/${urls[0]}`;
    document.body.appendChild(a);
    a.click();
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
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {props.display.map((item) => {
                  console.log(item, "item");
                  return (
                    <div className="carousel-item active">
                      <video
                        controls
                        autoPlay
                        src={`http://216.48.186.249:5002/${item}`}
                        style={{ width: "100%" }}
                      />  
                    </div>
                  );
                })}

                {/* <div class="carousel-item">
                  <img src="..." class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="..." class="d-block w-100" alt="..." />
                </div> */}
              </div>
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
            </div>
            {/* <video
              controls
              autoPlay
              src={`http://216.48.186.249:5002/${props.display[0]}`}
              style={{ width: "100%" }}
            /> */}
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
