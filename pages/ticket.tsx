import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Grid, Container, FormControl, Button, TextField, Card, CardContent, Typography } from "@mui/material";
import DatePicker from "react-date-picker/dist/entry.nostyle";
import { useDispatch, useSelector } from "react-redux";
import {
	amountSelection,
	dateSelection,
	priceSelection,
	selectAll,
	selectAmount,
	selectDate,
	typeSelection,
} from "../features/bill/billSlice";
import Link from "next/link";
import { useEffect, useState } from "react";
interface Content {
	id: number;
	type: string;
	number: number;
}
const Ticket: NextPage = () => {
	const dispatch = useDispatch();
	const [payment, setPayment] = useState(0);
	const [amount, setAmount] = useState(1);
	const cardContent: Content[] = [
		{ id: 1, type: "VA", number: 123456789 },
		{ id: 2, type: "Gopay", number: 12131415 },
	];
	const data = useSelector(selectAll);
	useEffect(() => {
		dispatch(typeSelection("ticket"));
		dispatch(priceSelection(150000 * data.amount));
		console.log(data);
	}, [data, dispatch]);
	return (
		<>
			<Head>
				<title>Ticket Only</title>
				<meta name="description" content="Ticket Only" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<h1 className={styles.title}>Welcome to SB-RSVP</h1>
			<Container maxWidth="md">
				<Grid container>
					<Grid item xs={4}>
						{data.amount}
						<Button
							onClick={() => {
								setAmount(amount + 1);
								dispatch(amountSelection(amount));
							}}
						>
							+
						</Button>
						<Button
							onClick={() => {
								setAmount(amount - 1);
								dispatch(amountSelection(amount));
							}}
						>
							-
						</Button>
					</Grid>
					<Grid item xs={8}>
						Rp{data.amount * 150000}
					</Grid>
					<Grid item xs={8}></Grid>
					<Grid container spacing={3}>
						{cardContent.map((item): any => {
							return (
								<Grid item xs={6} md={4} key={item.id}>
									<Card
										sx={{
											height: "100%",
											backgroundColor: "black",
											textAlign: "center",
											borderRadius: "0px",
											pr: 8,
											pl: 8,
											"&:hover": {
												border: "2px solid #0062cc",
											},
											border: payment === item.id ? "2px solid #0062cc" : "2px solid white",
										}}
										onClick={() => {
											setPayment(item.id);
										}}
									>
										<CardContent>
											<Typography sx={{ color: "white" }} gutterBottom variant="h5" component="div">
												{item.type}
											</Typography>
										</CardContent>
									</Card>
								</Grid>
							);
						})}
					</Grid>
					<Grid item xs={12}>
						<Link href="/finish">
							<Button>Finish</Button>
						</Link>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default Ticket;
