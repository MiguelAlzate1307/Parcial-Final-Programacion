function PlayerRow({ player, OnChangeFav }) {
  const buttonClass = `p-2 rounded-md border border-yellow-400 hover:cursor-pointer hover:scale-105 transition duration-75 ${player.fav ? 'bg-yellow-400' : 'bg-none'}`;

  return (
    <tr className="text-center border-b border-gray-400">
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
        {player.name}
      </td>
      <td scope="col" className="px-4 py-2">
        {player.club}
      </td>
      <td scope="col" className="px-4 py-2">
        {player.position}
      </td>
      <td scope="col" className="px-4 py-2">
        {player.country}
      </td>
      <td scope="col" className="px-4 py-2">
        {player.age}
      </td>
      <td scope="col" className="px-4 py-2">
        {player.goals}
      </td>
      <td scope="col" className="px-4 py-2">
        {player.assists}
      </td>
      <td scope="col" className="px-4 py-2">
        {player.rating}
      </td>
    </tr>
  );
}

export default PlayerRow;
