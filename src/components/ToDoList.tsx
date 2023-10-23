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
  padding: 20px;
  font-size: 40px;
  font-weight: 400;
  margin-top: 100px;
  width: 100%;
  border-bottom: 1px solid #ffffff;
`;

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  return (
    <Wrap>
      <Title>ToDoList</Title>
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>할일</option>
        <option value={Categories.DOING}>하는중</option>
        <option value={Categories.DONE}>끝난일</option>
      </select>
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </Wrap>
  );
}

export default ToDoList;
