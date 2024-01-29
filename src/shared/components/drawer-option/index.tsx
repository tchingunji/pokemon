import React, {useState} from 'react';
import ReactCollapse from '@kunukn/react-collapse';

import {BsChevronDown} from 'react-icons/bs';
import {RouteProps} from 'config/routes';

import {Container, Button, LinkButton, Label, Option} from './styles';
import {useLocation} from 'react-router-dom';
import usei18next from 'shared/hooks/use-i18next';

const DrawerOption: React.FC<RouteProps> = ({name, icon, path, routes}) => {
  const {pathname} = useLocation();
  const [opened, setOpen] = useState(pathname.includes(path));
  const {translate} = usei18next();
  const [module, resource] = pathname.split('/').filter((pathname) => pathname);

  return (
    <Container>
      {routes && (
        <Button onClick={() => setOpen(!opened)} {...{opened}}>
          <Label>
            {icon}
            {translate(`drawer:drawerOption.${name}` as any)}
          </Label>
          <BsChevronDown />
        </Button>
      )}
      {!routes && (
        <LinkButton to={`/${path}`}>
          <Label>
            {icon}
            {translate(`drawer:drawerOption.${name}` as any)}
          </Label>
        </LinkButton>
      )}
      {routes && (
        <ReactCollapse
          isOpen={opened}
          transition="height 280ms cubic-bezier(0.4, 0, 0.2, 1)">
          {routes?.map((route, index) => (
            <Option
              to={`/${path}/${route.path}`}
              key={index}
              active={path === module && route.path === resource ? 1 : 0}>
              {translate(`drawer:drawerOption.${route.name}` as any)}
            </Option>
          ))}
        </ReactCollapse>
      )}
    </Container>
  );
};

export default DrawerOption;
