import React from "react";
import { Button } from "../ul/button/Button";
import { Input } from "../ul/input/Input";
import scss from "./TodoResults.module.scss";

export const TodoResults = ({
	todo,
	setFunk,
	setFunkPut,
	setEditResult,
	setEditRes,
	setEditResultInput,
	editResult,
	editRes,
	editResultInput,
	putTodoRes,
	editValueInput,
	setEditValueInput,
	editValue,
	setEditValue,
}) => {
	return (
		<div className={scss.divCards}>
			{todo.map((item) => (
				<div className={scss.card} key={item.id}>
					<h2>{item.value1}</h2>
					<img src={item.value2} alt={item.value1} />
					<p>{item.value3}</p>
					<Button
						onClick={() => {
							setFunkPut(item._id, item.value1, item.value2, item.value3);
							setEditResult(true);
							setEditRes(item._id);
							setEditResultInput(item.value1);
							setEditValueInput(item.value2);
							setEditValue(item.value3);
						}}>
						Update
					</Button>
					<Button onClick={() => setFunk(item._id)}>delete</Button>
					{editResult && editRes === item._id && (
						<div>
							<Input
								value={editResultInput}
								type="text"
								setData={setEditResultInput}
							/>
							<Input
								value={editValueInput}
								type="url"
								setData={setEditValueInput}
							/>
							<Input value={editValue} type="text" setData={setEditValue} />
							<Button
								onClick={() => {
									putTodoRes(item._id);
									setEditResult(false);
								}}>
								Save
							</Button>
						</div>
					)}
				</div>
			))}
		</div>
	);
};
