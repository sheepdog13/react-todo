import React, { useEffect } from "react";
import { Categories, IToDo, toDoState } from "./atoms";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { SvgIcon } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
const Wrap = styled.div`
  display: flex;
  position: relative;
  width: 20vw;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  border: 1px solid #fff;
  border-radius: 5px;
  word-break: break-all;
`;

const Text = styled.span`
  text-align: center;
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
const CancelBox = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
`;

function ToDo({ text, category, id }: IToDo) {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos: any) => {
      const targetIndex = oldToDos.findIndex((toDo: any) => toDo.id === id);
      const newToDo = { text, id, category: name as any };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  const deleteTodo = () => {
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo: any) => toDo.id === id);
      return [
        ...oldToDos.slice(0, targetIndex),
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  return (
    <Wrap>
      <CancelBox onClick={deleteTodo}>
        <SvgIcon component={CancelIcon} />
      </CancelBox>
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
