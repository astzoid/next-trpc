import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>Next.js + TypeScript + Tailwind</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
			</Head>

			<h1 className="text-3xl font-bold">Hello World</h1>
		</>
	);
}
