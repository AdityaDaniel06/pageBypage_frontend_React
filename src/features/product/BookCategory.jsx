function BookCategories() {
  const categories = [
    {
      title: "Comics Books",
      img: "",
      bgColor: "bg-blue-500",
    },
    {
      title: "Board Games",
      img: "",
      bgColor: "bg-gray-200",
    },
    {
      title: "Business & Money Books",
      img: "",
      bgColor: "bg-gray-400",
    },
    {
      title: "Children's Books",
      img: "",
      bgColor: "bg-orange-500",
    },
    {
      title: "Travel Books",
      img: "",
      bgColor: "bg-teal-500",
    },
    {
      title: "Gift Cards",
      img: "",
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
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />

            {/* Overlay Text */}
            <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
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
