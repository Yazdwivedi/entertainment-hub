import { useState } from 'react';
import styles from "./style.module.css";

const Dropdown = ({ options, onSelectOption } : any) => {
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleOptionChange = (event: any) => {
        const selectedValue = event?.target?.value;
        setSelectedOption(selectedValue);
        onSelectOption(selectedValue);
    };

    return (
        <div className={styles["select-container"]}>
            <select className={styles["dropdown-select"]} value={selectedOption} onChange={handleOptionChange}>
                {options.map((option: any) => (
                    <option className={styles["dropdown-option"]} key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <div className={styles["select-arrow"]}>&#9662;</div>
        </div>
    );
};

export default Dropdown;