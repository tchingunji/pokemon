import React, {useEffect, useState} from 'react';
import {Avatar, Menu, Text, Drawer} from '@mantine/core';
import {FaGlobeAmericas} from 'react-icons/fa';
import {FiUser, FiLogOut, FiClipboard} from 'react-icons/fi';
import {RiMenu2Line} from 'react-icons/ri';

import logo from 'shared/assets/images/logo.png';
import brasil from 'shared/assets/images/brasil.png';
import usa from 'shared/assets/images/usa.png';

import {
  Container,
  SideBar,
  Navigation,
  LogoBox,
  Logo,
  NavigationOptions,
  Body,
  Header,
  Start,
  End,
  Translation,
  Languages,
  Language,
  Content,
  Card,
} from './styles';
import Modal from 'shared/components/modal';
import colors from 'shared/assets/colors';
import routes from 'config/routes';
import DrawerOption from 'shared/components/drawer-option';
import usei18next from 'shared/hooks/use-i18next';
import i18n from 'config/i18next';
import {useLocation} from 'react-router-dom';
import HoverButton from 'shared/components/hover-button';
import {useAppDispatch} from 'shared/hooks/use-redux';
import {clearState} from 'modules/pokemon/@redux';
import {useNavigate} from 'react-router-dom';

interface Props {
  children?: React.ReactNode;
  hideDrawer?: boolean;
  floating?: boolean;
}

const DashboardLayout: React.FC<Props> = ({
  children,
  hideDrawer = false,
  floating = false,
}) => {
  const navigate = useNavigate();
  const [opened, setOpened] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  const {pathname} = useLocation();
  const {translate} = usei18next();
  const dispatch = useAppDispatch();

  const handleChangeLanguage = (language: string) => {
    setOpened(false);
  };

  useEffect(() => {
    setShowDrawer(false);
  }, [pathname]);

  const getNavigation = () => (
    <Navigation>
      <LogoBox>
        <Logo src={logo} />
      </LogoBox>
      <NavigationOptions>
        {routes.map((route, index) => (
          <DrawerOption {...route} key={index} />
        ))}
      </NavigationOptions>
    </Navigation>
  );

  return (
    <>
      <Container {...{hideDrawer, floating}}>
        {!hideDrawer && <SideBar>{getNavigation()}</SideBar>}
        <Body>
          <Header>
            <Start>
              <HoverButton
                icon={<RiMenu2Line />}
                onClick={() => setShowDrawer(true)}
              />
            </Start>
            <End>
              <Translation onClick={() => setOpened(true)}>
                <FaGlobeAmericas />
                {translate('dashboard:dashboard.language')}
              </Translation>
              <Menu control={<Avatar radius="xl" />}>
                <Menu.Label>
                  <Text color={colors.darkGray} size="sm">
                    {'Elizandro'}
                  </Text>
                  {'Admin'}
                </Menu.Label>
                <Menu.Item
                  onClick={() => navigate('')}
                  icon={<FiUser size={14} />}>
                  Perfil
                </Menu.Item>

                <Menu.Item
                  icon={<FiLogOut size={14} />}
                  onClick={() => dispatch(clearState())}>
                  Sair
                </Menu.Item>
              </Menu>
            </End>
          </Header>
          <Content>
            <Card>{children}</Card>
          </Content>
        </Body>
      </Container>
      <Modal
        {...{opened}}
        onClose={() => setOpened(false)}
        title={translate('dashboard:dashboard.languageLabel')}>
        <Languages>
          <Language
            active={i18n.language.includes('pt')}
            onClick={() => handleChangeLanguage('pt')}>
            <img src={brasil} />
            Português
          </Language>
          <Language
            active={i18n.language.includes('en')}
            onClick={() => handleChangeLanguage('en')}>
            <img src={usa} />
            English
          </Language>
        </Languages>
      </Modal>
      <Drawer
        opened={showDrawer}
        onClose={() => setShowDrawer(false)}
        withCloseButton={false}>
        {getNavigation()}
      </Drawer>
    </>
  );
};

export default DashboardLayout;
