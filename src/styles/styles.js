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
    @media screen and (max-width: 1140px) {
        width: 700px; 
    }
    @media screen and (max-width: 400px) {
        height: 450px;
    }


`

export {ProjectContainer}