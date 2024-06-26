import logo from "../../../assets/logo.png";
import moment from "moment";

const Header = () => {
    return (
        <div className="text-center">
            <img className="mx-auto mt-10 mb-2 " src={logo} alt="" />
            <p className="mb-1">Journalism Without Fear or Favour</p>
            <p className="text-xl ">{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;
