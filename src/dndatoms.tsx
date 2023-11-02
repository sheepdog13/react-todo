import { atom } from "recoil";

export interface ITodo {
  id: number;
  text: string;
}

interface IToDoState {
  [key: string]: ITodo[];
}

export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {
    "To Do": [
      { id: 1, text: "테스트1" },
      { id: 2, text: "테스트2" },
      { id: 3, text: "테스트3" },
      { id: 4, text: "테스트4" },
      { id: 5, text: "테스트5" },
      { id: 6, text: "테스트6" },
      { id: 7, text: "테스트7" },
      { id: 8, text: "테스트8" },
      { id: 9, text: "테스트9" },
    ],
    Doing: [{ id: 12, text: "테스트1" }],
    Done: [{ id: 13, text: "테스트1" }],
  },
});
