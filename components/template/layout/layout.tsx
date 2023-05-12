import { Box, Grid, Container, Divider } from "@mui/material";

const Layout = ({ children }: any) => {
	return (
		<>
			<Box component="div" sx={{ backgroundColor: "#f5f5f5" }}>
				<Grid
					container
					sx={{
						backgroundColor: "#161616",
						maxWidth: "600px",
						minHeight: "100vh",
						margin: "auto",
						backgroundPosition: "cover",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
						backgroundImage:
							'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/background/background.png")',
					}}
				>
					<div>
						<Grid item container sx={{ px: 4, pb: 2 }}>
							<Container maxWidth="xl">
								<Grid item container alignItems="center" justifyContent="center" sx={{ my: 8 }}>
									{/* <img
										src="/logo/southbank.png"
										style={{ width: "100%", maxWidth: "100px", height: "auto" }}
									/> */}
								</Grid>
								<Grid item>
									<main>{children}</main>
								</Grid>
							</Container>
						</Grid>
					</div>
				</Grid>
			</Box>
		</>
	);
};

export default Layout;
