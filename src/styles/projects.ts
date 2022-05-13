import styled from 'styled-components'
import { iProjectsStyle } from '../types/styles'

export const ProjectsContainer = styled.section`
    overflow: hidden;
    padding: 50px 0px;
    background-color: ${({theme})=>theme.background.secundary};
    & > div{ 
        margin: 0 auto;
        max-width: 1140px;
        
        h2{
            text-align: center;
            color: ${({theme})=>theme.text.primary};
            font-size: 40px;
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

export const ProjectsGrid = styled.div`
  div{
      margin: 0 auto;
  }

    .react-multi-carousel-list {
        overflow-y: initial;
        padding-bottom: 40px;
    }
    .react-multi-carousel-dot { 
        button{ border-color: ${({theme})=>theme.text.primary};}
    }
    .react-multi-carousel-dot--active{
        button{ background-color: ${({theme})=>theme.text.primary};}
    }
`

export const Project = styled.div<iProjectsStyle>`
    width: 330px;
    height: 400px;
    border-radius: 20px;
    overflow: hidden;
    padding: 30px;
    display: flex; 
    align-items: center; 
    justify-content: space-between;
    flex-direction: column;
    position: relative;
    user-select: none;
    margin-bottom: 10px;

    &::after{
        content: '';
        position: absolute;
        background: url(${({image})=>image}) center center / cover no-repeat;
        width: 100%;
        height: 100%;
        left: 0;
        bottom: 0; 
        transition: .3s; 
    }

    &:hover{
        &::after{ 
            transform: scale(1.1);
            transition: .3s;
        }
    }

    &::before {
        content: "";
        z-index: 1;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0px;
        bottom: 0;
        background-color: rgba(19, 19, 58, 0.384);
    }

    // RESOLUTIONS 
    @media screen and (max-width: 1024px) {
        width: 80%;
    }
`

export const ProjectTitleAndDescription = styled.div`
    position: relative;
    z-index: 10;
    width: 100%;
   

    h1{
        font-weight: 600;
        font-size: 30px;
        margin-top: 10px;
        margin-bottom: 5px;
        color: ${({theme})=>theme.text.primary};
    }
    p{
        font-size: 16px;
        color: ${({theme})=>theme.text.primary};
        
    } 
`

export const ProjectTechAndLink = styled.div`
    position: relative;
    z-index: 10;
    width: 100%; 

    p{
        color: ${({theme})=>theme.text.primary};
        display: flex;
        flex-wrap: wrap;
        row-gap: 2px;
        column-gap: 10px; 
        margin-bottom: 10px;
    }

    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
 

        span{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;

            svg {
                cursor: pointer;
                &:hover {
                    path,polyline,line {
                        stroke: ${({theme})=>theme.color.primary};
                    }
                }
            }
        }
    }
`
