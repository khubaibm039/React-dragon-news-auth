import { useLoaderData } from "react-router-dom";
import LeftSideNave from "../Shared/LeftSideNave/LeftSideNave";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Header from "../Shared/header/Header";
import BreakingNews from "./BreakingNews";
import NewsCard from "./card/NewsCard";

const Home = () => {
    const news = useLoaderData();

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
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
                <div className="">
                    <LeftSideNave></LeftSideNave>
                </div>
                <div className=" md:col-span-2">
                    <div>
                        {news?.map((news) => (
                            <NewsCard key={news._id} news={news}></NewsCard>
                        ))}
                    </div>
                </div>
                <div className="">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;
