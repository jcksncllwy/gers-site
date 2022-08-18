import { InputHTMLAttributes } from "react";
import styled from "styled-components";

type Props = {
    label?: React.ReactNode,
    inputID: string,
} & InputHTMLAttributes<HTMLInputElement>

const TextInput = ({
    label,
    inputID,
    ...otherProps
}: Props) => {
    return(
        <Container>
            <label htmlFor={inputID}>{label}</label>
            <input id={inputID} {...otherProps} />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    label{
        margin-right: 10px;
    }

    input {
        color: var(--text-color-light-bg);
        padding: 10px;
        width: 100%;
    }
`;

export default TextInput;