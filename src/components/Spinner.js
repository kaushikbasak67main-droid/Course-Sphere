import "./Spinner.css";

function Spinner() {
  // A Loading Screen will be shown when the data is being fetched
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className='spinner'></div>
      <p className="text-white text-lg font-semibold">Loading...</p>
    </div>
  );
}

export default Spinner;
