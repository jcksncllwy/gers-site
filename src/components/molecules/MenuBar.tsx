import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const MenuBar = ()=>{
    return(
        <Container>
            <Inner>
                <Logo>
                    <Link to="/">
                        <img src="https://ltfowyvtpuhuazsxpcvn.supabase.co/storage/v1/object/public/public-images/GERS Logo Crop.png" />
                    </Link>
                </Logo>
                <NavItems>
                    <NavLink to="/account">Account</NavLink>
                    <NavLink to="/auth">Auth</NavLink>
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
        margin-right: 10px;
    }

    a{
        text-decoration: none;
    }
`

export default MenuBar;