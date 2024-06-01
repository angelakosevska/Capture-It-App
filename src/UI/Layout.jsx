import React from "react";
import Header from "../components/Header/index.jsx";
import Footer from "../components/Footer/index.jsx";
import {Outlet} from "react-router-dom";

export const Layout =({children}) => {
    return(
        <>
        <Header/>
        {children}
        <Footer/>
        </>
    );
}

export default Layout;