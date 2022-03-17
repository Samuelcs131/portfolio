import styled from 'styled-components'

const ProjectContainer = styled.div`
    width: 330px;
    height: 400px;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    padding: 30px;
    display: flex;
    align-items: center;
    background: ${props => `url(${props.imageProject})`} no-repeat;
    background-size: cover;
    background-position-y: 0;
    background-position: center;
    position: relative;

    &::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    background-color: rgba(19, 19, 58, 0.383);
    }
 
    &:nth-child(4){
        width: 100%;
    }
    
    @media screen and (max-width: 1140px) {
        width: 700px; 
    }
    @media screen and (max-width: 400px) {
        height: 450px;
    }


`

const SkillContainer = styled.div`
    &:hover{
        border:  1px solid;
        border-image: linear-gradient( to top, ${props=> props.color}, rgba(0, 0, 0, 0) ) 1;
    }

    &:hover::before{
        content: '${props=> props.project}';
        position: absolute;
        bottom: 2px;
        font-size: 14px;
    }

    @media screen and (max-width: 480px) {
        &:hover::before{ 
            font-size: 12px;
        }
    }
`

export {ProjectContainer, SkillContainer}