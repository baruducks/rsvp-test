import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Grid, Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetEvent } from "../features/bill/billSlice";
import Link from "next/link";
interface Content {
	id: number;
	header: string;
	content: string;
	redirect: string;
}

const Type: NextPage = () => {
	const dispatch = useDispatch();
	const cardContent: Content[] = [
		{ id: 1, header: "Table Only", content: "Book our table hassle free", redirect: "/table" },
		{ id: 2, header: "Ticket Only", content: "HHH", redirect: "/ticket" },
		{ id: 3, header: "Preoder", content: "Book our table + drinks", redirect: "/preorder" },
	];
	return (
		<>
			<Head>
				<title>RSVP</title>
				<meta name="description" content="RSVP" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<h1 className={styles.title}>Welcome to SB-RSVP</h1>
			<Container maxWidth="md">
				<Grid container spacing={4}>
					{cardContent.map((item): any => {
						return (
							<Grid item xs={12} key={item.id}>
								<Link href={item.redirect}>
									<Card
										sx={{
											height: "100%",
											backgroundColor: "transparent",
											textAlign: "center",
											border: "2px solid white",
											borderRadius: "15px",
											pr: 8,
											pl: 8,
											"&:hover": {
												border: "3px solid #0062cc",
											},
										}}
									>
										<CardContent>
											<Typography sx={{ color: "white" }} gutterBottom variant="h5" component="div">
												{item.header}
											</Typography>
											<Typography sx={{ color: "white" }} variant="body1" color="text.secondary">
												{item.content}
											</Typography>
											<Typography
												sx={{ color: "white", textAlign: "right" }}
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
			</Container>
		</>
	);
};

export default Type;
