function Filter(props) {
  const { filterData, category, setCategory } = props;

  function handler(courseCategory) {
    setCategory(courseCategory);
  }

  // Safety guard (VERY important)
  if (!filterData || filterData.length === 0) {
    return null; // or loading UI if you want
  }

  return (
    <div className="w-11/12 flex flex-wrap max-w-max gap-4 mx-auto py-4 justify-center">
      {filterData.map((data) => (
        <button
          key={data.id}
          onClick={() => handler(data.title)}
          className={`text-lg px-3 py-1 rounded-md font-medium text-white bg-black border-2 transition-all duration-300 hover:bg-opacity-50
            ${
              category === data.title
                ? "bg-opacity-60 border-white"
                : "bg-opacity-40 border-transparent"
            }`}
        >
          {data.title}
        </button>
      ))}
    </div>
  );
}

export default Filter;
