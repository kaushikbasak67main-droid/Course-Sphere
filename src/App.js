import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import { apiUrl, filterData } from "./data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [courses, setCourses] = useState([]); // Courses fetched from API
  const [loading, setLoading] = useState(false); // Loading state
  const [category, setCategory] = useState(filterData[0].title); // Selected category

  // Fetch courses from API
  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const output = await response.json();
      setCourses(output.data || []); // fallback to empty array
    } catch (error) {
      toast.error("Something went wrong!");
      console.error("Fetch error:", error);
    } finally {
      setLoading(false); // Always remove loading spinner
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Filter and Cards */}
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-col items-center">
        <Filter
          filterData={filterData}
          category={category}
          setCategory={setCategory}
        />

        <div className="w-full flex flex-wrap justify-center items-center min-h-[50vh]">
          {loading ? <Spinner /> : <Cards courses={courses} category={category} />}
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Toast container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
