import React from "react";
import { Categories, IToDo, toDoState } from "../atoms";
import { useRecoilState } from "recoil";

function ToDo({ text, category, id }: IToDo) {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const oldToDo = oldToDos[targetIndex];
      const newToDo = { text, id, category: name as any };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <>
      <li>{text}</li>
      {category !== Categories.DOING && (
        <button name={Categories.DOING} onClick={onClick}>
          하는중
        </button>
      )}
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO} onClick={onClick}>
          해야할일
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE} onClick={onClick}>
          끝난일
        </button>
      )}
    </>
  );
}

export default ToDo;
