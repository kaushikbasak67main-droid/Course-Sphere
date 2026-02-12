function Filter(props) {
  const { filterData, category, setCategory } = props; // destructuring the props object

  function handler(courseCategory) {
    setCategory(courseCategory);
  } // This function will set the `category` based on the button clicked by the user

  const categoryButtons = filterData.map((data) => (
    // filterData Array contains details of course category
    // We will create Buttons based on the course category
    // for that, user can filter the courses based on the category in the website
    <button
      className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300 ${category === data.title ? "bg-opacity-60 border-white" : "bg-opacity-40 border-transparent"}`}
      key={data.id}
      onClick={() => handler(data.title)}
    >
      {data.title}
    </button>
    // creating the buttons based on the course category
    // when we will click on the button, the categoryHandler function will be called
    // This function will set the category based on the button clicked by the user
  )); // extracting the category from the filterData array

  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
      {categoryButtons}
    </div>
  ); // returning the buttons
}

export default Filter;
