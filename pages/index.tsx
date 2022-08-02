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
} from "../features/bill/billSlice";
import { alpha, styled } from "@mui/material/styles";
import DatePicker from "react-date-picker/dist/entry.nostyle";
import { dateSelection, priceSelection, selectDate, typeSelection } from "../features/bill/billSlice";
import Link from "next/link";

const Home: NextPage = () => {
	const date = useSelector(selectDate);
	const dispatch = useDispatch();
	const handleDate = (newValue: Date | any) => {
		dispatch(dateSelection(newValue));
	};
	const test = useSelector(selectHour);

	useEffect(() => {
		dispatch(resetEvent);
	});

	return (
		<>
			<Head>
				<title>RSVP</title>
				<meta name="description" content="RSVP" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<h1 className={styles.title}>Welcome to SB-RSVP</h1>
			<Container maxWidth="md">
				<Grid container spacing={4}>
					<Grid item xs={12}>
						<TextField
							label="Name"
							variant="outlined"
							fullWidth
							sx={{
								input: { color: "white" },
								"& label.Mui-focused": {
									color: "#0062cc",
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
										borderColor: "#0062cc",
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
							sx={{
								input: { color: "white" },
								"& label.Mui-focused": {
									color: "#0062cc",
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
										borderColor: "#0062cc",
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
					<Grid item xs={12}>
						<Button
							onClick={() => {
								dispatch(hourSelection("17.30 - 19.30"));
							}}
						>
							17:30 - 19.30
						</Button>
						<Button
							onClick={() => {
								dispatch(hourSelection("21.30 - 23.30"));
							}}
						>
							21:30 - 23.30
						</Button>
						<Button
							onClick={() => {
								dispatch(hourSelection("00.30 - 02.30"));
							}}
						>
							00:30 - 02.30
						</Button>
					</Grid>
				</Grid>
				<Link href="/type">
					<Button>Proceed</Button>
				</Link>
			</Container>
		</>
	);
};

export default Home;
