import React from "react";
import { arrayOf, number, shape, string } from "prop-types";
import "./styles.css";

const propTypes = {
  list: arrayOf(
    shape({
      id: number,
      name: string,
    })
  ).isRequired,
};

const Player = ({ status, name, imageWait, imageActive, action, list }) => {
  return (
    <div className="player">
      <h3 className="player__name">{name}</h3>
      <img
        className="player__image"
        src={status === "active" ? imageActive : imageWait}
        alt={name}
      />
      <button className="player__action" onClick={action}>
        PUSH ME
      </button>
    </div>
  );
};

Player.propTypes = propTypes;

export default Player;
