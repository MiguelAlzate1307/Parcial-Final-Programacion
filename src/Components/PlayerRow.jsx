function PlayerRow({ player, OnChangeFav, OnSelectPlayer, rowColor }) {
  const buttonClass = `p-2 rounded-md border border-yellow-400 hover:cursor-pointer hover:scale-105 transition duration-75 ${player.fav ? 'bg-yellow-400' : 'bg-none'}`;

  return (
    <tr className={`text-center border-b border-gray-400 ${rowColor}`}>
      <td scope="col" className="px-4 py-2">
        {player.fav ? (
          <button
            className={buttonClass}
            onClick={() =>
              OnChangeFav((prev) => {
                player.fav = false;
                return prev - 1;
              })
            }
          >
            <svg className="w-4 h-4">
              <use xlinkHref="/icons.svg#star-filled" />
            </svg>
          </button>
        ) : (
          <button
            className={buttonClass}
            onClick={() =>
              OnChangeFav((prev) => {
                player.fav = true;
                return prev + 1;
              })
            }
          >
            <svg className="text-yellow-400 w-4 h-4">
              <use xlinkHref="/icons.svg#star" />
            </svg>
          </button>
        )}
      </td>
      <td scope="col" className="px-4 py-2">
        <button
          className="hover:cursor-pointer"
          onClick={() => OnSelectPlayer(player)}
        >
          {player.name}
        </button>
      </td>
      <td scope="col" className="px-4 py-2">
        <button
          className="hover:cursor-pointer"
          onClick={() => OnSelectPlayer(player)}
        >
          {player.club}
        </button>
      </td>
      <td scope="col" className="px-4 py-2">
        <button
          className="hover:cursor-pointer"
          onClick={() => OnSelectPlayer(player)}
        >
          {player.position}
        </button>
      </td>
      <td scope="col" className="px-4 py-2">
        <button
          className="hover:cursor-pointer"
          onClick={() => OnSelectPlayer(player)}
        >
          {player.country}
        </button>
      </td>
      <td scope="col" className="px-4 py-2">
        <button
          className="hover:cursor-pointer"
          onClick={() => OnSelectPlayer(player)}
        >
          {player.age}
        </button>
      </td>
      <td scope="col" className="px-4 py-2">
        <button
          className="hover:cursor-pointer"
          onClick={() => OnSelectPlayer(player)}
        >
          {player.goals}
        </button>
      </td>
      <td scope="col" className="px-4 py-2">
        <button
          className="hover:cursor-pointer"
          onClick={() => OnSelectPlayer(player)}
        >
          {player.assists}
        </button>
      </td>
      <td scope="col" className="px-4 py-2">
        <button
          className="hover:cursor-pointer"
          onClick={() => OnSelectPlayer(player)}
        >
          {player.rating}
        </button>
      </td>
    </tr>
  );
}

export default PlayerRow;
