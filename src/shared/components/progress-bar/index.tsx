import React from 'react';

import {Container, Filler, Label} from './styles';

interface ProgressBarProps {
  bgColor: string;
  completed: number;
  showLabel?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  bgColor,
  completed,
  showLabel = false,
}) => {
  return (
    <Container>
      <Filler bgColor={bgColor} completed={completed}>
        <Label>{showLabel && `${completed}%`}</Label>
      </Filler>
    </Container>
  );
};

export default ProgressBar;
