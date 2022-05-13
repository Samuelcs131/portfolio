import styled from 'styled-components'

export const AboutContainer = styled.section`
    background-color: ${({theme})=>theme.background.secundary};
   
    padding: 100px 50px;
     
    
    div{
        text-align: center;
        margin: 0 auto;
        max-width: 1140px;
        width: 100%;

        h2{
            color: ${({theme})=>theme.text.primary};
            font-size: 40px;
            margin-bottom: 20px;
            font-weight: 500;
        }
        p{
            color: ${({theme})=>theme.text.primary};
            font-size: 16px;
        }

        @media screen and (max-width: 720px) {
            h2{
                font-size: 30px;
            }
            p{
                font-size: 14px;
            }
        }
    }

`