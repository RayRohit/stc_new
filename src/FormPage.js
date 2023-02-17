import React, { useState } from "react";
import bg from "./images/bg1.png";
import Dropzone from "./Dropzone";
import axios from "axios";
import Modall from "./Modall";
import { MdDelete } from "react-icons/md";

export default function FormPage() {
  const [files, setFiles] = useState([]);
  const [questions, setQuestions] = useState([
    {
      question: "",
      answer: "",
    },
  ]);

  const { renderVideo } = Dropzone({ files, setFiles });
  const [googleSelected, setGoogleSelected] = useState(false);
  const [checkedd, setChecked] = useState("");
  const [textRes, setTextRes] = useState(null);

  // const [text, setText] = useState("");
  // const [quest, setQuest] = useState("");
  const [option, setOption] = useState("");
  const [videoUrl, setVideoUrl] = useState([]);
  const [down, setDown] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let url = googleSelected
      ? "http://209.209.41.154:5004/cloning"
      : "http://209.209.41.154:5004/voicecloning";

    // questions.forEach((question) => {
    //   const videos = files[0];
    //   const formData = new FormData();
    //   formData.append("videos", videos);
    //   formData.append(
    //     "textRes",
    //     googleSelected ? question.question : question.answer
    //   );
    //   formData.append("formatType", checkedd);
    //   axios
    //     .post(url, formData)
    //     .then((res) => {
    //       console.log(res);
    //       setVideoUrl(res.data.file_path);
    //       console.log(videoUrl);
    //       setDown(res.data.mp4_path);
    //       console.log(videoUrl);
    //       setFiles([]);
    //       setOption("");
    //       setTextRes("");
    //       setChecked("");
    //       setQuestions([
    //         {
    //           question: "",
    //           answer: "",
    //         },
    //       ]);
    //     })
    //     .catch((err) => console.log(err));
    // });

    for (const question of questions) {
      const videos = files[0];
      const formData = new FormData();
      formData.append("videos", videos);
      formData.append(
        "textRes",
        googleSelected ? question.question : question.answer
      );
      formData.append("formatType", checkedd);

      const res = await axios.post(url, formData);

      console.log(res);

      setVideoUrl((prevVal) => [...prevVal, res.data.file_path]);
      // console.log(videoUrl);
      setDown((prevVal) => [...prevVal, res.data.mp4_path]);
      console.log(down);
    }

    setFiles([]);
    setOption("");
    setTextRes("");
    setChecked("");
    setQuestions([
      {
        question: "",
        answer: "",
      },
    ]);

    // if (googleSelected) {
    // } else {
    //   // setTextRes(text);
    //   console.log(textRes);
    //   const videos = files[0];
    //   const formData = new FormData();
    //   formData.append("videos", videos);
    //   formData.append("textRes", textRes);
    //   formData.append("formatType", checkedd);
    //   axios
    //     .post("http://209.209.41.154:5004/voicecloning", formData)
    //     .then((res) => {
    //       console.log(res);
    //       setVideoUrl(res.data.file_path);
    //       setDown(res.data.mp4_path);
    //       setFiles([]);
    //       setQuest("");
    //       setTextRes("");
    //       setChecked("");
    //     });
    // }
  };

  const onTextChange = (value, index, type) => {
    const ques = [...questions];
    ques[index][type] = value;
    setQuestions(ques);
  };

  const addNewQuestion = () => {
    let ques = [
      ...questions,
      {
        question: "",
        answer: "",
      },
    ];
    setQuestions(ques);
  };

  const deleteQuestion = (index) => {
    let ques = [...questions];
    ques.splice(index, 1);
    setQuestions(ques);
  };

  return (
    <>
      <div
        className="container-fluid"
        style={{
          background: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {videoUrl.length !== 0 ? (
          <>
            <Modall
              urls={videoUrl}
              display={down}
              remDisplay={setDown}
              video={setVideoUrl}
            />
          </>
        ) : (
          <>
            <div className="row">
              <div className="col-sm-6">
                <div
                  className="d-flex justify-content-center align-items-end flex-column "
                  style={{ height: "100vh" }}
                >
                  <h1
                    className="fw-bolder text-white pt-5"
                    style={{ fontSize: "50px" }}
                  >
                    Give any <br />
                    Video your <br />
                    voice and face.
                  </h1>
                  <h6
                    className="text-white"
                    style={{ fontSize: "15px", lineHeight: 2 }}
                  >
                    Our unique AI powered tool will allow you to add
                    <br /> your own voice or any voice to any video.
                  </h6>
                </div>
              </div>
              <div className="col-sm-6 col-md-12 col-lg-6">
                <div
                  className="d-flex justify-content-start align-items-center "
                  style={{ height: "100%" }}
                >
                  <div
                    className="shadow-lg bg-white mb-3 mt-5 mx-auto"
                    style={{ borderRadius: "20px" }}
                  >
                    <h5 className="text-center py-4 fw-bolder">Magic Maker!</h5>
                    <div>
                      <div className="my-2">{renderVideo}</div>
                    </div>
                    <div className="d-flex justify-content-evenly my-3">
                      <div className="form-check">
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          Google
                        </label>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={googleSelected}
                          id="flexCheckDefault"
                          name="optionFormat"
                          checked={googleSelected}
                          onChange={() => setGoogleSelected((x) => !x)}
                        />
                      </div>
                    </div>
                    {/* {googleSelected ? (
                      <>
                        <div className="px-4 mb-3">
                          <textarea
                            maxLength="50"
                            rows={2}
                            cols={48}
                            style={{
                              resize: "none",
                              background: "#fafafa",
                              color: "#bdbdbd",
                            }}
                            className="border-0 shadow p-3"
                            placeholder="Type your question"
                            name="quest"
                            value={textRes}
                            onChange={(e) => setTextRes(e.target.value)}
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="px-4 mb-3">
                          <textarea
                            maxLength="50"
                            rows={2}
                            cols={48}
                            style={{
                              resize: "none",
                              background: "#fafafa",
                              color: "#bdbdbd",
                            }}
                            className="border-0 shadow p-3"
                            placeholder="Type your question"
                            name="quest"
                            value={quest}
                            onChange={(e) => setQuest(e.target.value)}
                          />
                        </div>
                        <div className="px-4 mb-3">
                          <textarea
                            rows={4}
                            cols={48}
                            style={{
                              resize: "none",
                              background: "#fafafa",
                              color: "#bdbdbd",
                            }}
                            className="border-0 shadow p-3"
                            placeholder="Type your answer"
                            name="text"
                            value={textRes}
                            onChange={(e) => setTextRes(e.target.value)}
                          />
                        </div>
                      </>
                    )} */}
                    {questions.map((question, index) => (
                      <>
                        <div className="px-4 mb-3">
                          <textarea
                            maxLength="50"
                            rows={2}
                            cols={48}
                            style={{
                              resize: "none",
                              background: "#fafafa",
                              color: "#bdbdbd",
                            }}
                            className="border-0 shadow p-3"
                            placeholder="Type your question"
                            name="quest"
                            value={question.question}
                            onChange={(e) =>
                              onTextChange(e.target.value, index, "question")
                            }
                          />
                        </div>
                        {!googleSelected && (
                          <div className="px-4 mb-3">
                            <textarea
                              rows={4}
                              cols={48}
                              style={{
                                resize: "none",
                                background: "#fafafa",
                                color: "#bdbdbd",
                              }}
                              className="border-0 shadow p-3"
                              placeholder="Type your answer"
                              name="text"
                              value={question.answer}
                              onChange={(e) =>
                                onTextChange(e.target.value, index, "answer")
                              }
                            />
                            <button
                              className="btn btn-danger ms-2"
                              aria-label="Close"
                              onClick={() => deleteQuestion(index)}
                              disabled={questions.length === 1}
                            >
                              {/* Delete */}
                              <MdDelete />
                            </button>
                          </div>
                        )}
                      </>
                    ))}

                    <button
                      className="btn btn-labeled btn-primary btn-lg my-b mx-4 p-1 fs-6"
                      onClick={() => addNewQuestion()}
                      disabled={questions.length >= 5}
                    >
                      Add Question
                    </button>
                    <div className="shadow mx-4 p-2 mb-3">
                      <div className=" p-1">
                        <h6 style={{ fontSize: "18px" }}>
                          Select download format
                        </h6>
                        <div className="d-flex justify-content-around flex-wrap">
                          <div className="form-check">
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefault"
                            >
                              MOV
                            </label>
                            <input
                              className="form-check-input"
                              type="radio"
                              value={"mov"}
                              id="flexCheckDefault"
                              name="downloadFormat"
                              onChange={() => setChecked("mov")}
                            />
                          </div>
                          <div className="form-check">
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked"
                            >
                              AVI
                            </label>
                            <input
                              className="form-check-input"
                              type="radio"
                              value={"avi"}
                              id="flexCheckChecked"
                              name="downloadFormat"
                              onChange={() => setChecked("avi")}
                            />
                          </div>
                          <div className="form-check">
                            <label
                              className="form-check-label"
                              htmlFor="flexCheck"
                            >
                              MPG
                            </label>
                            <input
                              className="form-check-input"
                              type="radio"
                              value={"mpg"}
                              id="flexCheck"
                              name="downloadFormat"
                              onChange={() => setChecked("mpg")}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end pe-4">
                      <button
                        className="btn btn-labeled btn-primary btn-lg my-3"
                        onClick={handleSubmit}
                      >
                        Submit
                        <span className="btn-label">
                          <i className="fa fa-angle-right"></i>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
