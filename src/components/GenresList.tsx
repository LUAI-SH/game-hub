import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

export default function GenresList() {
  const { data: genres } = useGenres();
  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY='6px'>
          <HStack>
            <Image boxSize="32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
            <Text>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}
