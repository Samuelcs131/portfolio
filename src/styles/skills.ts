import styled from "styled-components";
import { iSkillsStyle } from "../types/styles";

export const SkillsContainer = styled.section`

    & > div{
        margin: 0 auto;
        max-width: 1140px;
        padding: 100px 50px;
        width: 100%;
        text-align: center;

        h2{
            font-size: 40px;
            color: ${({theme})=>theme.text.primary};
            margin-bottom: 60px;
            font-weight: 500;
        }

        @media screen and (max-width: 720px) {
            h2{
                font-size: 30px;
            }
        }
    } 
`

export const SkillsGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 80px; 
    justify-content: center;
 

    @media screen and (max-width: 490px) {
        gap: 50px;
    }
`

export const SkillTechnology = styled.div<iSkillsStyle>`
    color: ${({theme})=>theme.text.primary};
    width: 150px;
    height: 150px;
    background-color: ${({theme})=>theme.background.secundary};
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .3s; 
    position: relative;
    user-select: none;

    &:hover::before{
        content: '${props=> props.name}';
        position: absolute;
        bottom: 10px;
        font-size: 14px;
    }

    &:hover{
        transition: .3s;
        transform: scale(1.2);
        border:  1px solid;
        border-image: linear-gradient( to top, ${props=> props.color}, rgba(0, 0, 0, 0) ) 1;
    }

    // RESOLUTIONS 
    @media screen and (max-width: 490px) {
        width: 100px;
        height: 100px;

        img{
            width: 30px;
        }
    }
`