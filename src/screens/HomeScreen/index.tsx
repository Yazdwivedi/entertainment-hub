import GridDisplay from "../../components/GridDisplay";
import styles from "./style.module.css";

const HomeScreen = () => {
    const items = [
        {
            imageUrl: require("../../assets/movie.jpg"),
            title: "First title",
            description: "First desc",
        },
        {
            imageUrl: require("../../assets/movie.jpg"),
            title: "First title",
            description: "First desc",
        },
        {
            imageUrl: require("../../assets/movie.jpg"),
            title: "First title",
            description: "First desc",
        },
        {
            imageUrl: require("../../assets/movie.jpg"),
            title: "First title",
            description: "First desc and i want to add more info at once,malskaoskoskasaysgaysgyasgyagsyagsyagsygaysgaysgaysgaysajsaushaiushiuashuahsuahsuashuasguasguasguasguasguasausausgausdsudgusgdusdgusdgusgdusgdusgdusdgusdgusdgusdgdgsudgzxjhzujxzuxsdsdsdiuhsudhsudhsudhsudshdishdushdusdsdusu",
        }
    ]

    return (
        <div className={styles["home-container"]}>
            <span className={styles["home-heading"]}>List of Movies</span>
            <GridDisplay items={items} />
        </div>
    )
}


export default HomeScreen;