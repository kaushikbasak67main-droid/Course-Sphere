import { ToastContainer, toast } from 'react-toastify';
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import 'react-toastify/dist/ReactToastify.css';

function Card(props) {
  const { course, likedCourses, setLikedCourses } = props; // destructuring the props object

  function clickHandler() {
    // If user clicks on the like button, this function will be called
    if (likedCourses.includes(course.id)) {
      // The course has already been liked
      // Now remove the like and also remove the course id from the `likedCourses` array
      setLikedCourses((prev) => prev.filter((id) => id != course.id));
      // Filter the likedCourses array and remove the course id from the array
      toast.warning("Like Removed");
    } else {
      // The course has not been liked yet
      // Now like the course and also add the course id to the `likedCourses` array
      setLikedCourses((prev) => [...prev, course.id]);
      // copying the previous `likedCourses` array (with spread operator)
      // and adding the course id(which has recently been liked) to the array
      toast.success("Liked Successfully");
    }
  }

  // change the `like` icon based on the course has been liked or not
  const renderLikeButon = likedCourses.includes(course.id) ? (
    // If the course has been liked, then show the like icon with specific style
    <FcLike fontSize="1.75rem" />
  ) : (
    // If the course has not been liked, then show the like icon with another style
    <FcLikePlaceholder fontSize="1.75rem" />
  );

  const renderCourseDescription =
    course.description.length > 100
      ? course.description.substr(0, 100) + "..."
      : course.description;
  // If the course description is more than 100 characters, then show only 100 characters
  // Otherwise, show the whole description

  return (
    <div className='w-[300px] card bg-opacity-80 rounded-md overflow-hidden'>
      <div className='relative'>
        <img src={course.image.url} />

        <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center'>
          <button onClick={clickHandler}>
            {renderLikeButon}
            <ToastContainer /> {/* Toast messages will be shown here */}
          </button>
          {/* When I'll click on the like button, A toast will be shown that will be handled by `clickHandler` function */}
        </div>
      </div>

      <div className='p-4'>
        <p className="text-white font-semibold text-lg leading-6"> {course.title} </p>
        <p className='mt-2 text-white'> {renderCourseDescription} </p>
      </div>
    </div>
  );
}

export default Card;
