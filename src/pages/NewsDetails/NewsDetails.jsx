import { useParams } from "react-router-dom";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Header from "../Shared/header/Header";
import Navbar from "../Shared/Navbar/Navbar";

const NewsDetails = () => {
    const { id } = useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-5xl"> news details</h2>
                    <p>{id}</p>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;
