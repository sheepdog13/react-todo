import { atom, selector } from "recoil";

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

// export const toDoState = atom<IToDo[]>({
//   key: "toDo",
//   default: [],
// });

export const toDoSelector = selector({
  key: "toDoSeletor",
  get: ({ get }) => {
    const toDos = get(toDoState);
    return [
      toDos.filter((toDo) => toDo.category === Categories.TO_DO),
      toDos.filter((toDo) => toDo.category === Categories.DOING),
      toDos.filter((toDo) => toDo.category === Categories.DONE),
    ];
  },
});

const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    const savedValue = localStorage.getItem(key);
    // setSelf -> Callbacks to set or reset the value of the atom.
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    // onSet -> Subscribe to changes in the atom value.
    onSet((newValue: any, _: any, isReset: boolean) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
  effects: [localStorageEffect("toDo")],
});
