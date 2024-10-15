import React, { useState } from 'react';
import teams from './teamData';
import { Link } from 'react-router-dom';

const TeamHero = () => {
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);

  const nextTeam = () => {
    setCurrentTeamIndex((prevIndex) => (prevIndex + 1) % teams.length);
  };

  const prevTeam = () => {
    setCurrentTeamIndex(
      (prevIndex) => (prevIndex - 1 + teams.length) % teams.length
    );
  };

  const { name, image, description, history } = teams[currentTeamIndex];

  return (
    <div
      name="Team hero"
      className="py-8 w-full min-h-screen flex flex-col items-center"
    >
      <h2 className="text-3xl text-center uppercase">Teams</h2>
      <h3 className="text-6xl font-bold text-center py-6">
        <span className="text-custom-red">NBAVerse</span> Team Page
      </h3>
      <p className="text-3xl text-center mb-12">
        Here you can search for NBA teams you are looking for and learn more
        about them.
      </p>

      <div className="gap-20 flex flex-col md:flex-row items-center justify-center px-4">
        <div className="card w-96 flex flex-col items-center shadow-lg rounded-lg">
          <figure>
            <img
              src={image}
              alt={`${name} logo`}
              className="object-cover w-full h-48 rounded-t-lg"
            />
          </figure>
          <div className="card-body flex flex-col items-center justify-between">
            <div className="flex justify-center w-full">
              <h2 className="card-title text-center">{name}</h2>
            </div>
            <p className="max-h-24 flex-grow text-center overflow-hidden text-ellipsis">
              {description}
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={prevTeam}
                className="btn bg-custom-blue text-white"
              >
                Previous
              </button>
              <div className="indicator">
                <span className="indicator-item badge bg-custom-red animate-bounce"></span>
                <Link to="/Teams" className="btn bg-black text-white">
                  Go to Teams Page
                </Link>
              </div>
              <button
                onClick={nextTeam}
                className="btn bg-custom-blue text-white"
              >
                Next
              </button>
            </div>
          </div>
        </div>

        <ul className="timeline timeline-vertical p-4 rounded-lg shadow-lg max-w-xs">
          {history.map((item, index) => (
            <li key={index} className="flex mb-4 items-center">
              <div className="timeline-start w-12 text-center text-xl font-bold">
                {item.year}
              </div>
              <div className="timeline-middle mx-4">-</div>
              <div className="timeline-end timeline-box text-white bg-custom-blue">
                {item.event}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeamHero;
