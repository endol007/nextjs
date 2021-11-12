import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
	return (
		<>
			<p>Nextjs 시작</p>
			<Link href="/addboard">
				<a>게시판 작성 페이지</a>
			</Link>
			<br />
			<Link href="/board">
				<a>게시판 페이지</a>
			</Link>
			<br />
			<Link href="/test">
				<a>Test</a>
			</Link>
		</>
	);
};

export default Home;
