import colors from 'shared/assets/colors';
import styled from 'styled-components';

interface ContainerProps {
  hideDrawer: boolean;
  floating: boolean;
}

interface LanguageProps {
  active?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: grid;
  grid-template-columns: ${(props) => (props.hideDrawer ? '1fr' : '271px 1fr')};
  width: 100%;
  height: 100vh;
  overflow: auto;

  @media (max-width: 975px) {
    grid-template-columns: 1fr;
  }

  ${(props) =>
    props.floating &&
    `  
    top: 0;
    position: fixed;
    z-index: 1000;
  `}
`;

export const SideBar = styled.aside`
  @media (max-width: 975px) {
    display: none;
  }
  background-color: ${colors.white};
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: sticky;
  top: 0;
`;

export const LogoBox = styled.div`
  height: 65px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 0.5px solid ${colors.softBorder};
  background-color: ${colors.white};
`;

export const Logo = styled.img`
  width: 150px;
  object-fit: contain;
`;

export const NavigationOptions = styled.div`
  width: 100%;
  flex: 1;
`;

export const Body = styled.div`
  max-width: 100vw;
  display: grid;
  grid-template-rows: 64px 1fr;
  background-color: #f1f0f5;
  box-shadow: inset rgba(99, 99, 99, 0.2) 2px 2px 8px 0px;
`;

export const Header = styled.header`
  width: 100%;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border-left: 0.5px solid ${colors.softBorder};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  position: sticky;
  top: 0;
  z-index: 200;

  @media (max-width: 975px) {
    width: 100vw;
    padding: 0 10px;
  }
`;

export const Start = styled.div`
  display: flex;
  align-items: center;
`;

export const End = styled.div`
  display: flex;
  align-items: center;
`;

export const Translation = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.darkGray};
  gap: 5px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: 10px;
  border-radius: 5px;

  svg {
    font-size: 18px;
  }

  &:hover {
    background-color: ${colors.primaryLight};
  }
`;

export const Languages = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media (max-width: 975px) {
    grid-template-columns: 1fr;
  }
`;

export const Language = styled.div<LanguageProps>`
  display: flex;
  align-items: center;
  gap: 15px;
  box-shadow: 0px 1px 16px rgb(0 0 0 / 10%) !important;
  padding: 15px;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid ${(props) => (props.active ? colors.primary : colors.white)};
  transition: all 0.2s ease-in-out;

  &:hover {
    border: 1px solid ${colors.gray};
  }

  img {
    width: 25px;
    object-fit: contain;
    border-radius: 3px;
  }
`;

export const Content = styled.div`
  overflow-x: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px 30px;

  @media (max-width: 975px) {
    width: 100vw;
    padding: 20px 15px;
  }
`;

export const Card = styled.div`
  flex: 1;
  border-radius: 5px;
`;
