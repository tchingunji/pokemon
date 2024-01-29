import React from 'react';
import {MantineProvider} from '@mantine/core';
import {NotificationsProvider} from '@mantine/notifications';
import {ModalsProvider} from '@mantine/modals';

import Navigation from 'config/navigation';
import GlobalStyle from 'config/style';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from 'config/redux';
import {I18nextProvider} from 'react-i18next';
import i18n from './config/i18next';

const App: React.FC = () => {
  return (
    <MantineProvider>
      <Provider {...{store}}>
        <PersistGate {...{loading: null, persistor}}>
          <I18nextProvider i18n={i18n}>
            <ModalsProvider>
              <NotificationsProvider position="top-right">
                <Navigation />
                <GlobalStyle />
              </NotificationsProvider>
            </ModalsProvider>
          </I18nextProvider>
        </PersistGate>
      </Provider>
    </MantineProvider>
  );
};

export default App;
