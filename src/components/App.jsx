import React from "react";
import Layout from "../containers/Layout";
import NavBar from "../containers/NavBar";
import TablaInventory from "../containers/TablaInventory";
import '../Styles/global.scss'
const App = () => {
    return (

        <Layout>
            <NavBar />
            <TablaInventory />
        </Layout>

    );
}

export default App;