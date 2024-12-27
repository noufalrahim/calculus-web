import { configureStore } from '@reduxjs/toolkit';

export type AppState = {
  authUser: {
    username: string;
    name: string;
    image: string;
  };
};

const initialState = {
  authUser: {
    username: '',
    name: '',
    image: '',
  },
};

function AppReducer(prevState = initialState, action: { type: string; payload: any }) {
  switch (action.type) {
    case 'auth/user':
      return {
        ...prevState,
        authUser: action.payload,
      };
    default:
      return prevState;
  }
}

const store = configureStore({
  reducer: AppReducer,
});

export default store;
