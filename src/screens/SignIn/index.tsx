import styles from "./style.module.css";
import { useForm } from "react-hook-form";
import FormInput from "../../components/FormComponents/FormInput";
import { useSignInUserMutation } from "./slice";

type PropType = {
    type: string,
    closeModal: Function
}

export type UserInputs = {
    email: string,
    password: string,
    username: string
};

const SignIn = ({ type, closeModal }: PropType): JSX.Element => {
    const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm<UserInputs>({ mode: "onTouched" });
    const [signInUser] = useSignInUserMutation();

    const signInSubmit = (data: UserInputs) => {
        closeModal();
        reset();
        signInUser(data).unwrap().then(res=>console.log(res)).catch(err=>console.log(err))
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
            <form className={styles["user-sign-in-form"]} onSubmit={handleSubmit(signInSubmit)}>
                <FormInput
                    style={{ padding: "15px", width: "95%", alignSelf: "center" }}
                    placeholder={"Enter Username"}
                    register={register}
                    registerName={"username"}
                    label="Username"
                    error={errors["username"]}
                    required={true}
                    errMessage={"Please enter a Username"}
                    type="text"
                />
                <br />
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