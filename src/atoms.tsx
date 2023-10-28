import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}
export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

const { persistAtom } = recoilPersist();

export const toDoState = atom({
  key: "toDo",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const toDoSelector = selector({
  key: "toDoSeletor",
  get: ({ get }) => {
    const toDos = get(toDoState);
    return [
      toDos.filter((toDo: any) => toDo.category === Categories.TO_DO),
      toDos.filter((toDo: any) => toDo.category === Categories.DOING),
      toDos.filter((toDo: any) => toDo.category === Categories.DONE),
    ];
  },
});
