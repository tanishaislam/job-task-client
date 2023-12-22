import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import avatarImage from '../../../assets/avaterImag.jpg'

const UserProfile = () => {
    const {user} = useContext(AuthContext);

    return (
        <div>
            <div>
                <h1 className="lg:text-2xl md:text-2xl text-xl text-center font-bold">-- User <span className="text-blue-700">Profile </span>--</h1>

                <div className="text-center">
                    <img src={user && user?.photoURL ? user.photoURL : avatarImage} alt="" className="rounded-full h-16 w-16 border-green-400 outline-2 outline outline-offset-2 outline-blue-500 m-auto mt-20 "/>

                    <h3 className="font-semibold mt-5">User Name: {user?.displayName}</h3>
                    <h2 className="font-semibold mt-3">User Email: {user?.email}</h2>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;