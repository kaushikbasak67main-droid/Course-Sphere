import Card from "./Card";
import { useState } from "react";

function Cards(props) {
  const { courses, category } = props; // destructuring the props object
  // from api call, I got the courses data
  // course data is stored in JSON format in the courses object

  const [likedCourses, setLikedCourses] = useState([]);
  // initialized the likedCourses with empty array
  // I'll store the course id into the likedCourses array when the user will like a course

  function getCourses() {
    // This function will get the courses from the fetched courses data (JSON format) through the API call
    // If the user selects `All` category, then all the courses will be shown
    // Otherwise, the courses based on the category will be shown
    if (category === "All") {
      // as the courses are stored in JSON format in the `courses` object, so I need it into an array form to render courses in the UI
      let allCourses = []; // all courses will be stored in this array
      Object.values(courses).forEach((courseCategory) => {
        // based on the JSON format of `courses` object, I'm storing all the courses in the `allCourses` array
        courseCategory.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });
      // `Object.values(courses)` is a JavaScript method that returns an array of the values of the properties in the `courses` object
      return allCourses;
    } else {
      // return specific courses based on category
      return courses[category];
    }
  }

  // getCourses() will return an array of courses based on the category selected by the user
  // or it will return all the courses if the user selects `All` category

  const renderCourses = getCourses().map((course) => (
    // I'm creating a Card component for each course
    // I'm passing the course details to the Card component as props
    <Card
      key={course.id}
      course={course}
      likedCourses={likedCourses}
      setLikedCourses={setLikedCourses}
    />
  ));

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {renderCourses}
    </div>
  ); // rendering the courses
}

export default Cards;
