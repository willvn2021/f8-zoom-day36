import { Outlet } from "react-router";

import Footer from "./components/Footer";
import Header from "../components/Header";

function DefaultLayout() {
    return (
        <div>
            <Header />
            <div className="container">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
