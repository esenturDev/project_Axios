import { styled } from "styled-components";

export const Button = ({ onClick, children }) => {
	return <Buttons onClick={onClick}>{children}</Buttons>;
};

const Buttons = styled.button`
	width: 125px;
	height: 45px;
	background-color: #3636c6;
	border: 2px solid #fff;
	color: #fff;
	font-size: 17px;
	font-weight: 500;
	border-radius: 13px;
	&:focus {
		transition: 0.2s;
		background-color: #1414f2;
		color: #cdcde5;
	}
`;
