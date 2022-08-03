import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import {
	Grid,
	Container,
	FormControl,
	Button,
	TextField,
	Card,
	CardContent,
	Typography,
	Divider,
	FormGroup,
	FormControlLabel,
	Checkbox,
} from "@mui/material";
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
	resetEvent,
} from "../features/bill/billSlice";
import Link from "next/link";
import { useEffect, useState } from "react";
import Layout from "../components/template/layout/layout";
import integerToStringRupiah from "../helper/integerToStringRupiah";
import { useRouter } from "next/router";

const Ticket = () => {
	const router = useRouter();
	interface Content {
		id: number;
		type: string;
		number: number;
	}
	const dispatch = useDispatch();
	const [payment, setPayment] = useState(0);
	const cardContent: Content[] = [
		{ id: 1, type: "VA", number: 123456789 },
		{ id: 2, type: "Gopay", number: 12131415 },
		{ id: 3, type: "other banks", number: 12131415 },
	];

	const data = useSelector(selectAll);
	const [amount, setAmount] = useState(data.amount);

	useEffect(() => {
		if (data.date == "") {
			router.push("/");
		}
		dispatch(resetEvent);
		console.log(data);
	}, []);

	return (
		<>
			<Head>
				<title>Ticket Only</title>
				<meta name="description" content="Ticket Only" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Grid container spacing={2}>
				<Grid item container alignItems="center" justifyContent="center">
					<Typography sx={{ color: "white", textAlign: "center", fontSize: "28px" }}>
						Hi, {data.name}
					</Typography>
				</Grid>
				<Grid item xs={12} container direction="column" sx={{ mt: 1 }}>
					<Grid item>
						<Divider sx={{ border: "1px solid white" }} />
					</Grid>
				</Grid>
				<Grid item container direction="row" alignItems="center" justifyContent="space-between" xs={12}>
					<Grid
						item
						md={3}
						xs={5}
						container
						direction="column"
						justifyContent="space-between"
						sx={{
							backgroundColor: "white",
							minHeight: "200px",
							borderRight: "2px solid black",
						}}
					>
						<Grid item />
						<Grid item>
							<Typography sx={{ color: "black", textAlign: "center", fontSize: "40px" }}>
								{data.amount}
							</Typography>
						</Grid>
						<Grid
							item
							container
							direction="row"
							justifyContent="space-betwen"
							sx={{ borderTop: "1px solid black" }}
						>
							<Grid item xs={6} md={6} sx={{ borderRight: "1px solid black" }}>
								<Button
									onClick={() => {
										if (data.amount != 0) {
											setAmount(amount - 1);
											dispatch(amountSelection(data.amount - 1));
											dispatch(priceSelection(150000 * data.amount));
										}
									}}
									sx={{
										color: "black",
										fontWeight: "bold",
										fontSize: "24px",
									}}
								>
									-
								</Button>
							</Grid>
							<Grid item xs={6} md={6}>
								<Button
									onClick={() => {
										setAmount(amount + 1);
										dispatch(amountSelection(data.amount + 1));
										dispatch(priceSelection(150000 * data.amount));
									}}
									sx={{
										color: "black",
										fontWeight: "bold",
										fontSize: "24px",
									}}
								>
									+
								</Button>
							</Grid>
						</Grid>
					</Grid>
					<Grid
						item
						md={9}
						xs={7}
						container
						direction="row"
						justifyContent="flex-end"
						alignItems="flex-end"
						sx={{ backgroundColor: "white", minHeight: "200px", p: { xs: 1, md: 2 } }}
					>
						<Typography
							variant="h5"
							sx={{ color: "black", textAlign: "center", fontSize: { xs: "20px", md: "30px" } }}
						>
							Rp{integerToStringRupiah(data.amount * 150000)}
						</Typography>
					</Grid>
				</Grid>
				<Grid item xs={12} container direction="column" spacing={1}>
					<Grid item>
						<Typography sx={{ color: "white", fontSize: "20px" }}>payment methods</Typography>
					</Grid>
					<Grid item container direction="row" spacing={2}>
						{cardContent.map((item): any => {
							return (
								<Grid item xs={4} key={item.id}>
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
				</Grid>
				<Grid item xs={12} container direction="column" sx={{ mt: 1 }}>
					<Grid item>
						<Divider sx={{ border: "1px solid white" }} />
					</Grid>
				</Grid>
				<Grid item xs={12} container direction="column">
					<FormGroup sx={{ m: 0, p: 0 }}>
						<Grid item>
							<FormControlLabel
								control={
									<Checkbox
										defaultChecked
										sx={{
											color: "white",
											"&.Mui-checked": {
												color: "white",
											},
										}}
									/>
								}
								sx={{ color: "white" }}
								label="I Agree With The Terms & Conditions"
							/>
						</Grid>
						<Grid item>
							<FormControlLabel
								control={
									<Checkbox
										defaultChecked
										sx={{
											color: "white",
											"&.Mui-checked": {
												color: "white",
											},
										}}
									/>
								}
								sx={{ color: "white" }}
								label="Subscribe to our newsletter"
							/>
						</Grid>
					</FormGroup>
				</Grid>
				{data.amount != 0 && (
					<>
						<Grid item xs={12}>
							<Grid
								container
								alignItems="center"
								direction="row"
								justifyContent="space-between"
								sx={{ backgroundColor: "white", my: 2, p: 2 }}
							>
								<Grid item md={6} xs={4}>
									<Grid container alignItems="center" justifyContent="center">
										<Typography sx={{ fontWeight: "bold" }}>
											Ticket <br />
											Only
										</Typography>
									</Grid>
								</Grid>
								<Grid item md={6} xs={8} container alignItems="flex-end" justifyContent="flex-end">
									<Link href="/finish">
										<Button
											sx={{
												color: "white",
												backgroundColor: "rgba(91, 166, 119, 1)",
												"&:hover": {
													backgroundColor: "rgba(91, 166, 119, .5)",
												},
												width: "200px",
												height: "100px",
												textTransform: "none",
												fontSize: "24px",
												borderRadius: "0 16px 16px 0",
											}}
										>
											pay
										</Button>
									</Link>
								</Grid>
							</Grid>
						</Grid>
					</>
				)}
			</Grid>
		</>
	);
};

Ticket.getLayout = function getLayout(page: any) {
	return (
		<>
			<Layout>{page}</Layout>
		</>
	);
};

export default Ticket;
