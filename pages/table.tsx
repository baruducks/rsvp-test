import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Grid, Container, FormControl, Button, Card, CardContent } from "@mui/material";
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
} from "../features/bill/billSlice";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface Table {
	id: number;
	label: string;
	price: number;
	maxPerson: number;
}

const Table: NextPage = () => {
	const route = useRouter();
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
		if (!date) {
			route.push("/");
		}
		dispatch(typeSelection("table"));
	});
	return (
		<>
			<Head>
				<title>Table</title>
				<meta name="description" content="Ticket Only" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Grid container maxWidth="lg" spacing={1}>
				{tables.map((item: Table) => {
					return (
						<Grid item xs={4} key={item.id} sx={{ textAlign: "center" }}>
							<Card
								sx={{ height: "100%", backgroundColor: table === item.label ? "red" : "white" }}
								onClick={() => {
									dispatch(tableSelection(item.label));
									dispatch(priceSelection(item.price));
								}}
							>
								<CardContent>
									<p>{item.label}</p>
									<p>capacity: {item.maxPerson} people</p>
								</CardContent>
							</Card>
						</Grid>
					);
				})}
				<Link href="/payment">
					<Button>Proceed</Button>
				</Link>
			</Grid>
		</>
	);
};

export default Table;
