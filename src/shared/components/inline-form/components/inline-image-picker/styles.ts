import styled from 'styled-components';
import colors from 'shared/assets/colors';
import {Modal} from '@mantine/core';

interface ContainerProps {
  size: 'full' | 'half';
  disabled?: boolean;
}

interface Props {
  opened: boolean;
  disabled?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: ${(props) => (props.size === 'full' ? 100 : 50)}%;
  padding: 10px 15px;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 10px;
  cursor: ${(props) => props.disabled && 'not-allowed'};

  .mantine-Popover-root {
    width: 100%;
    height: 100%;
  }
`;

export const Label = styled.label`
  min-width: 200px;
  color: ${colors.darkGray};
  font-weight: 500;

  @media (max-width: 975px) {
    min-width: fit-content;
  }
`;

export const Input = styled.div<Props>`
  border: none;
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  outline: none;
  border: 3px solid
    ${(props) => (props.opened ? colors.softBorder : colors.white)};
  color: ${(props) => props.disabled && '#ccc'};
`;

export const PreviewImage = styled.img`
  max-height: 80vh;
  max-width: 80vw;
  border-radius: 5px;
`;

export const ImageHolder = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const Thumbnail = styled.img`
  height: 38px;
  border-radius: 5px;
  cursor: pointer;
`;

export const DropzoneModal = styled(Modal).attrs({
  centered: true,
  size: 'lg',
  overlayBlur: 3,
  withCloseButton: false,
})``;

export const PreviewModal = styled(Modal).attrs({
  size: 'auto',
  centered: true,
  overlayBlur: 3,
  withCloseButton: false,
  styles: {
    modal: {
      display: 'flex',
      background: 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: 'none',
    },
    body: {
      padding: 0,
    },
  },
})``;
