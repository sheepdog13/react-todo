import { atom } from "recoil";

interface IToDoState {
  [key: string]: string[];
}

export const toDostate = atom<IToDoState>({
  key: "toDo",
  default: {
    to_do: ["a", "b"],
    doing: ["c", "d"],
    done: ["f", "g"],
  },
});
