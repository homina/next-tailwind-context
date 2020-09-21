import Layout from "../components/layout/default";
import '../styles/tailwind.css';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
