import { useRecoilState, useRecoilValue } from "recoil";
import { toDoState, toDoSelector, categoryState, Categories } from "./atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import React, { useEffect } from "react";
import styled from "styled-components";
import { IToDo } from "./atoms";
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

const ToDoCont = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 40px;
  gap: 10vw;
`;

const TodoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`;

const SubTitle = styled.h2`
  font-size: 24px;
  font-weight: 400;
  border-bottom: 2px solid #ffffff;
`;

function ToDoList() {
  const [todo, doing, done] = useRecoilValue(toDoSelector);
  return (
    <Wrap>
      <Title>ToDoList</Title>
      <CreateToDo />
      <ToDoCont>
        <TodoBox>
          <SubTitle>TODO</SubTitle>
          {todo?.map((toDo) => (
            <ToDo key={toDo.id} {...toDo} />
          ))}
        </TodoBox>
        <TodoBox>
          <SubTitle>DOING</SubTitle>
          {doing?.map((toDo) => (
            <ToDo key={toDo.id} {...toDo} />
          ))}
        </TodoBox>
        <TodoBox>
          <SubTitle>DONE</SubTitle>
          {done?.map((toDo) => (
            <ToDo key={toDo.id} {...toDo} />
          ))}
        </TodoBox>
      </ToDoCont>
    </Wrap>
  );
}

export default ToDoList;
