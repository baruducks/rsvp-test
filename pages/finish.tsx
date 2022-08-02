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
import Image from "next/image";

const Finish: NextPage = () => {
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
				<title>Finish</title>
				<meta name="description" content="Ticket Only" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Image src="/qr.png" alt="qr" height="100%" width="100%" />
		</>
	);
};

export default Finish;
