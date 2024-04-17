import { Link } from "react-router-dom";

const EstateCart = ({ estate }) => {

    const { estate_title, segment_name, description, price, id, image, facilities } = estate;
    return (
        <div data-aos="fade-up" data-aos-delay="250" className="p-6 rounded-md shadow-md">
            <img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />

            <div className="flex gap-4 my-3 items-center mt-10">
                {
                    facilities.map((facilitie) => {
                        return <p key={id} className="bg-gray-200 text-green-500 rounded-full px-4 py-2">#{facilitie}</p>;
                    })
                }
            </div>

            <div className="mt-6 mb-2">
                <h2 className="text-2xl font-semibold tracking-wide mb-4">{estate_title}</h2>
                <span className="block text-md font-medium tracking-widest uppercase mb-3 text-gray-500">{segment_name}</span>


                <p><span className="text-red-500 font-bold mb-8">{price}</span> per night</p>
            </div>
            <Link to={`/estate/${id}`}><button
                className="bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-blue-500 hover:border-blue-600 hover:bg-blue-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center mt-6">
                <span className="mx-auto">View More</span>
            </button></Link>
        </div>
    );
};

export default EstateCart;