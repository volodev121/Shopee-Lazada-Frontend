import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../store";

// Define a type for the slice state
interface authState {
  auth: { name: string; email: string };
  token: string;
  isAuthenticated: boolean;
  isLoading: boolean;
}

// Define the initial state using that type
const initialState: authState = {
  auth: { name: "", email: "" },
  token: "",
  isAuthenticated: true,
  isLoading: true,
};

export const authSlice = createSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    signIn: (state) => { },
    signUp: (state) => { },
    // Use the PayloadAction type to declare the contents of `action.payload`
    signout: (state, action: PayloadAction<number>) => { },
  },
});

export const { signIn, signUp, signout } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => initialState.value;

export default authSlice.reducer;
