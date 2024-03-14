import { FC } from "react";
import { TodoTypes } from "../types";

interface TodoItemProps {
	users: TodoTypes[];
	deleteRequest: (_id: number) => void;
}

const TodoItem: FC<TodoItemProps> = ({ users, deleteRequest }) => {
	return (
		<div>
			{users.map((item) => (
				<div key={item._id}>
					<h1>{item.name}</h1>
					<p>{item.email}</p>
					<img src={item.photo} alt="" />
					<p>{item.phone}</p>
					<h2>{item.yearOfBirth}</h2>
					<button
						onClick={() => {
							deleteRequest(item._id);
						}}>
						Delete
					</button>
				</div>
			))}
		</div>
	);
};

export default TodoItem;
