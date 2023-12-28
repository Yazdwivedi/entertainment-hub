import styles from "./style.module.css";
import { FieldError } from "react-hook-form";

type PropType = {
    register: Function,
    type: string,
    registerName: string,
    style?: Object,
    placeholder?: string,
    label?: string,
    labelStyle?: Object,
    errMessage?: string,
    validation?: string,
    error?: FieldError ,
    required?: boolean
}

const FormInput = ({
  register,
  registerName,
  style,
  label,
  labelStyle,
  type,
  errMessage ,
  validation ,
  error,
  required=false,
  placeholder="",
}: PropType): JSX.Element => {
  const errorStyle = error ? { border: "1px solid red" } : {};
  return (
    <div>
      {label && (
        <span id={styles["inp-label"]} style={labelStyle}>
          {label}
        </span>
      )}
      <input
        id={styles["user-inp"]}
        style={{ ...style, ...errorStyle }}
        placeholder={placeholder}
        type={type}
        {...register(registerName, { pattern: validation, required })}
      />
      {error && <p className="err-msg">{errMessage}</p>}
    </div>
  );
};

export default FormInput;