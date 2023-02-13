// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';

const Store = configureStore({ reducer });
export default Store;
