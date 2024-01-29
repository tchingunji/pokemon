import {ActionReducerMapBuilder, createAsyncThunk} from '@reduxjs/toolkit';
import api from 'shared/services/api';
import decodeError from 'shared/util/decore-error';
import {PokemonState} from '..';
import {FilterQueryProps} from 'shared/util/encode-filters';

interface Props {
  limit?: number;
  filters: FilterQueryProps;
}

export const getPokemons = createAsyncThunk(
  'pokemon/get-pokemons',
  async ({limit = 10, filters}: Props, {rejectWithValue}) => {
    try {
      return await api({
        method: 'GET',
        url: 'pokemon/',
        params: {
          limit,
          ...filters,
        },
      });
    } catch (error) {
      return rejectWithValue(decodeError(error));
    }
  },
);

export const getPokemonCases = (
  builder: ActionReducerMapBuilder<PokemonState>,
) => {
  builder.addCase(getPokemons.fulfilled, (state, action) => {
    console.log(action.payload.data);
    state.pokemons = action.payload.data.results;
    state.limit = action.payload.data.results.length;
  });
  builder.addCase(getPokemons.rejected, (state) => {
    state.pokemons = [];
  });
};
