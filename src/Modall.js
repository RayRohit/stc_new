import React from "react";

export default function Modall(props) {
  const handleClose = () => {
    // props.hide(true);
    props.video(null);
    props.remDisplay(null)
  };
  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = `http://216.48.186.249:5002/${props.url}`;
    a.download = `http://216.48.186.249:5002/${props.url}`;
    document.body.appendChild(a);
    a.click();
    // a.click();
  };
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
            <video
              controls
              autoPlay
              src={`http://216.48.186.249:5002/${props.display}`}
              style={{ width: "100%" }}
            />
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
