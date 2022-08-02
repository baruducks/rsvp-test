import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Grid, Container, FormControl, Button, Card, CardContent, Typography } from "@mui/material";
import DatePicker from "react-date-picker/dist/entry.nostyle";
import { useDispatch, useSelector } from "react-redux";
import {
	amountSelection,
	beveragesSelection,
	dateSelection,
	priceSelection,
	selectDate,
	selectLimit,
	selectPrice,
	selectTable,
	selectType,
	tableSelection,
	typeSelection,
} from "../features/bill/billSlice";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface Menu {
	id: number;
	label: string;
	price: number;
}

const Table: NextPage = () => {
	const route = useRouter();
	var date = useSelector(selectDate);
	var table = useSelector(selectTable);
	var limit = useSelector(selectLimit);
	const [pkg1, setPkg1] = useState(0);
	const [pkg2, setPkg2] = useState(0);
	const [pkg3, setPkg3] = useState(0);
	const dispatch = useDispatch();
	const menu: Menu[] = [
		{ id: 1, label: "Package 1", price: 1000000 },
		{ id: 2, label: "Package 2", price: 2000000 },
		{ id: 3, label: "Package 3", price: 3000000 },
	];
	var total = pkg1 * menu[0].price + pkg2 * menu[1].price + pkg3 * menu[2].price;
	useEffect(() => {
		if (!date) {
			route.push("/");
		}
	});
	return (
		<>
			<Head>
				<title>Table</title>
				<meta name="description" content="Ticket Only" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Container maxWidth="lg">
				<Grid container spacing={0}>
					{menu.map((item: Menu) => {
						return (
							<Grid item container xs={4} key={item.id} sx={{ textAlign: "center" }}>
								<Card sx={{ height: "100%" }}>
									<CardContent>
										<p>{item.label}</p>
										<p>Rp{item.price}</p>
									</CardContent>
								</Card>
								<Grid xs={6}>
									<Typography
										onClick={() => {
											if (item.id == 1) {
												setPkg1(pkg1 + 1);
												dispatch(beveragesSelection({ pkg1, pkg2, pkg3 }));
											}
											if (item.id == 2) {
												setPkg2(pkg2 + 1);
												dispatch(
													beveragesSelection({
														pkg1,
														pkg2,
														pkg3,
													})
												);
											}
											if (item.id == 3) {
												setPkg3(pkg3 + 1);
												dispatch(
													beveragesSelection({
														pkg1,
														pkg2,
														pkg3,
													})
												);
											}
										}}
									>
										+
									</Typography>
									<Typography
										onClick={() => {
											if (item.id == 1) {
												setPkg1(pkg1 - 1);
												dispatch(beveragesSelection({ pkg1, pkg2, pkg3 }));
											}
											if (item.id == 2) {
												setPkg2(pkg2 - 1);
												dispatch(beveragesSelection({ pkg1, pkg2, pkg3 }));
											}
											if (item.id == 3) {
												setPkg3(pkg3 - 1);
												dispatch(beveragesSelection({ pkg1, pkg2, pkg3 }));
											}
										}}
									>
										-
									</Typography>
								</Grid>
							</Grid>
						);
					})}
					<Grid item xs={12}>
						<p>Package 1: {pkg1}</p>
						<p>Package 2: {pkg2}</p>
						<p>Package 3: {pkg3}</p>
						<p>Grand total: {total}</p>
						<Typography sx={{ color: total >= limit ? "" : "red" }}>Minimum: {limit}</Typography>
					</Grid>
					<Link href="/payment">
						<Button>Proceed</Button>
					</Link>
				</Grid>
			</Container>
		</>
	);
};

export default Table;
