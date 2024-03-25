import LeftSideNave from "../Shared/LeftSideNave/LeftSideNave";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Header from "../Shared/header/Header";
import BreakingNews from "./BreakingNews";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className="bg-gray-800 p-2  my-4">
                <BreakingNews></BreakingNews>
            </div>

            <Navbar></Navbar>
            <h2 className="text-3xl font-poppins font-extrabold">
                This is home
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 border">
                <div className="border">
                    <LeftSideNave></LeftSideNave>
                </div>
                <div className="border md:col-span-2">
                    <h2 className="text-4xl">news coming soon</h2>
                </div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;
