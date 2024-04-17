import { useLoaderData } from "react-router-dom";
import EstateCart from "./EstateCart";

const Estates = () => {

    const estates = useLoaderData();

    console.log(estates)
    return (
        <div>

            <h2 className="text-5xl font-extrabold text-black mt-16 mb-6 text-center">Estate</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-28 gap-10">

                {
                    estates.map((estate) => <EstateCart key={estate.id} estate={estate} />)
                }
            </div>
        </div>
    );
};

export default Estates;