import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { FaImage } from "react-icons/fa";

export default function Image(props) {
  const{image, setImage} = props;
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setImage(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });
  return {
    renderImage: (
      <section className="container" style={{}}>
        <div
          {...getRootProps({ className: "dropzone" })}
          className="shadow p-3"
          style={{ background: "#FAFAFA", height: "136px" }}
        >
          <div className="fs-3 py-2 text-center">
            <FaImage />
          </div>
          <input {...getInputProps()} />
          <h6
            className="text-center "
            style={{ color: "#BDBDBD", fontSize: "14px" }}
          >
            {image.length === 0 ? " Drag potrait image here " : image[0].path}
          </h6>
        </div>
      </section>
    ),
  };
}
