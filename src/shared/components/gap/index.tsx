import React from 'react';

interface Props {
  gap?: number;
}

const Gap: React.FC<Props> = ({gap = 15}) => {
  return <div style={{width: gap, height: gap}} />;
};

export default Gap;
