// import { Carousel } from "flowbite-react";
import cameraImg from "../assets/images/camera_1042390.png";
import FoodIcon from "../assets/images/fast-food_2819368.png";
import romanceIcon from "../assets/images/talk_4001698.png";
function CorouselCategory() {
  return (
    <>
      <div className="my-8 flex flex-wrap justify-center gap-6 px-5">
        {/* Card 1 */}
        <div className="flex h-80 w-72 flex-col items-center rounded-lg bg-purple-100 p-6 shadow-md transition-transform hover:scale-105">
          <span className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-purple-300">
            <img src={FoodIcon} alt="Health Icon" className="h-12 w-12" />
          </span>
          <h3 className="text-xl font-semibold text-gray-700">Health</h3>
          <p className="mt-2 text-center text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex h-80 w-72 flex-col items-center rounded-lg bg-yellow-100 p-6 shadow-md transition-transform hover:scale-105">
          <span className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-yellow-200">
            <img src={cameraImg} alt="Travel Icon" className="h-12 w-12" />
          </span>
          <h3 className="text-xl font-semibold text-gray-700">Travel</h3>
          <p className="mt-2 text-center text-gray-600">
            One of the finest collections on travel.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex h-80 w-72 flex-col items-center rounded-lg bg-pink-100 p-6 shadow-md transition-transform hover:scale-105">
          <span className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-pink-300">
            <img src={romanceIcon} alt="New Icon" className="h-12 w-12" />
          </span>
          <h3 className="text-xl font-semibold text-gray-700">Romance</h3>
          <p className="mt-2 text-center text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        {/* Card 4 - New Category */}
        <div className="flex h-80 w-72 flex-col items-center rounded-lg bg-blue-100 p-6 shadow-md transition-transform hover:scale-105">
          <span className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-blue-300">
            <img src={cameraImg} alt="Technology Icon" className="h-12 w-12" />
          </span>
          <h3 className="text-xl font-semibold text-gray-700">Technology</h3>
          <p className="mt-2 text-center text-gray-600">
            Explore the latest in tech and innovation.
          </p>
        </div>
      </div>
    </>
  );
}

export default CorouselCategory;
