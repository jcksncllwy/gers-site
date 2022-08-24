import { Link as RouterLink, LinkProps } from "react-router-dom";
import styled from "styled-components";

type Props = {
    children: React.ReactNode
    underline?: boolean
} & LinkProps;

const Link = ({children, underline, ...props}: Props)=>{
    return(
        // @ts-ignore: styled component props
        <StyledLink underline={underline} {...props}>{children}</StyledLink>
    )
}


const StyledLink = styled(RouterLink)`
    color: inherit;
    ${
        // @ts-ignore: styled component props
        p => p.underline?'':'text-decoration: none;'
    }
    &:visited{
        color: inherit;
    }
`

export default Link;