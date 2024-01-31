import { styled } from "styled-components";

export const Input = ({ type, value, setData }) => {
	return (
		<Inputs
			type={type}
			value={value}
			onChange={(e) => {
				setData(e.target.value);
			}}
		/>
	);
};

const Inputs = styled.input`
	width: 285px;
	height: 45px;
	border-radius: 12px;
	font-size: 18px;
	font-weight: 500;
	padding-left: 10px;
	color: #fff;
`;
