import React from 'react';
import { ReactComponent as Weather } from '../../images/02d.svg';
import ForeCastCard from './ForeCastCard';

const InitialSearchCard = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-center">
        <Weather width="300px" height="300px" />
        <span>
          <h1 className="font-medium text-6xl text-sky-800">
            Weather Forecast
          </h1>
        </span>
      </div>
      <ForeCastCard></ForeCastCard>
    </>
  );
};

export default InitialSearchCard;
