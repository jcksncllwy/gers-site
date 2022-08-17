import styled from "styled-components";
import BasicPage from "../components/layouts/BasicPage";

const Agenda = () => {
    return(
        <BasicPage>
            <Container>
            <h1>AGENDA GOES HERE</h1>
            </Container>
        </BasicPage>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default Agenda;