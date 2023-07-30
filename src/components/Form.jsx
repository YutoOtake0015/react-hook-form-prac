import { useForm } from "react-hook-form";

const From = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      最大文字数 5:
      <input type="text" {...register("maxLen", { maxLength: 5 })} />
      {errors.maxLen?.type === "maxLength" && (
        <p>5文字以内で入力してください</p>
      )}
      <br />
      最小文字数 5:
      <input type="text" {...register("minLen", { minLength: 5 })} />
      {errors.minLen?.type === "minLength" && (
        <p>5文字以上で入力してください</p>
      )}
      <br />
      必須:
      <input type="text" {...register("require", { required: true })} />
      {errors.require?.type === "required" && <p>入力必須</p>}
      <br />
      上限 5:
      <input type="number" {...register("maxNum", { max: 5 })} />
      {errors.maxNum?.type === "max" && <p>5以内で入力してください</p>}
      <br />
      下限 5:
      <input type="number" {...register("minNum", { min: 5 })} />
      {errors.minNum?.type === "min" && <p>5以上で入力してください</p>}
      <br />
      パターン 数字必須:
      <input type="text" {...register("patternStr", { pattern: /[0-9]/ })} />
      {errors.patternStr?.type === "pattern" && <p>数字を入力してください</p>}
      <br />
      <button onClick={handleSubmit(onSubmit)}>送信</button>
    </>
  );
};

export default From;
