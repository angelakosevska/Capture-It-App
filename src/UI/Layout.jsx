import React from "react";
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";


const Layout =({children}) => {
    return(
        <>
        <Header/>
        {children}
        <Footer/>
        </>
    );
}

export default Layout;