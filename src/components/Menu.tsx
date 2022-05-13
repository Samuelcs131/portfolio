import { useEffect, useState } from "react";
import { MenuContainer,MenuHamburguer,MenuIcon,MenuList } from "../styles/menu";


const Menu = (): JSX.Element => {

    const [showMenu, setShowMenu] = useState<boolean>(false);
    
    function closeMenu(){
        setShowMenu(!showMenu)
    }
    

    return(<>
        <MenuContainer>
            <nav>
                <MenuIcon href="#intro">S<span>Δ</span>muel</MenuIcon>

                <MenuHamburguer show={showMenu} onClick={()=>closeMenu()}>
                    <div></div>
                    <div></div>
                    <div></div>
                </MenuHamburguer>

                <MenuList show={showMenu}>
                    <li><a onClick={()=>closeMenu()} href="#about">Sobre</a></li>
                    <li><a onClick={()=>closeMenu()} href="#skills">Conhecimento</a></li>
                    <li><a onClick={()=>closeMenu()} href="#projects">Projetos</a></li> 
                </MenuList>

            </nav>
        </MenuContainer>
    </>)
}

export default Menu;