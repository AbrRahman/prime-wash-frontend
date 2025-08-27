import { createSlice } from "@reduxjs/toolkit";
import type { TUser } from "../../../types/auth.type";

type TAuthInitialState = {
  user: TUser | null;
  token: string | null;
};

const initialState: TAuthInitialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice.reducer;
