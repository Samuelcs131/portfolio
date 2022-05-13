import styled, { css } from 'styled-components'

interface iMenuStyle {
    show: boolean
}

// CONTAINER
export const MenuContainer = styled.header`
    z-index: 1000;
    backdrop-filter: blur(15px);
    background-color: #070d1ea8;
    position: fixed; 
    width: 100%;
    border-bottom: 1px solid ${({theme})=>theme.background.tertiary};

    nav{
        height: 8.9vh;
        color: white;
        max-width: 1140px;
        padding: 0 50px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`
// ICON
export const MenuIcon = styled.a`
    font-size: 24px;
    text-transform: uppercase;
    letter-spacing: 10px;
    color: ${({theme})=>theme.text.primary};
    cursor: pointer;
    transition: .3s;
    user-select: none;

    span{
        transition: .3s;
        color: ${({theme})=>theme.color.primary};
    } 
`

// LIST
export const MenuList = styled.ul<iMenuStyle>`
    display: flex;
    gap: 20px;
    transform: translateX(0);

    li {
        a{
        margin: 0 5px;
        color: ${({theme})=>theme.text.primary};
        user-select: none; 
        position: relative;
        padding: 15px;
        
            &:hover{
                color: ${({theme})=>theme.color.primary};
                transition: 0.5s;
            }
            &:hover:after{
                content: '>';
                position: absolute;
                right: 0;
            }
            &:hover:before{
                content: '<';
                position: absolute;
                left: 0;
            } 
        }
    } 

    // RESOLUTION
    @media screen and (max-width: 1024px) { 
        position: fixed;
        transform: translateX(100%);
        width: 100%;
        height: 91vh;
        top: 9vh;
        right: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column; 
        transition: all .4s ease-in;

        li{
            opacity: 0;
        } 

        // SHOW MENU
        ${(props)=>props.show === true && (css`
            transform: translateX(0%);
            background-color: #070c1b;
            transition: transform 0.4s ease-in;
    
            li{ 
                animation: 0.5s ease 0.4s 1 normal forwards running navLinkFade;
            }
        `)}
    }

    /* ANIMATION */
    @keyframes navLinkFade {
        from{
            opacity: 0;
            transform: translateX(50px);
        }
        to{
            opacity: 1;
            transform: translateX(0);
        }
    }
`

// HAMBURGUER
export const MenuHamburguer = styled.div<iMenuStyle>`
    cursor: pointer;
    display: none;
    user-select: none;

    div{
        width: 32px;
        height: 1px;
        background-color: ${({theme})=>theme.text.primary};
        margin: 8px;
        transition: 0.3s;

        // SHOW MENU
        ${(props)=>props.show === true && (css`
            &:nth-child(1){
                transform: rotate(-45deg) translate(-8px, 8px);
            }
            &:nth-child(2){
                opacity: 0;
            }
            &:nth-child(3){
                transform: rotate(45deg) translate(-5px, -5px);
            }
        `)}
    }

    @media screen and (max-width: 1024px) {
        display: block;
    }
`