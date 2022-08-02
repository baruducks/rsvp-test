import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Grid, Container, FormControl, Button } from "@mui/material";
import DatePicker from "react-date-picker/dist/entry.nostyle";
import { useDispatch, useSelector } from "react-redux";
import {
	dateSelection,
	priceSelection,
	selectDate,
	selectPrice,
	selectType,
	typeSelection,
} from "../features/bill/billSlice";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Summary: NextPage = () => {
	const route = useRouter();
	var date = useSelector(selectDate);
	var type = useSelector(selectType);
	var price = useSelector(selectPrice);
	const dispatch = useDispatch();
	useEffect(() => {
		if (!date) {
			route.push("/");
		}
	});
	return (
		<>
			<Head>
				<title>Summary</title>
				<meta name="description" content="Ticket Only" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{date ? (
				<>
					<h1 className={styles.title}>Payment</h1>
					<Container maxWidth="md">
						<Grid container>
							<Grid item xs={12}>
								<p>{date.toString()}</p>
								<p>{type}</p>
								<p>Rp{price}</p>
							</Grid>
							<Grid item xs={12}>
								<Link href="/payment">
									<Button>To Payment</Button>
								</Link>
							</Grid>
						</Grid>
					</Container>
				</>
			) : (
				""
			)}
		</>
	);
};

export default Summary;
