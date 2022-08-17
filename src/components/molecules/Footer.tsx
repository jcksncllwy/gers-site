import styled from "styled-components";

type Props = {
    children?: React.ReactNode;
}

const Footer = ({children}: Props)=>{
    return(
        <Container>
            <ChildrenContainer>
                {children}
            </ChildrenContainer>
            Brought to you by the <a href="https://globalearthrepairfoundation.org/">Global Earth Repair Foundation</a>
        </Container>
    )
}

const Container = styled.div`
    padding: 50px 0;
`

const ChildrenContainer = styled.div``

export default Footer;