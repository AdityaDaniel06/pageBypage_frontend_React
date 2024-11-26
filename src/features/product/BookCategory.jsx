// import img01 from "../../assets/images/comic_bg.jpg";
import imgComic from "../../assets/images/bang01.png";
import imgBoardGames from "../../assets/images/boardgame01.jpg";
import imgChildren from "../../assets/images/children01.jpg";
import imgReligion from "../../assets/images/religious01.jpg";
import imgGifts from "../../assets/images/gifts01.jpg";
import business from "../../assets/images/business.webp";

function BookCategories() {
  const categories = [
    {
      title: "Comics Books",
      img: imgComic,
      bgColor: "bg-gold-200",
    },
    {
      title: "Board Games",
      img: imgBoardGames,
      bgColor: "bg-pink-300",
    },
    {
      title: "Business & Money Books",
      img: business,
      bgColor: "bg-gray-400",
    },
    {
      title: "Children's Books",
      img: imgChildren,
      bgColor: "bg-orange-500",
    },
    {
      title: "Religious Books",
      img: imgReligion,
      bgColor: "bg-teal-200",
    },
    {
      title: "Gift & Cards",
      img: imgGifts,
      bgColor: "bg-yellow-500",
    },
  ];

  return (
    <div className="mt-24 bg-gray-100 py-10">
      <div className="container mx-auto grid grid-cols-1 gap-6 px-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg ${category.bgColor} h-60`}
          >
            {/* Background Image */}
            <img
              src={category.img}
              alt={category.title}
              className="absolute inset-0 h-full w-full object-cover opacity-70"
            />

            {/* Overlay Text */}
            <div className="absolute inset-0 flex flex-col justify-between p-6 text-slate-800">
              <h2 className="text-xl font-bold">{category.title}</h2>
              <div className="self-end text-lg font-semibold">
                <span>&gt;</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookCategories;
