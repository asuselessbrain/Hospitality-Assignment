import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateProfile = () => {
    const { updateUserProfile, user } = useContext(AuthContext);
    const { register, handleSubmit } = useForm({
        defaultValues: {
            fullName: user.displayName,
            email: user.email,
            image: user.photoURL
        }
    });

    const [isUpdating, setIsUpdating] = useState(false);

    const onSubmit = async (data) => {
        setIsUpdating(true);
        try {
            const { email, fullName, image } = data;
            await updateUserProfile(fullName, image, email);
            toast.success("Profile updated successfully");
        } catch (error) {
            // Handle errors here
            console.error("An error occurred:", error);
            toast.error("Failed to update profile");
        } finally {
            setIsUpdating(false);
        }
    };

    return (
        <div className='flex flex-col items-center mt-40 h-screen'>
            <div>
                <img className='rounded-full mx-auto' src={user.photoURL} alt="User" style={{ width: '100px', height: '100px' }} />
                <p className="text-center mt-4">Name: {user.displayName}</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl mx-auto bg-white shadow-[0_2px_18px_-3px_rgba(6,81,237,0.4)] sm:p-8 p-4 rounded-md">
                <div className="grid md:grid-cols-2 gap-y-7 gap-x-12">
                    <div>
                        <label className="text-sm mb-2 block">Full Name</label>
                        <input name="fullName" type="text" className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter full name" {...register("fullName")} />
                    </div>
                    <div>
                        <label className="text-sm mb-2 block">Email Id</label>
                        <input name="email" type="email" className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter email" {...register("email")} />
                    </div>
                    <div>
                        <label className="text-sm mb-2 block">Image Url</label>
                        <input name="image" type="text" className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Image Url" {...register("image")} />
                    </div>
                </div>
                <div className="mt-10">
                    <button className="min-w-[150px] py-3 px-4 text-sm font-semibold rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none hover:scale-105" type="submit" disabled={isUpdating}>
                        {isUpdating ? "Updating..." : "Update Profile"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProfile;
