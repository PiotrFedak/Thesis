import React from 'react';

const TeamHero = () => {
  return (
    <div name="Team hero" className="w-full mt-24">
      <div className="mx-auto max-w-[1240px] relative">
        <div className="px-4 py-12">
          <h2 className="pt-8 text-3xl text-center uppercase">Teams</h2>
          <h3 className="text-5xl font-bold text-center py-6">
            NBAVerse Team Page
          </h3>
          <p className="py-4 text-3xl text-center">
            Welcome to NBAVerse, your ultimate destination for all things NBA!
            Explore our Team Table below to discover detailed information about
            different NBA teams, including team name, logo, and statistics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-16 pt-12 sm:pt-20 px-4">
          <div className="rounded-xl shadow-2xl md:scale-100 scale-75 ver:transform hover:scale-110 transition-transform duration-300">
            <img
              className="w-full h-68 object-cover rounded-t-xl"
              src="LosAngelesLakers.png"
              alt="Los Angeles Lakers"
            />
            <div className="p-8">
              <h3 className="font-bold text-2xl">Los Angeles Lakers</h3>
              <p className="text-gray-600 text-xl mt-4">
                The Los Angeles Lakers, one of the most iconic NBA teams with a
                rich history of success.
              </p>
            </div>
          </div>

          <div className="rounded-xl md:scale-100 scale-75 shadow-2xl ver:transform hover:scale-110 transition-transform duration-300">
            <img
              className="w-full h-68 object-cover rounded-t-xl"
              src="ChicagoBulls.png"
              alt="Chicago Bulls"
            />
            <div className="p-8">
              <h3 className="font-bold text-2xl">Chicago Bulls</h3>
              <p className="text-gray-600 text-xl mt-4">
                The Chicago Bulls, home to basketball legend Michael Jordan and
                a legacy of greatness.
              </p>
            </div>
          </div>

          <div className="rounded-xl md:scale-100 scale-75 shadow-2xl ver:transform hover:scale-110 transition-transform duration-300'>">
            <img
              className="w-full h-68 object-cover rounded-t-xl"
              src="TorontoRaptors.png"
              alt="Toronto Raptors"
            />
            <div className="p-8">
              <h3 className="font-bold text-2xl">Toronto Raptors</h3>
              <p className="text-gray-600 text-xl mt-4">
                Known for their resilience and championship win in 2019.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamHero;
