import React from "react";
import { useNavigate } from "react-router-dom";
import './headerView.css'

function HeaderView(): React.JSX.Element {
    const navigate = useNavigate();
    const redirectTo = (path: string) => navigate(path);

    return (
        <header>
            <p>Hello there</p>
            <nav>
                <button onClick={() => redirectTo("/")}>Home</button>
                <button onClick={() => redirectTo("/Products")}>Products</button>
                <button onClick={() => redirectTo("/AboutUs")}>About Us</button>
            </nav>
        </header>
    );
};

export default HeaderView;