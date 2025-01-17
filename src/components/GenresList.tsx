import { HStack, Image, List, ListItem, Text, Spinner, Button, Heading } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenresListSkeleton from "./GenresListSkeleton";

interface Props {
  selectedGenre: Genre | null;
  onSelectedGenre: (genre: Genre) => void;
}

export default function GenresList({ selectedGenre, onSelectedGenre }: Props) {
  const { data: genres, isLoading, error } = useGenres();
  if (error) return null;

  return (
    <>
      <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
      <List>
        {isLoading && <GenresListSkeleton />}
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY="6px">
            <HStack>
              <Button
                whiteSpace="normal"
                textAlign="left"
                variant="link"
                onClick={() => onSelectedGenre(genre)}
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              >
                <Image
                  objectFit="cover"
                  boxSize="32px"
                  borderRadius={8}
                  src={getCroppedImageUrl(genre.image_background)}
                />
                <Text paddingLeft={2}>{genre.name}</Text>
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}
