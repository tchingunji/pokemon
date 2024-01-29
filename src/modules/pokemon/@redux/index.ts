import {createSlice} from '@reduxjs/toolkit';
import {cases} from './async-thunks';
import * as reducers from './reducers';

export interface AuthState {
  token?: string;
  limit: number;
}

export interface ResultProps {
  name: string;
  url: string;
  _id: string;
}
interface FlavorsProps {
  potency: number;
  flavor: ResultProps;
}
export interface PokemonProps {
  count: number;
  next: string;
  result: ResultProps[];
}

export interface SlotProps {
  slot: number;
  type: ResultProps[];
}
export interface AbilitiesProps {
  slot: number;
  ability: ResultProps[];
  is_hidden: boolean;
}
export interface PokemonDetailsProps {
  id: number;
  name: string;
  growth_time: number;
  max_harvest: number;
  natural_gift_power: number;
  size: number;
  smoothness: number;
  soil_dryness: number;
  firmness: ResultProps;
  flavors: FlavorsProps[];
  item: ResultProps;
  natural_gift_type: ResultProps;
  types: SlotProps[];
  weight: number;
  abilities: AbilitiesProps[];
  base_experience: number;
  sprites: {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
    other: {
      showdown: {
        back_default: string;
        back_shiny: string;
        front_default: string;
        front_shiny: string;
      };
    };
  };
}
export interface PokemonState {
  pokemons: PokemonProps[];
  pokemonDetails?: PokemonDetailsProps;
  limit: number;
}

export const initialState: PokemonState = {
  limit: 0,
  pokemons: [],
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers,
  extraReducers: (builder) => cases.forEach((thunkCase) => thunkCase(builder)),
});

export const {clearState} = AuthSlice.actions;

export default AuthSlice.reducer;
