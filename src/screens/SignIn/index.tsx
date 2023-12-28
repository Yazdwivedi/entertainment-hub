import styles from "./style.module.css";
import { useForm } from "react-hook-form";
import FormInput from "../../components/FormComponents/FormInput";

type PropType = {
    type: string,
    closeModal: Function
}

type UserInputs = {
    email: string,
    password: string
};

const SignIn = ({ type, closeModal }: PropType): JSX.Element => {
    const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm<UserInputs>({ mode: "onTouched" });

    const onNewMovieSubmit = (data: UserInputs) => {
        console.log(data);
        closeModal();
        reset();
    }

    const getHeading = (text: string) => {
        switch(text){
            case "login": return "Login"
            default: return "Sign Up"
        }
    }

    return (
        <div className={styles["sign-in-container"]}>
            <span>{getHeading(type)}</span>
            <form className={styles["user-sign-in-form"]} onSubmit={handleSubmit(onNewMovieSubmit)}>
                <FormInput
                    style={{ padding: "15px", width: "95%", alignSelf: "center" }}
                    placeholder={"Enter Email"}
                    register={register}
                    registerName={"email"}
                    label="Email"
                    error={errors["email"]}
                    required={true}
                    errMessage={"Please enter an email"}
                    type="text"
                />
                <br />
                <FormInput
                    style={{ padding: "15px", width: "95%", alignSelf: "center" }}
                    placeholder={"Enter password"}
                    register={register}
                    registerName={"password"}
                    label="Password"
                    error={errors["password"]}
                    required={true}
                    errMessage={"Please enter an password"}
                    type="text"
                />
                <input style={{marginTop: "5%"}} className={`submit-button ${!isValid ? "disable-button" : ""}`} disabled={!isValid} type="submit" />
            </form>
        </div>
    )
}

export default SignIn;