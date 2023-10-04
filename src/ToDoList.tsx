import React, { useState } from "react";

function ToDoList() {
  const [toDo, setToDo] = useState("");
  const onchange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setToDo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(toDo);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input onChange={onchange} value={toDo} placeholder="할일" />
        <button>추가</button>
      </form>
    </>
  );
}

export default ToDoList;
