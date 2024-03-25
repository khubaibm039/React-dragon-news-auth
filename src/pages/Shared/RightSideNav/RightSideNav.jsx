import {
    FaGoogle,
    FaGithub,
    FaFacebookF,
    FaTwitter,
    FaInstagram,
} from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 mb-6">
                <h2 className="text-2xl mb-8 font-bold">Login With</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Login With Google
                </button>
                <button className="btn btn-outline w-full my-4">
                    <FaGithub></FaGithub>
                    Login With Github
                </button>
            </div>
            <div className="p-4 mb-6">
                <h2 className="text-2xl mb-8 font-bold">Find Us on</h2>
                <a
                    className="p-4 w-full flex items-center gap-3 text-lg border rounded-t-lg"
                    href=""
                >
                    <FaFacebookF></FaFacebookF>
                    <span>Facebook</span>
                </a>
                <a
                    className="p-4 w-full flex items-center gap-3 text-lg border-x"
                    href=""
                >
                    <FaTwitter></FaTwitter>
                    <span>Twitter</span>
                </a>
                <a
                    className="p-4 w-full flex items-center gap-3 text-lg border rounded-b-lg"
                    href=""
                >
                    <FaInstagram></FaInstagram>
                    <span>Instagram</span>
                </a>
            </div>
            {/* Q zone */}
            <div className="p-4 mb-6 bg-slate-700">
                <h2 className="text-2xl mb-8 font-bold">Q-Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;
