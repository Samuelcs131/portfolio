import styled from "styled-components";

export const LoadingContainer = styled.div`
    position: relative;
    background-color: ${({theme})=>theme.background.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    z-index: 9999; 

    polygon {
        stroke-dasharray: 17;
        stroke: ${({theme})=>theme.color.primary}; 
        animation: dash 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
    }

    @keyframes dash {
        to {
            stroke-dashoffset: 136;
        }
    }

    text {
        font-family: 'Orbitron', sans-serif;
        font-size: 7px;
        animation: blink .9s ease-in-out infinite;
    }

    @keyframes blink {
        50% {
            opacity: 0;
        }
    }
`