import React from "react";

interface TodoProps {
  todos: {
    title: string;
    description: string;
  }[];
}

export const Todos: React.FC<TodoProps> = ({ todos }) => {
  return (
    <div>
      {todos.map((item, key) => (
        <div key={key}>
          <p>{item.title}</p>
          <p>{item.description}</p>
          <button>completed</button>
        </div>
      ))}
    </div>
  );
};
