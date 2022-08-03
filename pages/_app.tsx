import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../store/store";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../src/createEmotionCache";
import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/theme";
import { NextPage } from "next";
import { ReactNode } from "react";

const clientSideEmotionCache = createEmotionCache();

type Page<P = {}> = NextPage<P> & {
	getLayout?: (page: ReactNode) => ReactNode;
};

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
	Component: Page;
}

function MyApp(props: MyAppProps) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
	const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

	return (
		<Provider store={store}>
			<CacheProvider value={emotionCache}>
				<Head>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1, user-scalable=0, maximum-scale=1, minimum-scale=1"
					/>
				</Head>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					{getLayout(
						<>
							<Component {...pageProps} />
						</>
					)}
				</ThemeProvider>
			</CacheProvider>
		</Provider>
	);
}

export default MyApp;
