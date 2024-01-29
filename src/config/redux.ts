import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import pokemon from 'modules/pokemon/@redux';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['pokemon'],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    pokemon,
  }),
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({immutableCheck: false, serializableCheck: false}),
});
const persistor = persistStore(store);

export {store, persistor};

export type RootState = Omit<ReturnType<typeof store.getState>, '_persist'>;
export type AppDispatch = typeof store.dispatch;
