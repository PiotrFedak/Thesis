import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const teams = [
  {
    name: 'Los Angeles Lakers',
    image: 'LosAngelesLakers.png',
    description:
      'The Los Angeles Lakers, one of the most iconic NBA teams with a rich history of success.',
    history: [
      { year: '1980', event: 'Won their 7th NBA Championship' },
      { year: '1984', event: 'Reached the NBA Finals' },
      { year: '2000', event: 'Started the three-peat era' },
      { year: '2010', event: 'Won their 16th NBA Championship' },
      { year: '2020', event: 'Won the NBA Championship in the bubble' },
    ],
  },
  {
    name: 'Chicago Bulls',
    image: 'ChicagoBulls.png',
    description:
      'The Chicago Bulls, home to basketball legend Michael Jordan and a legacy of greatness.',
    history: [
      { year: '1991', event: 'Won their first NBA Championship' },
      { year: '1993', event: 'Completed the first three-peat' },
      { year: '1996', event: '72-win season and NBA title' },
      { year: '1998', event: 'Completed the second three-peat' },
      { year: '2010', event: 'Reached the Eastern Conference Finals' },
    ],
  },
  {
    name: 'Toronto Raptors',
    image: 'TorontoRaptors.png',
    description:
      'The Canadian professional basketball team Known for their resilience and championship win in 2019.',
    history: [
      { year: '2000', event: 'First playoff appearance' },
      { year: '2016', event: 'Eastern Conference Finals' },
      { year: '2018', event: 'Top seed in the Eastern Conference' },
      { year: '2019', event: 'Won their first NBA Championship' },
      { year: '2020', event: 'Reached the second round of playoffs' },
    ],
  },
];

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
      className="w-full min-h-screen flex flex-col items-center py-8"
    >
      <h2 className="text-3xl text-center uppercase">Teams</h2>
      <h3 className="text-5xl font-bold text-center py-6">
        <span className="text-custom-red">NBAVerse</span> Team Page
      </h3>
      <p className="text-3xl text-center mb-12">
        Here you can serach for NBA team you are looking for and learn more
        about them.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-20 border-b">
        <div className="card w-96 flex flex-col items-center shadow-lg rounded-lg">
          <figure>
            <img
              src={image}
              alt={`${name} logo`}
              className="object-cover w-full h-48 rounded-t-lg"
            />
          </figure>
          <div className="card-body h-64 flex flex-col justify-between">
            <h2 className="card-title">{name}</h2>
            <p className="flex-grow overflow-hidden text-ellipsis max-h-24">
              {description}
            </p>
            <div className="card-actions justify-between w-full mt-4">
              <button onClick={prevTeam} className="btn btn-secondary">
                Previous
              </button>
              <button onClick={nextTeam} className="btn btn-primary">
                Next
              </button>
            </div>
          </div>
        </div>

        <ul className="timeline timeline-vertical p-4 rounded-lg shadow-lg max-w-xs">
          {history.map((item, index) => (
            <li key={index} className="flex mb-4">
              <div className="timeline-start w-12 text-center text-xl font-bold">
                {item.year}
              </div>
              <div className="timeline-middle mx-4">
                <FaPlus />
              </div>
              <div className="timeline-end timeline-box">{item.event}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeamHero;
