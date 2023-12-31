import React, { useState } from "react";

export const CreateTodo: React.FC = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const onAddTodo = () => {
    fetch("http://localhost:3001/create-todo", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: desc,
      }),
      headers: {
        "Content-type": "application/json",
      },
    }).then(async (res) => {
      const json = await res.json();
      alert(json.msg);
    });
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        placeholder="title"></input>
      <input
        type="text"
        onChange={(e) => setDesc(e.target.value)}
        placeholder="description"></input>
      <button onClick={onAddTodo}>Add a todo</button>
    </div>
  );
};
