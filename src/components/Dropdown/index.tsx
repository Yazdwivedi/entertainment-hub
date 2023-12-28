import styles from "./style.module.css";

type DropdownProps = {
    options: Array<string>,
    onSelectOption: (val: string) => void,
    defaultSelected?: string
}

const Dropdown = ({ options, onSelectOption, defaultSelected } : DropdownProps) => {

    const handleOptionChange = (event: any) => {
        const selectedValue = event?.target?.value;
        onSelectOption(selectedValue);
    };

    return (
        <div className={styles["select-container"]}>
            <select className={styles["dropdown-select"]} onChange={handleOptionChange}>
            <option value="" selected disabled hidden>{defaultSelected || options[0]}</option> 
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