import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function GameDetail() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

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
        reviews: [
          { username: "Андрій", comment: "Чудова гра для сім'ї!" },
          {
            username: "Олена",
            comment: "Грали цілою родиною - дуже сподобалося",
          },
        ],
      },
      {
        _id: "2",
        title: "Шахи",
        description: "Класична гра для розуму",
        players: 2,
        age: "6+",
        difficulty: "Висока",
        reviews: [
          { username: "Максим", comment: "Найкраща гра для розвитку логіки" },
        ],
      },
    ];

    const foundGame = testGames.find((g) => g._id === id);
    setGame(foundGame);
  }, [id]);

  const submitReview = () => {
    if (username && comment && game) {
      const updatedGame = {
        ...game,
        reviews: [...game.reviews, { username, comment }],
      };
      setGame(updatedGame);
      setUsername("");
      setComment("");
      alert("Відгук додано!");
    } else {
      alert("Будь ласка, заповніть всі поля");
    }
  };

  if (!game) return <div style={{ padding: "20px" }}>Гру не знайдено</div>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{game.title}</h1>
      <p>
        <strong>Опис:</strong> {game.description}
      </p>
      <p>
        <strong>Гравців:</strong> {game.players}
      </p>
      <p>
        <strong>Вік:</strong> {game.age}
      </p>
      <p>
        <strong>Складність:</strong> {game.difficulty}
      </p>

      <h3>Відгуки</h3>
      {game.reviews.length > 0 ? (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {game.reviews.map((r, i) => (
            <li
              key={i}
              style={{
                margin: "10px 0",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px",
              }}
            >
              <strong>{r.username}:</strong> {r.comment}
            </li>
          ))}
        </ul>
      ) : (
        <p>Ще немає відгуків. Будьте першим!</p>
      )}

      <div style={{ marginTop: "20px" }}>
        <h4>Додати відгук</h4>
        <div style={{ marginBottom: "10px" }}>
          <input
            placeholder="Ваше ім'я"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ padding: "8px", width: "200px", marginRight: "10px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <input
            placeholder="Коментар"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            style={{ padding: "8px", width: "300px" }}
          />
        </div>
        <button
          onClick={submitReview}
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Відправити
        </button>
      </div>
    </div>
  );
}

export default GameDetail;
