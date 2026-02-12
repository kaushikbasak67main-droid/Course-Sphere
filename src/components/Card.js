import { ToastContainer, toast } from 'react-toastify';
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import 'react-toastify/dist/ReactToastify.css';

function Card(props) {
  const { course, likedCourses, setLikedCourses } = props;

  function clickHandler() {
    if (likedCourses.includes(course.id)) {
      setLikedCourses((prev) =>
        prev.filter((id) => id !== course.id)
      );
      toast.warning("Like Removed");
    } else {
      setLikedCourses((prev) => [...prev, course.id]);
      toast.success("Liked Successfully");
    }
  }

  const renderLikeButton = likedCourses.includes(course.id) ? (
    <FcLike fontSize="1.75rem" />
  ) : (
    <FcLikePlaceholder fontSize="1.75rem" />
  );

  const renderCourseDescription =
    course.description.length > 100
      ? course.description.substr(0, 100) + "..."
      : course.description;

  return (
    <div className='w-[300px] card bg-opacity-80 rounded-md overflow-hidden'>
      <div className='relative'>
        <img
          src={course.image.url}
          alt={course.title}
        />

        <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center'>
          <button onClick={clickHandler}>
            {renderLikeButton}
            <ToastContainer />
          </button>
        </div>
      </div>

      <div className='p-4'>
        <p className="text-white font-semibold text-lg leading-6">
          {course.title}
        </p>
        <p className='mt-2 text-white'>
          {renderCourseDescription}
        </p>
      </div>
    </div>
  );
}

export default Card;
