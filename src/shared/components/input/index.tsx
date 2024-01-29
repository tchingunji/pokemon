import React, {InputHTMLAttributes} from 'react';

import {Container, Label, Row, TextInput, IconBox} from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  Icon?: React.FC;
}

const Input: React.FC<Props> = ({label, Icon, ...props}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Row>
        {Icon && (
          <IconBox>
            <Icon />
          </IconBox>
        )}
        <TextInput {...props} icon={!!Icon} />
      </Row>
    </Container>
  );
};

export default Input;
