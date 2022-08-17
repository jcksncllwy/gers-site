import styled from 'styled-components';
import Footer from '../molecules/Footer';
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
        <Footer />
    </Container>
)

const ChildContainer = styled.div`
    width: 100%;
    max-width: var(--md-breakpoint);
    padding-top: calc(var(--fixed-menu-height) + 30px);
`

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default BasicPage;

