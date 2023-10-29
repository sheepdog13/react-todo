import { useForm } from "react-hook-form";
import { useRecoilState, useSetRecoilState } from "recoil";
import { Categories, categoryState, toDoState } from "../atoms";
import styled from "styled-components";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SvgIcon from "@mui/material/SvgIcon";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect } from "react";

interface IForm {
  toDo: string;
}
const Error = styled.span`
  position: absolute;
  top: -15px;
  left: 15px;
  color: black;
`;
const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-top: 40px;
`;

const Form = styled.form`
  display: flex;
`;

const Input = styled.input`
  width: 55vw;
  height: 60px;
  font-size: 20px;
  border: 0;
  border-radius: 5px;
  outline: none;
  padding-left: 15px;
  background-color: #f7ecf8;
  &::placeholder {
    font-size: 20px;
  }
`;

const SelectBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-color: #dcace2;
  border-radius: 5px;
  margin-left: 5px;
  svg {
    position: absolute;
    right: 0px;
  }
`;

const Select = styled.select`
  margin-left: 10px;
  margin-right: 30px;
  height: 60px;
  font-size: 25px;
  border: 0;
  border-radius: 5px;
  outline: none;
  color: #fff;
  background-color: #dcace2;
  appearance: none;
  cursor: pointer;
`;

const Btn = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  margin-left: 5px;
  height: 60px;
  font-size: 25px;
  border: 0;
  border-radius: 5px;
  outline: none;
  color: #fff;
  background-color: #dcace2;
  appearance: none;
  cursor: pointer;
`;

function CreateToDo() {
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  const [todos, setToDos] = useRecoilState(toDoState);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  return (
    <Wrap>
      <Error>{errors?.toDo?.message}</Error>
      <Form onSubmit={handleSubmit(handleValid)}>
        <Input
          {...register("toDo", {
            required: "할일을 적어주세요",
          })}
          placeholder="Enter your to-do"
        />
        <SelectBox>
          <Select value={category} onInput={onInput}>
            <option value={Categories.TO_DO}>todo</option>
            <option value={Categories.DOING}>doing</option>
            <option value={Categories.DONE}>done</option>
          </Select>
          <SvgIcon component={ExpandMoreIcon} fontSize="large" />
        </SelectBox>
        <Btn>
          <SvgIcon component={AddCircleIcon} />
        </Btn>
      </Form>
    </Wrap>
  );
}

export default CreateToDo;
