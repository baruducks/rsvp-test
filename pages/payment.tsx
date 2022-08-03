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
import Layout from "../components/template/layout/layout";
import { useRouter } from "next/router";
import integerToStringRupiah from "../helper/integerToStringRupiah";

const Payment = () => {
	interface Content {
		id: number;
		type: string;
		number: number;
	}
	const router = useRouter();
	const dispatch = useDispatch();
	const [payment, setPayment] = useState(0);
	const data = useSelector(selectAll);

	const cardContent: Content[] = [
		{ id: 1, type: "VA", number: 123456789 },
		{ id: 2, type: "Gopay", number: 12131415 },
	];

	useEffect(() => {
		if (data.date == "") {
			router.push("/");
			dispatch(resetEvent);
			console.log(data);
		}
	}, []);

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
						Payment
					</Typography>
				</Grid>
				<Grid item container justifyContent="center" alignItems="center">
					{data.date != "" && (
						<>
							<Grid item sx={{ mb: 1 }}>
								<Typography variant="h5" sx={{ color: "white" }}>
									Summary
								</Typography>
							</Grid>
							<Grid
								item
								container
								direction="column"
								justifyContent="center"
								alignItems="center"
								spacing={2}
							>
								<Grid item>
									<Typography sx={{ color: "white" }}>Amount of People: {data.amount}</Typography>
								</Grid>
								<Grid item>
									<Typography sx={{ color: "white" }}>
										Date:{" "}
										{`${data.date.getDate()}/${
											data.date.getMonth() + 1
										}/${data.date.getFullYear()} ${data.hour} PM`}
									</Typography>
								</Grid>
								{data.beverages.pkg1 != 0 && (
									<Grid item>
										<Typography sx={{ color: "white" }}>
											Package 1: {data.beverages.pkg1}
										</Typography>
									</Grid>
								)}
								{data.beverages.pkg2 != 0 && (
									<Grid item>
										<Typography sx={{ color: "white" }}>
											Package 2: {data.beverages.pkg2}
										</Typography>
									</Grid>
								)}
								{data.beverages.pkg3 != 0 && (
									<Grid item>
										<Typography sx={{ color: "white" }}>
											Package 2: {data.beverages.pkg3}
										</Typography>
									</Grid>
								)}
								<Grid item>
									<Typography sx={{ color: "white" }}>
										Total: Rp{integerToStringRupiah(data.limit + data.price)}
									</Typography>
								</Grid>
								{data.type == "preorder" && (
									<Grid item>
										<Typography sx={{ color: "white" }}>
											Deposit: Rp{integerToStringRupiah(100000)}
										</Typography>
									</Grid>
								)}
							</Grid>
						</>
					)}
				</Grid>
				<Grid item container direction="row" alignItems="center" justifyContent="center" spacing={2}>
					{cardContent.map((item): any => {
						return (
							<Grid item xs={6} key={item.id}>
								<Card
									sx={{
										height: "100%",
										backgroundColor: "white",
										textAlign: "center",
										borderRadius: 0,
										"&:hover": {
											border: "2px solid #0062cc",
											cursor: "pointer",
										},
										border: payment === item.id ? "2px solid #0062cc" : "2px solid white",
									}}
									onClick={() => {
										setPayment(item.id);
									}}
								>
									<CardContent
										sx={{
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											height: "100%",
										}}
									>
										<Typography
											sx={{
												color: "black",
												textAlign: "center",
												fontSize: { xs: "20px", md: "28px" },
											}}
											component="div"
										>
											{item.type}
										</Typography>
									</CardContent>
								</Card>
							</Grid>
						);
					})}
				</Grid>
				<Grid item xs={12} container alignItems="center" justifyContent="center">
					<Link href="/finish">
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
			{/* <Grid container justifyContent="center">
				<Grid item>
					<h1>Payment</h1>
				</Grid>
				{data.date != "" && (
					<Grid item xs={12} sx={{ textAlign: "center" }}>
						<Typography variant="h5">Summary</Typography>
						Amount of People: {data.amount}
						<br />
						Date:{" "}
						{`${data.date.getDate()}/${data.date.getMonth() + 1}/${data.date.getFullYear()} ${
							data.hour
						} PM`}{" "}
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
				)}
				<Grid item container justifyContent="space-between" spacing={2}>
					{cardContent.map((item: any, index: number) => {
						return (
							<Grid item xs={6} md={6} key={item.id}>
								<Card
									sx={{
										backgroundColor: "black",
										textAlign: "center",
										border: payment == index + 1 ? "3px solid #0062cc" : "3px solid white",
										borderRadius: "15px",
										"&:hover": {
											cursor: "pointer",
											border: "3px solid #0062cc",
										},
									}}
									onClick={() => {
										setPayment(item.id);
									}}
								>
									<CardContent>
										<Typography sx={{ color: "white" }} variant="h5" component="div">
											{item.type}
										</Typography>
									</CardContent>
								</Card>
							</Grid>
						);
					})}
				</Grid>
			</Grid>
			<Grid item xs={12} container alignItems="center" justifyContent="center">
				<Link href="/finish">
					<Button sx={{ mt: 1 }}>Proceed</Button>
				</Link>
			</Grid> */}
		</>
	);
};

Payment.getLayout = function getLayout(page: any) {
	return (
		<>
			<Layout>{page}</Layout>
		</>
	);
};

export default Payment;
