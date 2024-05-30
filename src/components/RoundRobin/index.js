import "./style.css";

import { useState } from "react";

import Button from "../Buttons/BaseButton";
import useRoundRobin from "../../hooks/useRoundRobin";
import useStorage from "../../hooks/useStorage";

const RoundRobin = () => {
  const { poolData } = useStorage();
  const { rounds, generateRounds } = useRoundRobin();

  return (
    <div>
      <Button
        text="Generate Rounds"
        onClick={() => {
          console.log(poolData);
          generateRounds(poolData?.players);
        }}
      />
      <div className="round-robin-table">
        {rounds.map((round, i) => (
          <div key={i} className="round">
            <h2>Round {i + 1}</h2>
            {round.map((match, j) => (
              <div key={j} className="match">
                {`${match.playerA} vs ${match.playerB}`}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoundRobin;
