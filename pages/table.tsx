import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Grid, Container, FormControl, Button, Card, CardContent, Typography } from "@mui/material";
import DatePicker from "react-date-picker/dist/entry.nostyle";
import { useDispatch, useSelector } from "react-redux";
import {
	amountSelection,
	dateSelection,
	priceSelection,
	selectDate,
	selectPrice,
	selectTable,
	selectType,
	tableSelection,
	typeSelection,
	resetEvent,
} from "../features/bill/billSlice";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../components/template/layout/layout";
import integerToStringRupiah from "../helper/integerToStringRupiah";

interface Table {
	id: number;
	label: string;
	price: number;
	maxPerson: number;
}

const Table = () => {
	const router = useRouter();
	var date = useSelector(selectDate);
	var table = useSelector(selectTable);
	var price = useSelector(selectPrice);
	const dispatch = useDispatch();
	const tables: Table[] = [
		{ id: 1, label: "A1", price: 2000000, maxPerson: 5 },
		{ id: 2, label: "A2", price: 3000000, maxPerson: 6 },
		{ id: 3, label: "A3", price: 4000000, maxPerson: 7 },
		{ id: 4, label: "A4", price: 5000000, maxPerson: 8 },
		{ id: 5, label: "A5", price: 4000000, maxPerson: 7 },
		{ id: 6, label: "A6", price: 3000000, maxPerson: 6 },
		{ id: 7, label: "A7", price: 4000000, maxPerson: 7 },
		{ id: 8, label: "A8", price: 5000000, maxPerson: 8 },
		{ id: 9, label: "A9", price: 4000000, maxPerson: 7 },
	];

	useEffect(() => {
		if (date == "") {
			router.push("/");
			dispatch(resetEvent);
		}
		dispatch(typeSelection("table"));
	}, []);

	return (
		<>
			<Head>
				<title>Table</title>
				<meta name="description" content="Ticket Only" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Grid container spacing={4}>
				<Grid item>
					<Typography variant="h4" sx={{ color: "white", textAlign: "center" }}>
						Choose your table
					</Typography>
				</Grid>
				<Grid item container spacing={2}>
					{tables.map((item: Table) => {
						return (
							<Grid item xs={6} key={item.id} sx={{ textAlign: "center" }}>
								<Card
									sx={{
										height: "100%",
										border: table === item.label ? "3px solid #0062cc" : "3px solid white",
										"&:hover": {
											cursor: "pointer",
										},
									}}
									onClick={() => {
										dispatch(tableSelection(item.label));
										dispatch(priceSelection(item.price));
									}}
								>
									<CardContent>
										<Typography>{item.label}</Typography>
										<Typography>{item.maxPerson} people</Typography>
										<Typography>Rp{integerToStringRupiah(item.price)}</Typography>
									</CardContent>
								</Card>
							</Grid>
						);
					})}
				</Grid>
				<Grid item container alignItems="center" justifyContent="center">
					<Link href="/payment">
						<Button
							sx={{
								color: "white",
								backgroundColor: "rgba(104, 105, 97, 1)",
								"&:hover": {
									backgroundColor: "rgba(104,105,97,.5)",
								},
								width: "200px",
							}}
						>
							Proceed
						</Button>
					</Link>
				</Grid>
			</Grid>
		</>
	);
};

Table.getLayout = function getLayout(page: any) {
	return (
		<>
			<Layout>{page}</Layout>
		</>
	);
};

export default Table;
