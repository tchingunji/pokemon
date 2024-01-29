import React from 'react';
import usePokemonDetails from './state';
import {Loader} from '@mantine/core';
import TextSection from 'shared/components/text-section';
import {
  Container,
  ContainerInfo,
  ContainerPokemon,
  ImagePokemon,
  Pokemon,
} from './styles';

const Detalhes: React.FC = () => {
  const {loading, rows, onRefresh, translate, pokemonDetails} =
    usePokemonDetails();

  if (loading) return <Loader />;
  return (
    <Container>
      <TextSection {...{rows, values: pokemonDetails!}} />

      <Pokemon>
        <ContainerPokemon>
          <ImagePokemon src={pokemonDetails?.sprites.front_default} />
        </ContainerPokemon>

        <ContainerPokemon>
          <ImagePokemon src={pokemonDetails?.sprites.back_default} />
        </ContainerPokemon>

        <ContainerPokemon>
          <ImagePokemon
            src={pokemonDetails?.sprites.other.showdown.front_default}
          />
        </ContainerPokemon>

        <ContainerPokemon>
          <ImagePokemon
            src={pokemonDetails?.sprites.other.showdown.back_default}
          />
        </ContainerPokemon>
      </Pokemon>
    </Container>
  );
};

export default Detalhes;
