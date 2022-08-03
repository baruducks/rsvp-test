import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Grid, Container, FormControl, Button, Typography } from "@mui/material";
import DatePicker from "react-date-picker/dist/entry.nostyle";
import { useDispatch, useSelector } from "react-redux";
import {
	dateSelection,
	priceSelection,
	selectDate,
	selectPrice,
	selectType,
	typeSelection,
	resetEvent,
} from "../features/bill/billSlice";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Layout from "../components/template/layout/layout";

const Finish = () => {
	const router = useRouter();
	var date = useSelector(selectDate);
	var type = useSelector(selectType);
	var price = useSelector(selectPrice);
	const dispatch = useDispatch();

	useEffect(() => {
		if (date == "") {
			router.push("/");
			dispatch(resetEvent);
		}
	}, []);

	return (
		<>
			<Head>
				<title>Finish</title>
				<meta name="description" content="Ticket Only" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Grid container direction="row" alignItems="center" justifyContent="center" spacing={4}>
				<Grid item>
					<Typography
						variant="h4"
						sx={{ color: "black", textAlign: "center", backgroundColor: "white", p: 2 }}
					>
						Payment has been received!
					</Typography>
				</Grid>
				<Grid item>
					<img src="/qr.png" alt="qr" height="100%" width="100%" style={{ backgroundColor: "white" }} />
				</Grid>
				<Grid item sx={{ width: "100%" }}>
					<Typography
						variant="h4"
						sx={{ color: "black", textAlign: "center", backgroundColor: "white", p: 2 }}
					>
						Thank You
					</Typography>
				</Grid>
			</Grid>
		</>
	);
};

Finish.getLayout = function getLayout(page: any) {
	return (
		<>
			<Layout>{page}</Layout>
		</>
	);
};

export default Finish;
