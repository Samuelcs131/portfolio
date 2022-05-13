import styled from "styled-components";

export const FooterContainer = styled.footer`
    padding: 50px 50px;
    & > div{
        margin: 0 auto;
        max-width: 1140px;
        display: flex; 
        align-items: center; 
        justify-content: space-between;
        border-top: 1px solid ${({theme})=>theme.background.tertiary};
        padding-top: 30px;
        flex-wrap: wrap;
        gap: 20px;

        div{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 30px;

            svg {
                cursor: pointer;
                
                path{ transition: .3s;}

                &:hover path{ 
                    transition: .3s;
                    stroke: ${({theme})=>theme.color.primary};
                    fill: rgba(0,217,255,.411);
                }
            }
        }

        @media screen and (max-width: 580px){
            justify-content: center;
        }
    }
    span{
        font-size: 16px;
        color: ${({theme})=>theme.text.primary};
    }
`