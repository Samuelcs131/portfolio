import styled from 'styled-components'

export const IntroContainer = styled.section`
    position: relative;
    color: ${({theme})=>theme.text.primary};
    height: 100vh;
    display: flex;
    align-items: center;
    z-index: 0;
    max-width: 1140px;
    padding: 0 50px;
    overflow-x: hidden;
    margin: 0 auto;
    
    &::before{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: url('/img/vecteezy.svg') no-repeat;
        background-size: cover;
        background-position: 295px -15px;
        z-index: 0;
        clip-path: circle(360px);
    }
     
    div{ 
        z-index: 1;
        display: inline-block;
        flex-direction: column;
        span{
            font-size: 25px;
            font-weight: 200;
            color: ${({theme})=>theme.color.primary};
        }

        h1{
            font-size: 75px;
            font-weight: 500;
            margin-top: -15px;
            margin-bottom: -10px;
        }
        
    }
    // RESOLUTIONS
    @media screen and (max-width: 920px) {
        &::before{
            left: -10px;
        }
        div{
            span{ font-size: 25px; }
            h1{ font-size: 55px; }
        }
    }
    @media screen and (max-width: 720px) {
        &::before{ 
            background-position: 230px 0;
            left: 0px;
            clip-path: none;
        }
        div{
            span{ font-size: 25px; }
            h1{ font-size: 35px; }
        }
    }
    @media screen and (max-width: 490px) { 
        div{ 
            h1{ 
                font-size: 30px; 
                margin-top: -5px;
                margin-bottom: -5px; 
            }
        }
        &::before{ 
            background-position: 100px 0;
            left: 0px;
            clip-path: none;
        }
    }
    @media screen and (max-width: 320px) {
        div{ 
            h1{ 
                font-size: 20px; 
                margin-top: -5px;
                margin-bottom: -5px; 
            }
        }
    }
`
export const IntroOffice = styled.p`
    display: block;
    width: 100%;
    animation: typing 2s steps(40) 1s 1 normal both, 500ms steps(40) infinite normal; 
    white-space: nowrap;
    overflow: hidden; 
    font-size: 30px;
    color: #62c6e4;
    font-weight: 500;
    position: relative;
 
    /* ANIMATIONS */
    @keyframes typing {
        from {
            width: 0
        }
    }
        
    @keyframes blink {
        50% {
            border-color: transparent
        }
    } 
    /* RESOLUTIONS */
    @media screen and (max-width: 920px) { 
        font-size: 25px;
    }
    @media screen and (max-width: 720px) {
        font-size: 20px;
    }
`
export const IntroCurriculum = styled.div`
    margin-top: 30px;
    color: ${({theme})=>theme.color.primary};
    border: 1px solid ${({theme})=>theme.color.primary};
    border-radius: 4px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
    text-align: center;
    user-select: none;

    &:hover{
        background-color: #64edff34;
        transition: 0.3s;
    }
` 