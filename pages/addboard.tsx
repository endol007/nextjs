import { useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { boardDataActions } from '../store/boardSlice';

interface boardType {
	name: string;
	comment: string;
	title: string;
}

const addboard = () => {
	const dispatch = useDispatch();
	const [board, setBoard] = useState<boardType>({
		name: '',
		comment: '',
		title: '',
	});

	const { name, comment, title } = board;

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setBoard({ ...board, [name]: value });
	};

	const createBoardHandle = () => {
		dispatch(boardDataActions.createBoards({ name, comment, title }));
		setBoard({
			name: '',
			comment: '',
			title: '',
		});
	};

	return (
		<>
			<div className="flex flex-col items-center m-20">
				<p>
					제목:
					<input
						className="border-b-2 ml-5"
						placeholder="제목을 입력하세요"
						name="title"
						value={title}
						onChange={onChange}
					/>
				</p>
				<p>
					내용:
					<input
						className="border-b-2 ml-5"
						placeholder="내용을 입력하세요"
						name="comment"
						value={comment}
						onChange={onChange}
					/>
				</p>
				<p>
					작성자:
					<input
						className="border-b-2 ml-5"
						placeholder="이름을 입력하세요"
						name="name"
						value={name}
						onChange={onChange}
					/>
				</p>
				<button className="bg-gray-300 rounded m-5" onClick={createBoardHandle}>
					작성
				</button>
			</div>
		</>
	);
};

export default addboard;
