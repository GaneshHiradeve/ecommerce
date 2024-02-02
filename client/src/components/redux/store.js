import { configureStore , combineReducers} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import {
  userReducer,
} from './reducer/userReducer.js';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root2',
  storage,
};

const rootReducer = combineReducers({
  user: userReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer:persistedReducer,
  middleware: [thunk],

});

export const persistor = persistStore(store);

