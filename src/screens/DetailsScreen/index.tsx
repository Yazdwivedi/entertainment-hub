import styles from "./style.module.css";

const DetailsScreen = () => {
    const item = {
        imageUrl: require("../../assets/movie.jpg"),
        title: "First title",
        description: "First desc and i want to add more info at once,malskaoskoskasaysgaysgmalskaoskoskasaysgaysgmalskaoskoskasaysgaysgmalskaoskoskasaysgaysgmalskaoskoskasaysgaysgmalskaoskoskasaysgaysgmalskaoskoskasaysgaysgmalskaoskoskasaysgaysgmalskaoskoskasaysgaysg",
    }
    return (
        <div className={styles["details-container"]}>
            <div className={styles["details-box"]}>
                <img src={item.imageUrl} alt="Movie Icon" />
                <div className={styles["info-container"]}>
                    <span className={styles["item-title"]}>{item.title}</span>
                    <span style={{ marginTop: "20px", wordBreak: "break-word" }}>{item.description}</span>
                </div>
            </div>
        </div>
    )
}


export default DetailsScreen;