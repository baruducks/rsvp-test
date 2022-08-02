import { createSlice } from "@reduxjs/toolkit";

interface State {
	type: string;
	price: number;
	beverages: {
		pkg1: number;
		pkg2: number;
		pkg3: number;
	};
	table: string;
	date: string;
	name: string;
	phone: string;
	amount: number;
	hour: string;
	limit: number;
}

const initialState: State = {
	type: "",
	price: 0,
	beverages: {
		pkg1: 0,
		pkg2: 0,
		pkg3: 0,
	},
	table: "",
	date: "",
	name: "",
	phone: "",
	amount: 1,
	hour: "",
	limit: 0,
};

export const dataSlice: any = createSlice({
	name: "data",
	initialState,
	reducers: {
		typeSelection: (state: State, action) => {
			state.type = action.payload;
		},
		beveragesSelection: (state: State, action) => {
			state.beverages = action.payload;
		},
		priceSelection: (state: State, action) => {
			state.price = action.payload;
		},
		dateSelection: (state: State, action) => {
			state.date = action.payload;
		},
		tableSelection: (state: State, action) => {
			state.table = action.payload;
		},
		nameSelection: (state: State, action) => {
			state.name = action.payload;
		},
		phoneSelection: (state: State, action) => {
			state.phone = action.payload;
		},
		amountSelection: (state: State, action) => {
			state.amount = action.payload;
		},
		hourSelection: (state: State, action) => {
			state.hour = action.payload;
		},
		limitSelection: (state: State, action) => {
			state.limit = action.payload;
		},
		resetEvent: (state: State) => {
			state = initialState;
		},
	},
});

export const {
	typeSelection,
	beveragesSelection,
	priceSelection,
	dateSelection,
	tableSelection,
	nameSelection,
	resetEvent,
	phoneSelection,
	amountSelection,
	hourSelection,
	limitSelection,
} = dataSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (type: string) => (dispatch: any) => {
	setTimeout(() => {
		dispatch(typeSelection(type));
	}, 1000);
};

export const selectPrice = (state: any) => state.data.price;
export const selectBeverages = (state: any) => state.data.beverages;
export const selectType = (state: any) => state.data.type;
export const selectTable = (state: any) => state.data.table;
export const selectDate = (state: any) => state.data.date;
export const selectName = (state: any) => state.data.name;
export const selectPhone = (state: any) => state.data.phone;
export const selectAmount = (state: any) => state.data.amount;
export const selectHour = (state: any) => state.data.hour;
export const selectLimit = (state: any) => state.data.limit;
export const selectAll = (state: any) => state.data;

export default dataSlice.reducer;
