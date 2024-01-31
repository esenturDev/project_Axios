import { useState, useEffect } from "react";
import axios from "axios";
import { Input } from "../ul/input/Input";
import { TodoResults } from "../todoResults/TodoResults";
import { Button } from "../ul/button/Button.jsx";
import scss from "./TodoRender.module.scss";

const url =
	"https://elchocrud.pro/api/v1/074d4e1afb9ef05653d00c9368cb42e1/todo-list";

export const TodoRender = () => {
	const [todo, setTodo] = useState([]);
	const [inputValue, setInputValue] = useState("");
	const [inputValue2, setInputValue2] = useState("");
	const [inputValue3, setInputValue3] = useState("");
	const [result, setResult] = useState(false);
	const [editResult, setEditResult] = useState(false);
	const [editRes, setEditRes] = useState(null);
	const [editResultInput, setEditResultInput] = useState("");
	const [editValueInput, setEditValueInput] = useState("");
	const [editValue, setEditValue] = useState("");

	const resultTodo = () => {
		setResult(true);
	};

	// const trueRes = () => {
	// 	setResult(false);
	// };

	const postTodo = async () => {
		const Newdata = {
			value1: inputValue,
			value2: inputValue2,
			value3: inputValue3,
		};
		setInputValue("");
		setInputValue2("");
		setInputValue3("");
		try {
			const response =   await axios.post(url, Newdata);
			// const response = await axios.post(url);
			localStorage.setItem("key", JSON.stringify(Newdata));
			setTodo([...response.data, localStorage]);
		} catch (error) {
			console.error(error);
		}
	};

	const getTodo = async () => {
		try {
			const response = await axios.get(url);
			localStorage.getItem("key");
			setTodo(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	const deleteTodo = async (id) => {
		try {
			const response = await axios.delete(`${url}/${id}`);
			localStorage.removeItem("key");
			setTodo(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	const updateTodo = async (id, value1, value2, value3) => {
		try {
			const response = await axios.put(`${url}/${id}`, {
				id,
				value1,
				value2,
				value3,
			});
			setTodo(response.data);
			// getTodo();
			resultTodo();
		} catch (error) {
			console.error(error);
		}
	};
	const putTodoRes = async (id) => {
		const update = {
			value1: editResultInput,
			value2: editValueInput,
			value3: editValue,
		};
		const response = await axios.put(`${url}/${id}`, update);
		setTodo(response.data);
	};
	useEffect(() => {
		getTodo();
	}, []);

	return (
		<div className={scss.container}>
			<div className={scss.div1}>
				<Input type="text" value={inputValue} setData={setInputValue} />
				<Input type="url" value={inputValue2} setData={setInputValue2} />
				<Input type="text" value={inputValue3} setData={setInputValue3} />
				<Button onClick={() => postTodo()}>Add</Button>
			</div>
			<div className={scss.div2}>
				<TodoResults
					value22={inputValue}
					todo={todo}
					setFunk={deleteTodo}
					setFunkPut={updateTodo}
					result={result}
					setEditResult={setEditResult}
					setEditRes={setEditRes}
					setEditResultInput={setEditResultInput}
					editResult={editResult}
					editRes={editRes}
					editResultInput={editResultInput}
					putTodoRes={putTodoRes}
					editValueInput={editValueInput}
					setEditValueInput={setEditValueInput}
					editValue={editValue}
					setEditValue={setEditValue}
				/>
			</div>
		</div>
	);
};
