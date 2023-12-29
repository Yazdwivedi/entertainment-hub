import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useLocation } from 'react-router-dom';


type NavBarItem = {
    id: string,
    name: string,
    redirectUrl: string,
    type: string,
}

type NavBarItems = Array<NavBarItem>

type PropType = {
    onSignInClick: Function
}

const NavBar = ({ onSignInClick }: PropType) => {
    const navbarRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    let location = useLocation();
    const [selectedItem, setSelectedItem] = useState(location?.pathname.split("/")[1] || "home")
    const [openMenu, setOpenMenu] = useState(false);
    const navigate = useNavigate();

    const handleClick = (event: MouseEvent) => {
        event.stopPropagation();
        if (event.target instanceof Node && navbarRef?.current?.contains(event.target)) {
            return;
        }
        else if (event.target instanceof Node && !event.target?.contains(navbarRef.current)) {
            setOpenMenu(false);
        }
    }

    useEffect(() => {
        window.addEventListener("click", handleClick);
        return () => {
            window.removeEventListener("click", handleClick);
        }
    }, [])

    const menuItems: NavBarItems = [
        {
            id: "1",
            name: "Home",
            redirectUrl: "/",
            type: "home"
        },
        {
            id: "2",
            name: "Movies",
            redirectUrl: "/movies",
            type: "movies"
        },
        {
            id: "3",
            name: "Movies List",
            redirectUrl: "/list",
            type: "list"
        }
    ]

    return (
        <div ref={navbarRef} className={styles["navbar-container"]}>
            {
                menuItems.map((item) => {
                    return (
                        <div key={item?.id} className={styles["navbar-item-container"]} onClick={() => setSelectedItem(item.type)}>
                            <div onClick={() => navigate(item.redirectUrl)} className={`${styles["navbar-item"]} ${item.type === selectedItem && styles["selected"]}`}>
                                <p>{item.name}</p>
                            </div>
                        </div>
                    );
                })
            }
            <img src={require("../../assets/menu.png")} alt="Menu" onClick={() => setOpenMenu(openMenu => !openMenu)} />
            <div className={styles["navbar-menu-container"]}>
                {
                    openMenu &&
                    <div ref={menuRef} className={styles["navbar-menu-list"]}>
                        <span onClick={() => {
                            setOpenMenu(false);
                            onSignInClick("login")}
                        }>Login</span>
                        <span onClick={() => {
                            setOpenMenu(false); 
                            onSignInClick("signUp")}
                        }>Sign up</span>
                    </div>
                }
            </div>
        </div>
    )
}


export default NavBar;