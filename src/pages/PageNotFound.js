import PNFImage from "../assets/images/pagenotfound.png";
import { Link } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

export const PageNotFound = () => {
  const title = "Page Not Found";
  useTitle({ title });

  return (
    <main className="dark:bg-gray-800">
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-extrabold my-10 dark:text-white">
            404, Ooops!
          </p>
          <div className="max-w-xl">
            <img className="rounded" src={PNFImage} alt="404 Page NOt Found" />
          </div>
        </div>
        <div className="flex justify-center">
          <Link to="/">
            <button className="rounded-lg w-64 bg-gray-900 text-white p-3">
              Back to Cinemate
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};
