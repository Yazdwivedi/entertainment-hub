import { useState } from "react";
import styles from "./style.module.css";
import Dropdown from "../../components/Dropdown";
import Modal from "../../components/Modal";
import { useForm } from "react-hook-form";
import FormInput from "../../components/FormComponents/FormInput";
import FormDropdown from "../../components/FormComponents/FormDropdown";

enum Filters {
  All = "all",
  Plan_to_watch = "Plan to Watch",
  Completed = "Completed",
  Dropped = "Dropped",
}

type MenuItem = {
  name: string;
  type: string;
};

type MovieInputs = {
  movieName: string;
  movieStatus?: string;
  movieRating?: string;
};

type Menu = Array<MenuItem>;

type ListItem = {
  id: string;
  title: string;
  status?: string;
  rating?: string;
  imageUrl?: string;
  description?: string;
};

type ListItems = Array<ListItem>;

const ListScreen = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<MovieInputs>({ mode: "onTouched" });

  const itemsArr: ListItems = [
    {
      id: "1",
      imageUrl: require("../../assets/movie.jpg"),
      title: "First title",
      description: "First desc",
      status: Filters.Plan_to_watch,
      rating: "Unrated",
    },
    {
      id: "2",
      imageUrl: require("../../assets/movie.jpg"),
      title: "First title",
      description: "First desc",
      status: Filters.Plan_to_watch,
      rating: "Unrated",
    },
    {
      id: "3",
      imageUrl: require("../../assets/movie.jpg"),
      title: "First title",
      description: "First desc",
      status: Filters.Plan_to_watch,
      rating: "Unrated",
    },
    {
      id: "4",
      imageUrl: require("../../assets/movie.jpg"),
      title: "First title",
      description:
        "First desc and i want to add more info at once,malskaoskoskasaysgaysgyasgyagsyagsyagsygaysgaysgaysgaysajsaushaiushiuashuahsuahsuashuasguasguasguasguasguasausausgausdsudgusgdusdgusdgusgdusgdusgdusdgusdgusdgusdgdgsudgzxjhzujxzuxsdsdsdiuhsudhsudhsudhsudshdishdushdusdsdusu",
      status: Filters.Plan_to_watch,
      rating: "Unrated",
    },
  ];

  const menuItems: Menu = [
    {
      name: "All",
      type: Filters.All,
    },
    {
      name: "Plan to watch",
      type: Filters.Plan_to_watch,
    },
    {
      name: "Completed",
      type: Filters.Completed,
    },
    {
      name: "Dropped",
      type: Filters.Dropped,
    },
  ];

  const options = [Filters.Plan_to_watch,  Filters.Completed, Filters.Dropped];

  const ratingsArray = ["0", "1", "2", "3", "4", "5"];

  const [selectedType, setSelectedtype] = useState("all");
  const [openModal, setOpenModal] = useState(false);
  const [items, setItems] = useState(itemsArr);

  const handleOptionSelect = (
    idToUpdate: string,
    selectedOption: string,
    keyToUpdate: "status" | "rating"
  ) => {
    setItems((prevItems) =>
      prevItems.map((currentItem) => {
        if (currentItem.id === idToUpdate) {
          currentItem[keyToUpdate] = selectedOption;
        }
        return currentItem;
      })
    );
  };

  const handleItemDelete = (idToDelete: string) => {
    setItems((prevItems) =>
      prevItems.filter((currentItem) => currentItem.id !== idToDelete)
    );
  };

  const renderMenu = (): JSX.Element => {
    return (
      <div className={styles["list-menu-container"]}>
        {menuItems.map((item: MenuItem, index: number) => {
          let borderStyle = index === 0 && {
            borderRadius: "30px 0px 0px 30px",
          };
          borderStyle =
            index === menuItems.length - 1
              ? { borderRadius: "0px 30px 30px 0px" }
              : borderStyle;
          borderStyle =
            menuItems.length === 1 ? { borderRadius: "30px" } : borderStyle;

          return (
            <div
              onClick={() => setSelectedtype(item.type)}
              className={`${styles["list-menu-item-container"]} ${
                item.type === selectedType
                  ? styles["selected-item"]
                  : styles["non-selected-item"]
              }`}
              style={{ flex: Math.ceil(1 / menuItems.length), ...borderStyle }}
            >
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
    );
  };

  const renderList = (): JSX.Element => {
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        {items
        .filter((item=> selectedType === Filters.All || selectedType === item.status))
        .map((item) => {
          return (
            <div className={styles["list-item"]} key={item.id}>
              <img src={item.imageUrl} alt="Movie Icon" />
              <div className={styles["list-item-info"]}>
                <span style={{ fontWeight: "400" }}>{item.title}</span>
                <div className={styles["dropdown-container"]}>
                  <span>Status</span>
                  <Dropdown
                    options={options}
                    onSelectOption={(newSelectValue: string) =>
                      handleOptionSelect(item.id, newSelectValue, "status")
                    }
                    defaultSelected={item.status}
                  />
                </div>
                <div className={styles["dropdown-container"]}>
                  <span>Rating</span>
                  <Dropdown
                    options={ratingsArray}
                    onSelectOption={(newSelectValue: string) =>
                      handleOptionSelect(item.id, newSelectValue, "rating")
                    }
                    defaultSelected={item.rating}
                  />
                </div>
                <img
                  src={require("../../assets/delete.png")}
                  alt="Delete"
                  onClick={() => handleItemDelete(item.id)}
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const onNewMovieSubmit = (data: MovieInputs) => {
    setOpenModal(false);
    reset();
    setItems(prevItems => {
      const newItems = [...prevItems];
      newItems.push({
        id: Math.floor(Math.random() * (10)) + 5 + "",
        title: data.movieName,
        ...(data.movieRating ? {rating: data.movieRating} : {}),
        ...(data.movieStatus ? {rating: data.movieStatus} : {}),
      });
      return newItems
    });
  };

  const renderMovieForm = (): JSX.Element => {
    return (
      <>
        <form
          className={styles["new-movie-form"]}
          onSubmit={handleSubmit(onNewMovieSubmit)}
        >
          <FormInput
            style={{ padding: "15px", width: "95%", alignSelf: "center" }}
            placeholder={"Enter Username"}
            register={register}
            registerName={"movieName"}
            label="Movie Name"
            error={errors["movieName"]}
            required={true}
            errMessage={"Please enter a username"}
            type="text"
          />
          <br />
          <FormDropdown
            options={options}
            register={register}
            registerName={"movieStatus"}
            label={"Movie Status"}
          />
          <br />
          <FormDropdown
            options={ratingsArray}
            register={register}
            registerName={"movieRating"}
            label={"Movie Rating"}
          />
          <br />
          <input
            className={`submit-button ${!isValid ? "disable-button" : ""}`}
            disabled={!isValid}
            type="submit"
          />
        </form>
      </>
    );
  };

  return (
    <div className={styles["list-container"]}>
      <span className={styles["list-heading"]}>Your List</span>
      {renderMenu()}
      {renderList()}
      <svg
        className={styles["add-new"]}
        onClick={() => setOpenModal(true)}
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
      >
        <circle cx="30" cy="30" r="30" fill="#2C6656" />
        <text x="18" y="40" fill="white">
          +
        </text>
      </svg>
      {openModal && (
        <Modal
          closeModal={() => {
            setOpenModal(false);
          }}
          render={renderMovieForm}
        />
      )}
    </div>
  );
};

export default ListScreen;
