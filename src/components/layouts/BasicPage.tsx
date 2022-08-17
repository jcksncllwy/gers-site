import styled from 'styled-components';
import MenuBar from '../molecules/MenuBar';

type Props = {
    children?: React.ReactNode;
}

const BasicPage = ({children}: Props)=>(
    <Container>
        <MenuBar />
        <ChildContainer>
            {children}
        </ChildContainer>
    </Container>
)

const ChildContainer = styled.div`
    width: 100%;
    max-width: var(--md-breakpoint);
    padding-top: var(--fixed-menu-height);
`

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default BasicPage;

