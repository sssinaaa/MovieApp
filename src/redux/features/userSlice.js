import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  user: [],
  userToken: null,
  favorites: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signUp(state, action) {
      state.user = [...state.user, action.payload];
    },
    login(state, action) {
      console.log('login action: ', action);
      state.userToken = action.payload;
    },
    addFav(state, action) {
      state.favorites = [...state.favorites, action.payload];
      console.log('favorites: ', state.favorites);
    },
    removeFav(state, action) {
      state.favorites.forEach(index =>
        index === action.payload ? state.favorites.pop() : state.favorites,
      );
    },
  },
});

export const {signUp, login, addFav, removeFav} = userSlice.actions;
export default userSlice.reducer;
