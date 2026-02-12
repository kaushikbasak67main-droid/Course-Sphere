import Card from "./Card";
import { useState } from "react";

function Cards(props) {
  const { courses, category } = props;

  const [likedCourses, setLikedCourses] = useState([]);

  function getCourses() {
    if (!courses) return []; // safety guard

    if (category === "All") {
      let allCourses = [];

      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });

      return allCourses;
    }

    // return category courses safely
    return courses[category] || [];
  }

  const filteredCourses = getCourses();

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {filteredCourses.length > 0 ? (
        filteredCourses.map((course) => (
          <Card
            key={course.id}
            course={course}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          />
        ))
      ) : (
        <p className="text-white text-lg">No courses found</p>
      )}
    </div>
  );
}

export default Cards;
