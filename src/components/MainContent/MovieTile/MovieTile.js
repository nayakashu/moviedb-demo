import React from 'react';
import './MovieTile.scss';

export default function MovieTile() {
  return (
    <div className="movie-tile">
      <span className="popularity">
        89%
        <span className="bottom-border" />
      </span>
      <img
        src="https://image.tmdb.org/t/p/w200/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg"
        alt="Title"
      />
      <div className="movie-details">
        <h4>Fight club</h4>
        <div className="release-date">14 February 2019</div>
        <div className="description">
          A ticking-time-bomb insomniac and a slippery soap salesman channel
          primal male aggression into a shocking new form of therapy.
        </div>
      </div>
    </div>
  );
}
