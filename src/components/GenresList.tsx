import useGenres from "../hooks/useGenres";

export default function GenresList() {
  const { data: genres } = useGenres();
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
}
