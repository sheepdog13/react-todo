import React, { useState } from "react";
import { useForm } from "react-hook-form";

function ToDoList() {
  /* const [toDo, setToDo] = useState("");
  const [toDoError, setToDoError] = useState("");
  const onchange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setToDoError("");
    setToDo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (toDo.length < 10) {
      return setToDoError("10자 이상 작성해야 합니다");
    }
  }; */
  interface IForm {
    email: string;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    password1: string;
    extraError?: string;
  }
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: IForm) => {
    if (data.password !== data.password1) {
      setError(
        "password1",
        { message: "비밀번호가 같지 않습니다." },
        { shouldFocus: true }
      );
    }
    console.log(data);
    // setError("extraError", { message: "서버가 오프라인입니다." });
  };
  return (
    <>
      {/* <form onSubmit={onSubmit}>
        <input onChange={onchange} value={toDo} placeholder="할일" />
        <button>추가</button>
        {toDoError !== "" ? toDoError : null}
      </form> */}
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: "이메일이 필요합니다",
            pattern: {
              value:
                /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
              message: "이메일 형식에 맞지 않습니다.",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("firstName", {
            required: "이름을 적어주세요.",
            validate: (value) =>
              value.includes("창욱")
                ? "이름에 창욱은 포함할 수 없습니다."
                : true,
          })}
          placeholder="이름"
        />
        <span>{errors?.firstName?.message}</span>

        <input
          {...register("lastName", { required: "성을 적어주세요." })}
          placeholder="성"
        />
        <span>{errors?.lastName?.message}</span>

        <input
          {...register("username", {
            required: "유저 이름이 필요합니다.",
            minLength: {
              value: 5,
              message: "유저 이름은 5자 이상이어야 합니다.",
            },
          })}
          placeholder="Username"
        />
        <span>{errors?.username?.message}</span>

        <input
          {...register("password", {
            required: "비밀번호를 입력해주세요.",
            minLength: 5,
          })}
          placeholder="Password"
        />
        <span>{errors?.password?.message}</span>

        <input
          {...register("password1", {
            required: "비밀번호를 입력해주세요",
            minLength: 5,
          })}
          placeholder="Password1"
        />
        <span>{errors?.password1?.message}</span>

        <button>추가</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </>
  );
}

export default ToDoList;
