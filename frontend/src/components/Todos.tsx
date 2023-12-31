import React from "react";

interface TodoProps {
  todos: {
    todo: string;
    description: string;
  }[];
}

export const Todos: React.FC<TodoProps> = ({ todos }) => {
  return (
    <div>
      {todos.map((item, key) => (
        <div key={key}>
          <p>{item.todo}</p>
          <p>{item.description}</p>
          <button>completed</button>
        </div>
      ))}
    </div>
  );
};
