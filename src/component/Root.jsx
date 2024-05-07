import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./home/pages/Footer";


const Root = () => {
    return (
        <div className="bg-black min-h-[900px]">
            <div className="w-full md:w-[85%] lg:w-[85%] m-auto">

            </div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;