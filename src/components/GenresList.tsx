import { HStack, Image, List, ListItem, Text, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenresListSkeleton from "./GenresListSkeleton";

export default function GenresList() {
  const { data: genres, isLoading, error } = useGenres();
  if (error) return null;

  return (
    <List>
      {isLoading && <GenresListSkeleton />}
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY="6px">
          <HStack>
            <Image boxSize="32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
            <Text>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}
