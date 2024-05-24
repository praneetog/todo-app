import React, { useState } from "react";

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="bg-[#A2AEBB] h-screen flex items-center flex-col ">
      <input
        className="w-[30%] p-3 mt-5 rounded-lg"
        type="text"
        placeholder="Title"
        onChange={function (e) {
          const value = e.target.value;
          setTitle(e.target.value);
        }}
      />{" "}
      <br />
      <input
        className="w-[30%] p-3 mb-5 rounded-lg"
        type="text"
        placeholder="Description"
        onChange={function (e) {
          const value = e.target.value;
          setDescription(e.target.value);
        }}
      />{" "}
      <br />
      <button
        className="bg-[#00171F] text-white p-3 mx-5 mb-5 rounded-lg hover:bg-white hover:text-[#00171F] hover:duration-300 hover:scale-110"
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "Content-type": "application/json",
            },
          }).then(async function (res) {
            const json = await res.json();
            alert("Todo added");
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default CreateTodo;
