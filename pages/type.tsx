import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Grid, Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetEvent } from "../features/bill/billSlice";
import Link from "next/link";
import Layout from "../components/template/layout/layout";
import { selectAll } from "../features/bill/billSlice";

const Type = () => {
	interface Content {
		id: number;
		header: string;
		content: string;
		redirect: string;
	}
	const dispatch = useDispatch();
	const data = useSelector(selectAll);

	const cardContent: Content[] = [
		{ id: 1, header: "Table Only", content: "Book our table hassle free", redirect: "/table" },
		{ id: 2, header: "Ticket Only", content: "Ticket", redirect: "/ticket" },
		{ id: 3, header: "Preoder", content: "Book our table + drinks", redirect: "/preorder" },
	];
	return (
		<>
			<Head>
				<title>RSVP</title>
				<meta name="description" content="RSVP" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Grid container spacing={4} justifyContent="space-between" direction="column" sx={{ height: "85vh" }}>
				<Grid item container alignItems="center" justifyContent="center">
					<Typography sx={{ color: "white", textAlign: "center", fontSize: "28px" }}>
						Hi, {data.name}
					</Typography>
				</Grid>
				<Grid item container spacing={3}>
					{cardContent.map((item): any => {
						return (
							<Grid item xs={12} key={item.id}>
								<Link href={item.redirect}>
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
												cursor: "pointer",
											},
										}}
									>
										<CardContent sx={{ textAlign: "center" }}>
											<Typography
												sx={{ color: "white", textAlign: "center" }}
												variant="h5"
												component="div"
											>
												{item.header}
											</Typography>
											<Typography
												sx={{ color: "white", textAlign: "center" }}
												variant="body1"
												color="text.secondary"
											>
												{item.content}
											</Typography>
											<Typography
												sx={{ color: "white", textAlign: "center" }}
												variant="subtitle2"
												color="text.secondary"
											>
												Order now &rarr;
											</Typography>
										</CardContent>
									</Card>
								</Link>
							</Grid>
						);
					})}
				</Grid>
			</Grid>
		</>
	);
};

Type.getLayout = function getLayout(page: any) {
	return (
		<>
			<Layout>{page}</Layout>
		</>
	);
};

export default Type;
