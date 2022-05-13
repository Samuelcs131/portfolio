import GlobalStyled from "../styles/globalStyled";
import { iLayout } from "../types/components";
import Menu from "./Menu";
import { ThemeProvider } from 'styled-components'
import { themeDark } from "../styles/theme"; 

const Layout = ({children}: iLayout): JSX.Element => {
    return(<>
    <ThemeProvider theme={themeDark}> 
        <GlobalStyled/>
        <Menu/>
        {children}
        
    </ThemeProvider>
    </>)
}

export default Layout;