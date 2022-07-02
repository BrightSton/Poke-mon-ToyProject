import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//미들웨이
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
export default cardSlice.reducer;
