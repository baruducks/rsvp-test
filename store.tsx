import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./features/bill/billSlice";

export default configureStore({
	reducer: {
		data: dataReducer,
	},
});
