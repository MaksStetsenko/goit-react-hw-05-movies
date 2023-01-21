import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ActorsList from 'components/ActorsList/ActorsList';

import { movieAPI } from 'utils/apiServices';
import { renderMashineStatus } from 'utils/options';

const Api = new movieAPI();

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [status, setStatus] = useState(renderMashineStatus.IDLE);

  useEffect(() => {
    setStatus(renderMashineStatus.IDLE);

    Api.getActors(movieId).then(actors => {
      if (actors.length === 0) {
        setStatus(renderMashineStatus.EMPTY);
        return;
      }
      setStatus(renderMashineStatus.SUCCESS);
      setActors(actors);
    });
  }, [movieId]);

  if (status === renderMashineStatus.IDLE) return;

  if (status === renderMashineStatus.EMPTY) {
    return <div>We don`t know who starred in this movie.</div>;
  }

  if (status === renderMashineStatus.SUCCESS) {
    return <ActorsList actors={actors} />;
  }
};

export default Cast;
