import { useRecoilState, useRecoilValue } from "recoil";
import { toDoState, toDoSelector, categoryState, Categories } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e7c6eb;
  height: 100vh;
`;

const Title = styled.h1`
  text-align: center;
  padding-bottom: 40px;
  font-size: 40px;
  font-weight: 400;
  margin-top: 50px;
  width: 80%;
  border-bottom: 1px solid #ffffff;
`;

function ToDoList() {
  const [todo, doing, done] = useRecoilValue(toDoSelector);

  console.log(todo, doing, done);
  return (
    <Wrap>
      <Title>ToDoList</Title>

      <CreateToDo />
      {todo?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
      {doing?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
      {done?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </Wrap>
  );
}

export default ToDoList;
