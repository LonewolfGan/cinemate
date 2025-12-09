import { Link } from "react-router-dom";
import backupImage from "../assets/images/backup.png";

export const Card = ({ movie }) => {
  const { id, original_title, overview, poster_path } = movie;
  return (
    <div>
      <div className="flex flex-col bg-neutral-primary-soft  w-[390px] h-[780px] p-6 border border-default box-border rounded-base shadow-xs m-2  ">
        <Link to={`/movies/${id}`}>
          <img
            width={340}
            height={510}
            className="w-[340px] h-[510px] object-fill"
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/original${poster_path}`
                : backupImage
            }
            alt=""
          />
        </Link>
        <Link to={`/movies/${id}`}>
          <h5 className="mt-6 mb-2 text-2xl dark:text-white  font-semibold tracking-tight text-heading">
            {original_title}
          </h5>
        </Link>
        <p className="flex-1 mb-2 text-body text-gray-500 description">
          {overview}
        </p>
        <Link
          to={`/movies/${id}`}
          className="mt-auto w-fit inline-flex items-center text-body bg-blue-700 rounded-lg text-white box-border  hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none "
        >
          Read more
          <svg
            className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 12H5m14 0-4 4m4-4-4-4"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};
