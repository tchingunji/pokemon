import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

export const Pokemon = styled.div`
display: flex;
color: black;
gap: 15px;
flex-wrap: wrap;
`;
export const ImagePokemon = styled.img`
  object-fit: cover;
  width: 135px;
  height: 140px;
`;

export const ContainerPokemon = styled.div`
  width: 150px;
  height: 150px;
  
  
  padding: 5px;
  background-color: #f1f0f5;
  margin-left: 18px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const Placeholder = styled.p`
  font-size: 15px;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 4px;
`;
export const ContainerInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
