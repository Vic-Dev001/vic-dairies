import React, { useRef, useState, useEffect } from "react";
import "./CommentForm.css";
import sanityClient from "../client";

function CommentForm() {
  // const container = useRef(null);
  // const [message, setMessage] = React.useState("");
  const [userInputs, setuserInput] = useState({
    enteredName: "",
    enteredEmail: "",
    enteredComment: "",
  });
  const [comment, setComment] = useState([]);
  comment.sort();

  // const inputValue = useRef(null);
  const postCommentHandler = function (e) {
    setuserInput((prevInputs) => {
      return {
        ...prevInputs,
        [e.target.name]: e.target.value,
      };
    });
  };
  // Fetching the comments from sanity studio

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "comment"]{
        enteredName,
        enteredEmail,
        enteredComment }`
      )
      .then((data) => {
        console.log("Comments Response", data);
        setComment(data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  const handleSubmit = function (e) {
    e.preventDefault();
    const SanityResponse = {
      _type: "comment",
      ...userInputs,
    };
    console.log(userInputs);
    sanityClient.create(SanityResponse).then(() => {
      console.log("request sent");
    });
    setuserInput((prev) => {
      return {
        ...prev,
        enteredName: "",
        enteredComment: "",
        enteredEmail: "",
      };
    });
  };

  return (
    <div>
      <div className="bg-gray-200 mt-4">
        <div className="container shadow-lg mx-auto bg-white rounded-lg py-10">
          <h1 className="text-xl font-extrabold block px-3 text-center indent-1">
            Comments
          </h1>
          {comment.map(({ enteredComment, enteredName, enteredEmail }) => (
            <div className="w-full">
              <p>
                <span className="text-red-400"> Name</span> : {enteredName}
              </p>
              <p>Email: {enteredEmail}</p>
              <p className="container bg-gray-600 text-white block py-5">
                {enteredComment}
              </p>
            </div>
          ))}
        </div>
      </div>
      <form>
        <div className="mt-5 block">
          <input
            className=" p-4 block mt-2"
            type="text-"
            placeholder="Enter your name"
            name="enteredName"
            onChange={postCommentHandler}
            value={userInputs.enteredName}
          />
          <input
            className=" p-4 block mt-2"
            type="text-"
            placeholder="Enter your Email"
            name="enteredEmail"
            onChange={postCommentHandler}
            value={userInputs.enteredEmail}
          />
          <textarea
            // ref={inputValue}
            className="mt-2"
            name="enteredComment"
            id=""
            cols="30"
            onChange={postCommentHandler}
            value={userInputs.enteredComment}
            rows="10"
            placeholder="Add your comments"
          ></textarea>
        </div>
        <input
          className="bg-green-300 p-2 mt-3 cursor-pointer"
          type="submit"
          value="Post comment"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
}

export default CommentForm;
