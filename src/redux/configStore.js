import { configureStore } from "@reduxjs/toolkit";

import cardSlice from "./modules/cardSlice";

const store = configureStore({
  //useSelector로 가져와서 사용 가능
  reducer: { cardSlice },
});

export default store;
