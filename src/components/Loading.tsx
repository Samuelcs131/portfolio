import { LoadingContainer } from "../styles/loading";

const Loading = (): JSX.Element => {
    return(<>
    <LoadingContainer>
        <svg width="200" height="200" viewBox="0 0 40 60">
        <polygon fill="none" stroke="#fff" strokeWidth="1" points="16,1 32,32 1,32" />
        <text x="0" y="45" fill="#fff">Carregando...</text>
        </svg>
    </LoadingContainer>
    </>)
}

export default Loading;