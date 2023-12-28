import { Link } from "react-router-dom";
import styles from "./style.module.css";

type gridItem = {
    imageUrl: string,
    title: string,
    description: string,
}

type propType = {
    items: Array<gridItem>
};

const WORD_BREAK_LENGTH = 255;

const GridDisplay = ({ items }: propType) => {

    const rendergridItem = (item: gridItem) => {
        return (
            <div className={styles["grid-item-container"]}>
                <img src={item.imageUrl} alt="Movie Icon" />
                <div className={styles["grid-info-container"]}>
                    <span style={{ fontSize: "24px" }}>{item.title}</span>
                    <span style={{ marginTop: "10px", wordBreak: "break-word" }}>{item.description.length < WORD_BREAK_LENGTH ? item.description : item.description.slice(0, WORD_BREAK_LENGTH) + "..."}</span>
                    <Link className={styles["info-button"]} to="/details/1">Read More</Link>
                </div>
            </div>
        );
    }

    return (
        <div className={styles["grid-container"]}>
            {
                items.map((item) => rendergridItem(item))
            }
        </div>
    )
}


export default GridDisplay;