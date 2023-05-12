import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Grid, Container, TextField, InputBase, InputLabel, FormControl, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	nameSelection,
	resetEvent,
	phoneSelection,
	amountSelection,
	hourSelection,
	selectName,
	selectHour,
	selectAll,
} from "../features/bill/billSlice";
import DatePicker from "react-date-picker/dist/entry.nostyle";
import { dateSelection, priceSelection, selectDate, typeSelection } from "../features/bill/billSlice";
import Link from "next/link";
import Layout from "../components/template/layout/layout";

const Home = () => {
	const date = useSelector(selectDate);
	const data = useSelector(selectAll);
	const dispatch = useDispatch();
	const [selected, setSelected] = useState(-1);

	const handleDate = (newValue: Date | any) => {
		if (newValue == null) {
			dispatch(dateSelection(""));
		} else {
			dispatch(dateSelection(newValue));
		}
	};

	useEffect(() => {
		dispatch(resetEvent);
	}, []);

	const validatePhone = (phoneNumber: any) => {
		const phone = /^\d+$/;
		if (String(phoneNumber).length >= 10) return phone.test(String(phoneNumber));
		else return false;
	};

	return (
		<>
			<Head>
				<title>RSVP</title>
				<meta name="description" content="RSVP" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Grid container spacing={4}>
				<Grid item>
					<Typography variant="h4" sx={{ color: "white", textAlign: "center" }}>
						Reservation
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<TextField
						label="Name"
						variant="outlined"
						autoComplete={"none"}
						fullWidth
						sx={{
							input: {
								color: "white",
								"&:-webkit-autofill": {
									"-webkit-box-shadow": "0 0 0 100px black inset",
									"-webkit-text-fill-color": "#fff",
									"caret-color": "white",
								},
							},
							"& label.Mui-focused": {
								color: "white",
							},
							"& label": {
								color: "white",
							},
							"& .MuiInput-underline:after": {
								borderBottomColor: "white",
							},
							"& .MuiOutlinedInput-root": {
								"& fieldset": {
									borderColor: "white",
								},
								"&:hover fieldset": {
									borderColor: "white",
								},
								"&.Mui-focused fieldset": {
									borderColor: "white",
								},
							},
						}}
						onChange={(e: any) => {
							setTimeout(() => {
								dispatch(nameSelection(e.target.value));
							}, 1);
						}}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						label="Phone"
						variant="outlined"
						fullWidth
						autoComplete={"none"}
						error={!validatePhone(data.phone) && data.phone != ""}
						helperText={!validatePhone(data.phone) && data.phone != "" ? "Format Phone not correct!" : ""}
						sx={{
							input: {
								color: "white",
								"&:-webkit-autofill": {
									"-webkit-box-shadow": "0 0 0 100px black inset",
									"-webkit-text-fill-color": "#fff",
									caretColor: "white",
								},
							},
							"& label.Mui-focused": {
								color: "white",
							},
							"& label": {
								color: "white",
							},
							"& .MuiInput-underline:after": {
								borderBottomColor: "white",
							},
							"& .MuiOutlinedInput-root": {
								"& fieldset": {
									borderColor: "white",
								},
								"&:hover fieldset": {
									borderColor: "white",
								},
								"&.Mui-focused fieldset": {
									borderColor: "white",
								},
							},
						}}
						onChange={(e: any) => {
							setTimeout(() => {
								dispatch(phoneSelection(e.target.value));
							}, 1);
						}}
					/>
				</Grid>
				<Grid item xs={12}>
					<FormControl fullWidth>
						<DatePicker onChange={handleDate} value={date} minDate={new Date()} />
					</FormControl>
				</Grid>
				{date != "" && (
					<>
						<Grid item xs={12} container direction="row" justifyContent="space-between">
							<Grid item md={4} xs={6} container>
								<Button
									onClick={() => {
										setSelected(0);
										dispatch(hourSelection("17.30 - 19.30"));
									}}
									sx={{
										height: "100%",
										color: "white",
										backgroundColor: "rgba(104, 105, 97, 1)",
										"&:hover": {
											backgroundColor: "rgba(104,105,97,.5)",
										},
										border: selected == 0 ? "1px solid #0062cc" : "",
									}}
								>
									17:30 - 19.30
								</Button>
							</Grid>
							<Grid
								item
								md={4}
								xs={6}
								container
								sx={{
									justifyContent: { md: "center", xs: "flex-end" },
									alignItems: { md: "center", xs: "flex-end" },
								}}
							>
								<Button
									onClick={() => {
										setSelected(1);
										dispatch(hourSelection("21.30 - 23.30"));
									}}
									sx={{
										height: "100%",

										color: "white",
										backgroundColor: "rgba(104, 105, 97, 1)",
										"&:hover": {
											backgroundColor: "rgba(104,105,97,.5)",
										},
										border: selected == 1 ? "1px solid #0062cc" : "",
									}}
								>
									21:30 - 23.30
								</Button>
							</Grid>
							<Grid
								item
								md={4}
								xs={12}
								container
								sx={{
									justifyContent: { md: "flex-end", xs: "center" },
									alignItems: { md: "flex-end", xs: "center" },
									mt: { xs: 2, md: 0 },
								}}
							>
								<Button
									onClick={() => {
										setSelected(2);
										dispatch(hourSelection("00.30 - 02.30"));
									}}
									sx={{
										height: "100%",
										color: "white",
										backgroundColor: "rgba(104, 105, 97, 1)",
										"&:hover": {
											backgroundColor: "rgba(104,105,97,.5)",
										},
										border: selected == 2 ? "1px solid #0062cc" : "",
									}}
								>
									00:30 - 02.30
								</Button>
							</Grid>
						</Grid>
					</>
				)}
			</Grid>
			{data.hour != "" && data.date != "" && data.name != "" && validatePhone(data.phone) && (
				<Grid item xs={12} container alignItems="center" justifyContent="center" sx={{ mt: 3 }}>
					<Link href="/table">
						<Button
							sx={{
								color: "white",
								backgroundColor: "rgba(104, 105, 97, 1)",
								"&:hover": {
									backgroundColor: "rgba(104,105,97,.5)",
								},
								width: "150px",
							}}
						>
							Proceed
						</Button>
					</Link>
				</Grid>
			)}
		</>
	);
};

Home.getLayout = function getLayout(page: any) {
	return (
		<>
			<Layout>{page}</Layout>
		</>
	);
};

export default Home;
