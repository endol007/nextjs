import { useRouter } from 'next/router';
import { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { boardDataActions } from '../../store/boardSlice';

interface boardType {
	title: string;
	name: string;
	comment: string;
	id: number;
}

const detail = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const [form, setForm] = useState<boardType>({
		title: '',
		name: '',
		comment: '',
		id: 0,
	});
	const board: boardType[] = useSelector((state: RootState) => state.board.data);
	const { boardId } = router.query;
	const detailId = Number(boardId);
	const index = board.findIndex(p => p.id === detailId);
	const { title, name, comment, id } = form;

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value, id: detailId });
	};

	const updateBoardHandle = () => {
		dispatch(boardDataActions.updateBoard(form));
		setForm({
			name: '',
			comment: '',
			title: '',
			id: detailId,
		});
	};

	const deleteOneBoard = () => {
		dispatch(boardDataActions.deleteBoard(detailId));
		router.push('/board');
	};

	return (
		<>
			<div className="flex flex-col items-center">
				<div className="border-2 border-black p-5 mt-10">
					<p>
						제목: <span>{board[index].title}</span>
					</p>
					<p>
						내용: <span className="w-3/6 truncate">{board[index].comment}</span>
					</p>
					<p>
						작성자: <span>{board[index].name}</span>
					</p>
					<button className="bg-gray-300 rounded" onClick={deleteOneBoard}>
						삭제
					</button>
				</div>
				<div className="flex flex-col items-center m-10 border-2 border-black p-5">
					<p>
						제목
						<input
							className="border-b-2"
							placeholder="제목을 입력하세요"
							name="title"
							value={title}
							onChange={onChange}
						/>
					</p>
					<p>
						내용
						<input
							className="border-b-2"
							placeholder="내용을 입력하세요"
							name="comment"
							value={comment}
							onChange={onChange}
						/>
					</p>
					<p>
						작성자
						<input
							className="border-b-2"
							placeholder="이름을 입력하세요"
							name="name"
							value={name}
							onChange={onChange}
						/>
					</p>
					<button className="bg-gray-300 rounded" onClick={updateBoardHandle}>
						작성
					</button>
				</div>
			</div>
		</>
	);
};

export default detail;
