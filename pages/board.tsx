import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { boardDataActions } from '../store/boardSlice';

interface boardType {
	id: number;
	name: string;
	title: string;
	comment: string;
}

const board = () => {
	const dispatch = useDispatch();
	const router = useRouter();

	useEffect(() => {
		dispatch(boardDataActions.getBoards());
	}, [dispatch]);

	const board: boardType[] = useSelector((state: RootState) => state.board.data);

	return (
		<>
			<div className="w-96 md:w-3/5 m-10 block items-center border-solid border-black border-2">
				<div className="grid grid-cols-5 border-solid border-1 border-black">
					<span className="p-1 border-r border-solid border-black">제목</span>
					<span className="p-1 col-span-2 border-r border-solid border-black">내용</span>
					<span className="p-1">작성자</span>
				</div>
				{board.map((item: boardType) => {
					return (
						<div
							onClick={() => {
								router.push(`/detail/${item.id}`);
							}}
							className="grid grid-cols-5 border-solid border-t border-black"
							key={item.id}
						>
							<span className="p-1 border-1 border-r border-solid border-black">{item.title}</span>
							<span className="p-1 col-span-2 border-r border-solid border-black truncate">
								{item.comment}
							</span>
							<span className="p-1 border-1">{item.name}</span>
						</div>
					);
				})}
			</div>
			<button
				onClick={() => {
					router.push('/');
				}}
			>
				홈으로
			</button>
		</>
	);
};

export default board;
