import { GameQuery } from "../App";
import { Platform } from "./UsePlatforms";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[]
    metacritic: number;
  }

const useGames = (gameQuery: GameQuery) => {
    return useData<Game>('games', { 
        params: { 
            genres: gameQuery.genre?.id, 
            platforms: gameQuery.platform?.id,
            ordering: gameQuery.order,
            search: gameQuery.searchText,
        }
    }, [gameQuery]);
}

export default useGames;