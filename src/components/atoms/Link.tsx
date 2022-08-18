import { Link as RouterLink, LinkProps } from "react-router-dom";
import styled from "styled-components";

type Props = {
    children: React.ReactNode;
} & LinkProps;

const Link = ({children, ...props}: Props)=>{
    return(
        <StyledLink {...props}>{children}</StyledLink>
    )
}

const StyledLink = styled(RouterLink)`
    color: inherit;
    text-decoration: none;
    &:visited{
        color: inherit;
    }
`

export default Link;