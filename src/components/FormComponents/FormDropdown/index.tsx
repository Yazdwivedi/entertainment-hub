import styles from "./style.module.css";
import { useState } from 'react';
import { FieldError } from "react-hook-form";

type PropType = {
    options: Array<string>,
    onSelectOption: Function,
    register: Function,
    registerName: string,
    errMessage?: string,
    validation?: string,
    error?: FieldError,
    required?: boolean,
    label?: string,
    labelStyle?: Object,
}

const FormDropdown = ({
    options,
    onSelectOption,
    register,
    registerName,
    validation,
    error,
    errMessage,
    label,
    labelStyle,
    required = false }: PropType) => {
    const [selectedOption, setSelectedOption] = useState(options[0] || "");

    const handleOptionChange = (event: any) => {
        const selectedValue = event?.target?.value;
        setSelectedOption(selectedValue);
        onSelectOption(selectedValue);
    };

    return (
        <div className={styles['form-dropdown-container']}>
            {label && (
                <span id={styles["inp-label"]} style={labelStyle}>
                    {label}
                </span>
            )}
            <div className={styles["form-select-container"]}>
                <select {...register(registerName, { pattern: validation, required })} value={selectedOption} onChange={handleOptionChange}>
                    {options.map((option: any) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                <div className={styles["form-select-arrow"]}>&#9662;</div>
            </div>
            {error && <p className="err-msg">{errMessage}</p>}
        </div>
    );
};

export default FormDropdown;