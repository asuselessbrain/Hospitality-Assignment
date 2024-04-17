import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Estate = () => {

	useEffect(() => {
        document.title = 'Details';
    }, []);
	// Fetching data using useLoaderData
	const estates = useLoaderData();

	// Extracting the id parameter from the URL
	const { id } = useParams();

	// Finding the estate with the specified ID
	const estate = estates.find(estate => estate.id === parseInt(id));

	// Destructuring estate object
	const { image, estate_title, segment_name, description, price, status, area, facilities, location } = estate;

	return (
		<div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
			<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
				<img src={image} alt="" className="w-full dark:bg-gray-500" />
				<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
					<div className="space-y-2">
						<h2 className="inline-block text-2xl font-semibold sm:text-3xl">{estate_title}</h2>
						<p className="text-md text-gray-500">{segment_name}</p>

						<div className="flex gap-4 my-3 items-center mt-10">
							{
								facilities.map((facilitie) => {
									return <p key={id} className="bg-gray-200 text-green-500 rounded-full px-4 py-2">#{facilitie}</p>;
								})
							}
						</div>
					</div>
					<div>
						<p className="text-justify">{description}</p>
					</div>

					<hr />

					<div className="space-y-2">
						<p><span className="text-black font-bold">Location:</span> {location}</p>
						<p><span className="text-black font-bold">Area:</span> {area}</p>
						<p><span className="text-black font-bold">Status:</span> {status}</p>
						<p><span className="text-black font-bold">Price: </span><span className="text-red-600 font-bold">{price}</span> Per Night</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Estate;
