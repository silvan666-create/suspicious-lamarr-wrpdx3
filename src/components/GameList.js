import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function GameList() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    // Тимчасові дані для тестування без бекенду
    const testGames = [
      {
        _id: "1",
        title: "Монополія",
        description: "Економічна гра стратегія",
        players: 4,
        age: "8+",
        difficulty: "Середня",
      },
      {
        _id: "2",
        title: "Шахи",
        description: "Класична гра для розуму",
        players: 2,
        age: "6+",
        difficulty: "Висока",
      },
    ];
    setGames(testGames);
  }, []);

  return (
    <div>
      <h1>Каталог настільних ігор</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {games.map((game) => (
          <li key={game._id} style={{ margin: "10px 0" }}>
            <Link
              to={`/game/${game._id}`}
              style={{
                textDecoration: "none",
                color: "blue",
                fontSize: "18px",
              }}
            >
              {game.title}
            </Link>
            <p style={{ margin: "5px 0", color: "gray" }}>{game.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GameList;
