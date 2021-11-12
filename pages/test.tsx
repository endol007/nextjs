import { InferGetServerSidePropsType } from 'next';

interface BoardType {
	id: number;
	name: string;
	title: string;
	comment: string;
}

export const getServerSideProps = async () => {
	const res = await fetch('http://localhost:4000/boards');
	const boards: BoardType[] = await res.json();

	return {
		props: {
			boards,
		},
	};
};

const test = ({ boards }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	return boards.map((item: BoardType) => {
		return <p>{item.comment}</p>;
	});
};

export default test;
