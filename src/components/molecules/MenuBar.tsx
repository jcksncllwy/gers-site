import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MenuBar = ()=>{
    return(
        <Container>
            <Inner>
                <div>yo</div>
                <div>hey</div>
            </Inner>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: var(--fixed-menu-height);
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    padding: 5px 20px;
    background-color: blue;
`

const Inner = styled.div`
    width: 100%;
    max-width: var(--md-breakpoint);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export default MenuBar;