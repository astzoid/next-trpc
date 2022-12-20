import { trpc } from '@utils/trpc';
import Head from 'next/head';

export default function Home() {
	const hello = trpc.hello.greet.useQuery({ text: 'next-trpc' });

	return (
		<>
			<Head>
				<title>Next.js + Tailwind + tRPC</title>
			</Head>

			<h1 className="text-3xl font-bold">Hello World</h1>
			<p>{hello.data?.greeting}</p>
		</>
	);
}
