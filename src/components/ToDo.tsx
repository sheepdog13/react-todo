import React from "react";
import { Categories, IToDo, toDoState } from "../atoms";
import { useRecoilState } from "recoil";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  width: 20vw;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  border: 1px solid #fff;
  border-radius: 5px;
  word-break: break-all;
`;

const Text = styled.span`
  font-size: 20px;
  padding: 10px;
`;

const BtnBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
`;

const Btn = styled.button`
  margin-left: 5px;
  font-size: 15px;
  border: 0;
  border-radius: 5px;
  outline: none;
  padding: 10px;
  color: #fff;
  background-color: #ce8ad6;
`;

function ToDo({ text, category, id }: IToDo) {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
    localStorage.setItem("todos", JSON.stringify(toDos));
  };

  return (
    <Wrap>
      <Text>{text}</Text>
      <BtnBox>
        {category !== Categories.DOING && (
          <Btn name={Categories.DOING} onClick={onClick}>
            DOING
          </Btn>
        )}
        {category !== Categories.TO_DO && (
          <Btn name={Categories.TO_DO} onClick={onClick}>
            TODO
          </Btn>
        )}
        {category !== Categories.DONE && (
          <Btn name={Categories.DONE} onClick={onClick}>
            DONE
          </Btn>
        )}
      </BtnBox>
    </Wrap>
  );
}

export default ToDo;
