import React from "react";
import Layout from "../components/layout/default";
import type { AppProps /*, AppContext */ } from "next/app";
import "../styles/tailwind.css";

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
};

export default App;
