import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { loginUser } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        loginUser(email, password)
            .then((result) => {
                console.log(result.user);
                navigate(location?.state ? location.state : "/");
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-[93vh] w-3/4 mx-auto ">
                <div className=" grid w-full bg-base-300 p-40">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl text-center font-bold">
                            Login your account
                        </h1>
                        <div className="border border-gray-600 my-10"></div>
                    </div>
                    <div className=" shrink-0  ">
                        <form onSubmit={handleLogin} className="">
                            <div className="form-control">
                                <label className="label">
                                    <span className=" text-2xl font-bold">
                                        Email address
                                    </span>
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-2xl font-bold">
                                        Password
                                    </span>
                                </label>
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    className="input input-bordered"
                                    required
                                />
                                <label className="label">
                                    <a
                                        href="#"
                                        className="label-text-alt link link-hover"
                                    >
                                        Forgot password?
                                    </a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">
                                    Login
                                </button>
                            </div>
                            <div className="flex justify-center mt-4 items-center">
                                <p>Don’t Have An Account ?</p>
                                <Link className="btn btn-link" to={"/register"}>
                                    Register
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
