import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const MenuBar = () => {
    return (
        <Container>
            <Inner>
                <Logo>
                    <Link to="/">
                        <img src="https://ltfowyvtpuhuazsxpcvn.supabase.co/storage/v1/object/public/public-images/GERS Logo Crop.png" />
                    </Link>
                </Logo>
                <NavItems>
                    <NavItem>
                        <NavLink to="/agenda">Agenda</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/auth">
                            <Button>Register Now</Button>
                        </NavLink>
                    </NavItem>
                </NavItems>
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
    background-image: url("https://ltfowyvtpuhuazsxpcvn.supabase.co/storage/v1/object/public/public-images/starry-banner-bg.jpeg");
    background-position: center;
    border-bottom: 3px solid var(--color-primary);
`

const Inner = styled.div`
    width: 100%;
    max-width: var(--md-breakpoint);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Logo = styled.div`
    img {
        width: 100%;
        height: 100%; 
        -webkit-mask-image: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%);
        mask-image: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%);
        max-width: 100%;
    }
`

const NavItems = styled.div`
    display: flex;
    align-items: center;

    *:not(:last-child){
        margin-right: 20px;
    }

    
`

const NavItem = styled.div`
    font-size: var(--text-lg-size);
    line-height: var(--text-lg-line-height);
    font-weight: 500;

    a{
        text-decoration: none;
    }

    &:hover{
        text-decoration: underline;
    }
`

const Button = styled.div`
    background-color: var(--color-primary);
    border-radius: 5px;
    padding: 10px 20px;
    text-shadow:0px 1px 0px #2f6627;
    &:hover{
        background-color: var(--color-primary-light);
        padding: 12px 20px;
    }
    &:active{
        position:relative;
	    top:1px;
        background-color: var(--color-primary);
    }
`

export default MenuBar;