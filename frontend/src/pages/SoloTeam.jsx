import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import teamHistories from '../data/teamHistories';
import Breadcrumbs from '../components/common/Breadcrumbs';
import { useTranslation } from 'react-i18next';

const SoloTeam = () => {
  const { t } = useTranslation();
  const { teamId } = useParams();
  const [team, setTeam] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchTeam = async () => {
      try {
        const response = await axios.get(
          `https://api.balldontlie.io/v1/teams/${teamId}`,
          {
            headers: {
              Authorization: process.env.REACT_APP_NBA_API_KEY,
            },
          }
        );

        if (isMounted) {
          setTeam(response.data.data);
        }
      } catch (error) {
        if (isMounted) {
          setError('Error loading team data');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchTeam();

    return () => {
      isMounted = false;
    };
  }, [teamId]);

  if (loading) {
    return <div>{t('loading')}</div>;
  }

  if (error) {
    return <div>{t('error')}</div>;
  }

  if (!team) {
    return <div>{t('noTeamData')}</div>;
  }

  const logoFileName = `/${team.name.replace(/ /g, '')}.png`;

  const teamHistory = teamHistories[team.name] || t('noHistory');

  return (
    <div className="text-custom-black min-h-screen dark:text-white dark:bg-custom-black bg-custom-white z-10">
      <div className="container mx-auto py-8 relative">
        <Navbar />
        <Breadcrumbs />
        <h1 className="text-3xl font-bold text-center mb-8 mt-12 text-custom-blue dark:text-custom-red">
          {team.full_name}
        </h1>
        <p className="text-center text-xl mb-6 text-gray-600 dark:text-gray-300">
          {t('teamPageDescriptionSolo')}{' '}
        </p>
        <img
          src={!imageError ? logoFileName : '/default.png'}
          alt={`${team.full_name} ${t('team')}`}
          className="h-36 mx-auto mb-4"
          onError={() => setImageError(true)}
        />
        <div className="text-center mb-8">
          <p className="text-lg">
            {t('city')}: {team.city}
          </p>
          <p className="text-lg">
            {t('conference')}: {team.conference}
          </p>
          <p className="text-lg">
            {t('division')}: {team.division}
          </p>
        </div>

        <div className="card shadow-lg bg-slate-200 dark:bg-black/60 p-6 mx-4">
          <h2 className="text-2xl font-bold mb-4 text-custom-blue dark:text-custom-red text-center">
            {t('teamHistory')}
          </h2>
          <div className="prose lg:prose-xl dark:prose-dark text-justify">
            <p>{teamHistory}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoloTeam;
