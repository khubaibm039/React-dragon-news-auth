import Navbar from "../Shared/Navbar/Navbar";
import Header from "../Shared/header/Header";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h2 className="text-3xl font-poppins font-extrabold">
                This is home
            </h2>
        </div>
    );
};

export default Home;
