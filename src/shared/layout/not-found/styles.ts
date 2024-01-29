import colors from 'shared/assets/colors';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background: #00e7dc;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

export const Title = styled.h1`
  font-size: 50px;
  color: ${colors.white};
  font-weight: 600;
  text-align: center;
  position: absolute;
  width: 100%;
  top: calc(-100vh + 900px);

  background-color: ${colors.gradient};
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: rgba(255, 255, 255, 0.2) 0px 3px 3px;
`;
