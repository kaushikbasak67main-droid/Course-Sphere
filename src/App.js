import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import { apiUrl, filterData } from "./data";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [courses, setCourses] = useState([]); // initialized the course with empty array
  // With it, I'll be able to show the courses fetched from the API
  const [loading, setLoading] = useState(false); // initialized the loading with false
  // With it, I'll be able to show a loading spinner when the data is being fetched
  const [category, setCategory] = useState(filterData[0].title); // initialized the category with All
  // With it, I'll be able to show the courses based on the category selected by the user
  // initially the category will be `All`
  // that's mean all the types of courses will be shown

  async function fetchData() {
    // course data will be fetched from the API
    setLoading(true); // A loading screen will be shown until the data is being fetched

    await fetch(apiUrl)
      .then((response) => response.json())
      .then((output) => setCourses(output.data))
      .catch(() => toast.error("Something went wrong!"));

    <ToastContainer /> // toast container will be shown when there's an error
    // The data will be fetched from the apiUrl and then the courses will be set
    // If there's an error, a toast message will be shown

    setLoading(false); // The loading screen will be removed once the data is fetched
  }

  useEffect(() => {
    fetchData();
  }, []);
  // The fetchData function will be called once when the component is rendered

  const showUI = loading ? (
    <Spinner />
  ) : (
    <Cards courses={courses} category={category} />
    // props have been sent within Cards component
  );
  // If loading state is true, the Spinner component (Loading screen) will be shown
  // Otherwise, the Cards component will be shown
  // the Cards component contains the details of the courses

  return (
    <div className="min-h-screen flex flex-col">
      {/* Showing NavBar */}
      <div>
        <Navbar />
      </div>

      <div>
        <div>
          {/* Showing Filter Component which contains various course category buttons */}
          <Filter
            filterData={filterData}
            category={category}
            setCategory={setCategory}
          />
          {/* Sent props within Filter component */}
        </div>

        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {/* Showing data in UI (weather Loading Screen or Course Details) */}
          {showUI}
        </div>
      </div>

      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
