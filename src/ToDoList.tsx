import React, { useState } from "react";
import { useForm } from "react-hook-form";

function ToDoList() {
  /* const [toDo, setToDo] = useState("");
  const [toDoError, setToDoError] = useState("");
  const onchange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setToDoError("");
    setToDo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (toDo.length < 10) {
      return setToDoError("10자 이상 작성해야 합니다");
    }
  }; */
  const { register, watch } = useForm();

  return (
    <>
      {/* <form onSubmit={onSubmit}>
        <input onChange={onchange} value={toDo} placeholder="할일" />
        <button>추가</button>
        {toDoError !== "" ? toDoError : null}
      </form> */}
      <form>
        <input {...register("Email")} placeholder="Email" />
        <input {...register("firstName")} placeholder="First Name" />
        <input {...register("lastName")} placeholder="Last Name" />
        <input {...register("username")} placeholder="Username" />
        <input {...register("password")} placeholder="Password" />
        <input {...register("password1")} placeholder="Password1" />

        <button>추가</button>
      </form>
    </>
  );
}

export default ToDoList;
