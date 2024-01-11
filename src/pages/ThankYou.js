import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-20">
        <img
          src="https://www.shutterstock.com/image-vector/checkmark-green-vector-isolated-icon-600nw-1504889324.jpg"
          className="h-40 w-auto"
        />
        <h1 className="font-bold text-2xl text-black p-2">
          Thank you for your order!
        </h1>
        <p className="font-sm text-gray-400">
          Your food is on its way. Relax and get ready for a delicious meal.
        </p>
        <Link to="/">
          <button className="px-8 py-3 bg-orange-500 text-white rounded-lg mt-10 mb-72">
            Back to Home
          </button>
        </Link>
      </div>
    </>
  );
};
export default ThankYou;
