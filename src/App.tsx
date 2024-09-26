import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatform";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}


function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav   nav"
            "aside main"`,
      }}
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem pl="2" area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem pl="2" bg="pink.300" area={"aside"} paddingX={5}>
          <GenresList selectedGenre={gameQuery.genre} onSelectedGenre={(genre) => setGameQuery({...gameQuery,  genre})} />
        </GridItem>
      </Show>
      <GridItem pl="2" bg="green.300" area={"main"}>
        <PlatformSelector selectedPlatform={gameQuery.platform}  onSelectedPlatform={(platform) => setGameQuery({...gameQuery,  platform})} />

        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
