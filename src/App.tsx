import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import GameCard from "./components/GameCard";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"}>
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"}>Aside</GridItem>
      </Show>
      <GridItem area={"main"}>
        <h1>Games</h1>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
