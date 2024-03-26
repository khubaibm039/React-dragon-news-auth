import { Link, Navigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        // console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const image = form.get("image");
        const email = form.get("email");
        const password = form.get("password");
        // console.log(name, image, email, password);

        createUser(email, password)
            .then((result) => {
                console.log(result.user);
                <Navigate to={"/"}></Navigate>;
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-[80vh] w-3/4 mx-auto ">
                <div className=" grid w-full bg-base-300 p-40">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl text-center font-bold">
                            Register your account
                        </h1>
                        <div className="border border-gray-600 my-10"></div>
                    </div>
                    <div className="shrink-0">
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className=" text-2xl font-bold">
                                        Your Name
                                    </span>
                                </label>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Enter your Name"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className=" text-2xl font-bold">
                                        Photo URL
                                    </span>
                                </label>
                                <input
                                    name="image"
                                    type="text"
                                    placeholder="Enter your Photo URL"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
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
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">
                                    Register
                                </button>
                            </div>
                            <div className="flex justify-center mt-4 items-center">
                                <p>Already Have An Account</p>
                                <Link className="btn btn-link" to={"/login"}>
                                    login
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
