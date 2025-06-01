import React from "react";
import HeaderView from "../views/header-view/headerView";
import { Outlet } from "react-router-dom";

function Main(): React.JSX.Element {


    return(<>
        <HeaderView/>
        <main><Outlet /></main>
        </>
    );
};

export default Main;