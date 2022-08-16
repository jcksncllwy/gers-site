import styled from 'styled-components';

type Props = {
    children?: React.ReactNode;
}

const BasicPage = ({children}: Props)=>(
    <Container>
        {children}
    </Container>
)

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    padding: 10px;
`

export default BasicPage;

