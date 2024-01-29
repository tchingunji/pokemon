import {ActionReducerMapBuilder, createAsyncThunk} from '@reduxjs/toolkit';
import {PokemonState} from '..';
import api from 'shared/services/api';
import decodeError from 'shared/util/decore-error';

export const getPokemonDetails = createAsyncThunk(
  'pokemon/get-pokemon-details',
  async (_id: string, {rejectWithValue}) => {
    try {
      return await api({
        method: 'GET',
        url: `pokemon/${_id}/`,
      });
    } catch (error) {
      return rejectWithValue(decodeError(error));
    }
  },
);

export const getPokemonDetailsCases = (
  builder: ActionReducerMapBuilder<PokemonState>,
) => {
  builder.addCase(getPokemonDetails.pending, (state) => {
    state.pokemonDetails = undefined;
  });
  builder.addCase(getPokemonDetails.fulfilled, (state, action) => {
    console.log(action.payload.data);
    state.pokemonDetails = action.payload.data;
  });
};
