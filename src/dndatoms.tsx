import { atom } from "recoil";

export const toDostate = atom({
  key: "toDo",
  default: ["a", "b", "c", "d", "e", "f", "g"],
});
