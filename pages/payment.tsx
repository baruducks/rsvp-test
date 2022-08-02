import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Grid, Container, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetEvent, selectAll } from "../features/bill/billSlice";
import Link from "next/link";
interface Content {
	id: number;
	type: string;
	number: number;
}

const Payment: NextPage = () => {
	const dispatch = useDispatch();
	const [payment, setPayment] = useState(0);
	const data = useSelector(selectAll);
	const cardContent: Content[] = [
		{ id: 1, type: "VA", number: 123456789 },
		{ id: 2, type: "Gopay", number: 12131415 },
	];
	useEffect(() => {
		dispatch(resetEvent);
		console.log(data);
	});
	return (
		<>
			<Head>
				<title>RSVP</title>
				<meta name="description" content="RSVP" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<h1 className={styles.title}>Payment</h1>
			<Container maxWidth="md">
				<Grid container spacing={4} justifyContent="center">
					<Grid item xs={12} sx={{ textAlign: "center" }}>
						<Typography variant="h5">Summary</Typography>
						Amount of People: {data.amount}
						<br />
						Date: {`${data.date.getDate()}/${data.date.getMonth() + 1}/${data.date.getFullYear()} ${data.hour} PM`}{" "}
						<br />
						{data.beverages.pkg1 != 0 && (
							<>
								Package 1: {data.beverages.pkg1}
								<br />
							</>
						)}
						{data.beverages.pkg2 != 0 && (
							<>
								Package 2: {data.beverages.pkg2}
								<br />
							</>
						)}
						{data.beverages.pkg3 != 0 && (
							<>
								Package 3: {data.beverages.pkg3}
								<br />
							</>
						)}
						Total: Rp{data.limit + data.price}
						<br />
						Deposit: Rp1000000
					</Grid>
					{cardContent.map((item): any => {
						return (
							<Grid item xs={6} md={4} key={item.id}>
								<Card
									sx={{
										height: "100%",
										backgroundColor: "black",
										textAlign: "center",
										border: "2px solid white",
										borderRadius: "15px",
										pr: 8,
										pl: 8,
										"&:hover": {
											border: "3px solid #0062cc",
										},
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
						<Button>Proceed</Button>
					</Link>
				</Grid>
			</Container>
		</>
	);
};

export default Payment;
