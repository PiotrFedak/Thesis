import React from 'react';
import { Link } from 'react-router-dom';

const PlayerHero = () => {
  return (
    <div className="w-full flex flex-col justify-between items-center py-16 px-8">
      <div className="text-right w-full max-w-[1240px]">
        <h1 className="text-6xl font-bold mb-4">
          <span className="text-custom-red">NBAVerse</span> Players Page
        </h1>
        <p className="text-2xl max-w-md ml-auto mt-12">
          Use the Players Search Bar to find detailed profiles of your favorite
          NBA players.
        </p>
      </div>

      <div className="mb-24 mt-12 grid grid-cols-1 md:grid-cols-3 gap-16 w-full max-w-[1240px] mx-auto">
        <div className="card w-96 shadow-xl flex flex-col justify-between mx-auto">
          <div className="card-body">
            <h2 className="card-title">Luka Dončić</h2>
            <p>
              Star player for the Dallas Mavericks known for his playmaking
              skills.
            </p>
            <div className="card-actions justify-end">
              <Link to="/Players" className="btn btn-primary">
                See More
              </Link>
            </div>
          </div>
          <figure>
            <img src="/Luka Doncic.webp" alt="Luka Dončić" className="w-full" />
          </figure>
        </div>

        <div className="justify-between card w-96 shadow-xl flex flex-col mx-auto">
          <div className="card-body">
            <h2 className="card-title">Kevin Durant</h2>
            <p>
              NBA champion and scoring legend currently with the Phoenix Suns.
            </p>
            <div className="justify-end card-actions">
              <Link to="/Players" className="btn btn-primary">
                See More
              </Link>
            </div>
          </div>
          <figure>
            <img
              src="/kevin durant.webp"
              alt="Kevin Durant"
              className="w-full"
            />
          </figure>
        </div>

        <div className="card justify-between w-96 shadow-xl flex flex-col mx-auto">
          <div className="card-body">
            <h2 className="card-title">Jaylen Brown</h2>
            <p>
              Boston Celtics star known for his athleticism and two-way play.
            </p>
            <div className="card-actions justify-end">
              <Link to="/Players" className="btn btn-primary">
                See More
              </Link>
            </div>
          </div>
          <figure>
            <img
              src="/Jaylen Brown.webp"
              alt="Jaylen Brown"
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default PlayerHero;
