import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { useForm } from "react-hook-form";

const SignUp = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext);


    useEffect(() => {
        document.title = 'Register Profile';
    }, []);

    const navigate = useNavigate();
    const from = '/';

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const { email, password, fullName, image } = data;
            await createUser(email, password);
            await updateUserProfile(fullName, image);
            navigate(from);
        } catch (error) {
            // Handle errors here
            console.error("An error occurred:", error);
        }
    };

    return (
        <div className="font-[sans-serif] text-[#333] h-screen">
            <div className="text-center bg-gradient-to-r from-blue-800 to-blue-400 min-h-[160px] sm:p-6 p-4">
                <h4 className="sm:text-3xl text-2xl font-bold text-white">Create your free account</h4>
            </div>
            <div className="mx-4 mb-4 -mt-16">
                <form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl mx-auto bg-white shadow-[0_2px_18px_-3px_rgba(6,81,237,0.4)] sm:p-8 p-4 rounded-md">
                    <div className="grid md:grid-cols-2 gap-y-7 gap-x-12">
                        <div>
                            <label className="text-sm mb-2 block">Full Name</label>
                            <input name="name" type="text" className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter full name" {...register("fullName", { required: true })} />

                            {errors.fullName && <span className="text-red-600">Name is required</span>}
                        </div>
                        <div>
                            <label className="text-sm mb-2 block">Email Id</label>
                            <input name="email" type="text" className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter email" {...register("email", { required: true })} />

                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>
                        <div>
                            <label className="text-sm mb-2 block">Mobile No.</label>
                            <input name="number" type="number" className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter mobile number" {...register("mobileNumber")} />
                        </div>
                        <div>
                            <label className="text-sm mb-2 block">Image Url</label>
                            <input name="imageUrl" type="text" className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Image Url" {...register("image", { required: true })} />

                            {errors.image && <span className="text-red-600">Image is required</span>}
                        </div>
                        <div>
                            <label className="text-sm mb-2 block">Password</label>
                            <input name="password" type="password" className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter password" {...register("password", { required: true })} />

                            {errors.password && <span className="text-red-600">Password is required</span>}
                        </div>
                        <div>
                            <label className="text-sm mb-2 block">Confirm Password</label>
                            <input name="cpassword" type="password" className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter confirm password" {...register("confirmPassword", { required: true })} />

                            {errors.confirmPassword && <span className="text-red-600">Confirm password is required</span>}
                        </div>
                    </div>
                    <div className="!mt-10">
                        <input className="min-w-[150px] py-3 px-4 text-sm font-semibold rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none hover:scale-105" value="Sign Up" type="submit" />
                    </div>

                    <div className="flex gap-[20px] mt-4">
                        <p>Have an account?</p>
                        <Link to="/login" className="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out group text-blue-400">Please Login</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;