import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIstEditing] = useState(false);

  function handleEditClick() {
    setIstEditing((editing) => !editing);
  }

  let playerName = <span className="player-name">{name}</span>;
  let btnText = "Edit";

  if (isEditing) {
    playerName = <input type="text" required value={name} />;
    btnText = "Save";
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnText}</button>
    </li>
  );
}
