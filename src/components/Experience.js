import { motion } from "framer-motion";

const ExperienceItem = ({ title, description, date, company, side }) => {
  console.log("title", title);

  const isLeft = side === "left";

  return (
    <div className="flex justify-between h-48">
      {/* Conditional Rendering for Left or Right */}
      {isLeft ? (
        <div className="w-1/3">
          {/* JOB TITLE */}
          <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
            {title}
          </div>
          {/* JOB DESC */}
          <div className="p-3 text-sm italic">{description}</div>
          {/* JOB DATE */}
          <div className="p-3 text-red-400 text-sm font-semibold">{date}</div>
          {/* JOB COMPANY */}
          <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
            {company}
          </div>
        </div>
      ) : (
        <div className="w-1/3"></div>
      )}

      {/* CENTER LINE */}
      <div className="w-1/6 flex justify-center">
        <div className="w-1 h-full bg-gray-600 rounded relative">
          <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
        </div>
      </div>

      {/* Conditional Rendering for Right */}
      {!isLeft ? (
        <div className="w-1/3">
          {/* JOB TITLE */}
          <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
            {title}
          </div>
          {/* JOB DESC */}
          <div className="p-3 text-sm italic">{description}</div>
          {/* JOB DATE */}
          <div className="p-3 text-red-400 text-sm font-semibold">{date}</div>
          {/* JOB COMPANY */}
          <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
            {company}
          </div>
        </div>
      ) : (
        <div className="w-1/3"></div>
      )}
    </div>
  );
};

export default ExperienceItem;
