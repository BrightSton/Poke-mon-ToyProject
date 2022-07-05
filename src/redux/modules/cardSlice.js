import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/* //미들웨이
export const getDataDB = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=153&offset=0"
      );
      console.log(response);
      dispatch(setData(response?.data?.results));
    } catch (err) {
      console.log(err);
    }
  };
};

//REDUCER
const cardSlice = createSlice({
  name: "card",
  initialState: {
    list: [],
  },
  reducers: {
    setData: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setData } = cardSlice.actions;
export default cardSlice.reducer;*/

// 미들웨이 2
export const getCardsThunk = createAsyncThunk(
  "cards/getCardsThunk",
  async () => {
    try {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=153&offset=0"
      );
      console.log(res);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

// defaultState
const initialState = {
  loading: false,
  data: [],
  error: null,
};

const cardSlice = createSlice({
  name: "cardsReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCardsThunk.fulfilled, (state, action) => {
      console.log(action);
      state.loading = false;
      state.data = action.payload;
    });
  },
});

export default cardSlice.reducer;
