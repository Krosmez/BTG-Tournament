import { useState } from "react";

const useRoundRobin = () => {
  const [rounds, setRounds] = useState([]);

  const generateRounds = (players) => {
    if (!players) {
      return alert("Please add players to generate rounds");
    }

    if (players.length % 2 !== 0) {
      players.push(null);
    }

    const numRounds = players.length - 1;
    const numMatchesPerRound = players.length / 2;
    const rounds = [];

    const matchExists = (matches, playerA, playerB) => {
      return matches.some(
        (match) =>
          (match.playerA === playerA && match.playerB === playerB) ||
          (match.playerA === playerB && match.playerB === playerA)
      );
    };

    for (let round = 0; round < numRounds; round++) {
      const matches = [];

      for (let match = 0; match < numMatchesPerRound; match++) {
        const playerA = players[match * 2];
        const playerB = players[(numRounds - match + round) % (numRounds + 1)];

        if (!matchExists(matches, playerA, playerB) && playerA !== playerB) {
          matches.push({ playerA, playerB });
        }
      }

      rounds.push(matches);
    }

    setRounds(rounds);
    return;
  };

  return {
    rounds,
    generateRounds,
  };
};

export default useRoundRobin;
