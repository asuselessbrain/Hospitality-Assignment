import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const Login = () => {


    useEffect(() => {
        document.title = 'Login';
    }, []);

    const { signInUser, signInWithGoogle, signInWithGithub, signInWithFacebook } = useContext(AuthContext);


    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || '/';


    const handleSocialLogin = (socialProvider) => {
        socialProvider()
            .then((result) => {
                if (result.user) {
                    navigate(from);
                }
            })
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { email, password } = data;
        signInUser(email, password)
            .then(result => {
                if (result.user) {
                    navigate(from);
                }
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <section className="flex font-poppins items-center justify-center">
            <div className="h-screen w-screen flex justify-center items-center">
                <div className="grid gap-8">
                    <div
                        id="back-div"
                        className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-[26px] m-4"
                    >
                        <div
                            className="border-[20px] border-transparent rounded-[20px] bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2 shadow-gray-400"
                        >
                            <h1 className="pt-8 pb-6 font-bold text-5xl text-center cursor-default">
                                Log in
                            </h1>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                <div>
                                    <label className="mb-2 text-lg">Email</label>
                                    <input
                                        id="email"
                                        className="border p-3 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                                        type="email"
                                        placeholder="Email"
                                        {...register("email", { required: true })} />

                                    {errors.email && <span className="text-red-600">Email is required</span>}
                                </div>
                                <div className="py-2">
                                    <span className="px-1 text-sm text-gray-600">Password</span>
                                    <div className="relative">
                                        <input type={showPassword ? "text" : "password"} className="border p-3 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full" placeholder="Password"
                                            {...register("password", { required: true })} />

                                        {errors.password && <span className="text-red-600">Password is required</span>}

                                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">

                                            <span onClick={() => setShowPassword(!showPassword)}>
                                                {
                                                    showPassword ? <FaEye /> : <FaEyeSlash />
                                                }
                                            </span>

                                        </div>
                                    </div>
                                </div>
                                <a
                                    className="group text-blue-400 transition-all duration-100 ease-in-out"
                                    href="#"
                                >
                                    <span
                                        className="bg-left-bottom bg-gradient-to-r text-sm from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                                    >
                                        Forget your password?
                                    </span>
                                </a>

                                <input className="bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out" value="LOG IN" type="submit" />
                            </form>
                            <div className="md:flex items-center justify-between text-md mt-4">
                                <p>Do not have an account?</p>
                                <Link to="/sign-up" className="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out group text-blue-400">Sign Up</Link>
                            </div>

                            <div
                                id="third-party-auth"
                                className="flex items-center justify-center mt-5 flex-wrap"
                            >
                                <button
                                    onClick={() => handleSocialLogin(signInWithGoogle)}
                                    className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                                >
                                    <img
                                        className="max-w-[25px]"
                                        src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
                                        alt="Google"
                                    />
                                </button>
                                <button
                                    onClick={() => handleSocialLogin(signInWithGithub)}
                                    className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                                >
                                    <img
                                        className="max-w-[25px] filter"
                                        src="https://ucarecdn.com/be5b0ffd-85e8-4639-83a6-5162dfa15a16/"
                                        alt="Github"
                                    />
                                </button>
                                <div>

                                </div>
                                <button
                                    onClick={() => handleSocialLogin(signInWithFacebook)}
                                    className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                                >
                                    <img
                                        className="max-w-[25px]"
                                        src="https://ucarecdn.com/6f56c0f1-c9c0-4d72-b44d-51a79ff38ea9/"
                                        alt="Facebook"
                                    />
                                </button>
                            </div>

                            <div
                                className="text-gray-500 flex text-center flex-col mt-4 items-center text-sm"
                            >
                                <p className="cursor-default">
                                    By signing in, you agree to our <span className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out text-blue-400">Terms </span> and <span className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out text-blue-400"> Privacy Policy</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;