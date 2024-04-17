import { useEffect } from "react";
import Estates from "../components/Estates";
import Slider from "../components/Slider";

const Home = () => {
    useEffect(() => {document.title = 'Guest Manager'},[])
    return (
        <div>

            <Slider />

            <Estates />

        </div>
    );
};

export default Home;