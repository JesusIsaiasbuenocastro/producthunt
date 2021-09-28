import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Buscar from '../ui/buscar'
import Navegacion from './navegacion';
import Boton from '../ui/boton';

const ContenedorHeader = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    //Al pixel 768 se divide en dos con el space-between
    @media( min-width:768px ){
        display: flex;
        justify-content: space-between;
    }
`;

const Logo = styled.p`
    color: var(--naranja);
    font-size: 4rem;
    line-height: 0;
    font-weight: 700;
    font-family: 'Reboto Slab', serif;
    margin-right: 2rem;

    &:hover{
        cursor: pointer;
    }

`;

//Codigo a para aregar formato al div por que no lo esta agarrando directo
const ContenedorHeaderLinea = styled.header`
    border-bottom: 2px solid var(--gris3);
    padding: 1rem 0;
`;

//pone todos los elementos del div en una sola linea
const ContenedorHeaderDisplayFlex = styled.div`
    display: flex;
    align-items: center;
`;


const Header = () => {

    const usuario = false;

    return ( 
        <ContenedorHeaderLinea>
            <ContenedorHeader>
                    <ContenedorHeaderDisplayFlex>
                        <Link href="/">
                            <Logo>P</Logo>
                        </Link>
                        <Buscar/>
                        <Navegacion />
                    </ContenedorHeaderDisplayFlex>
                    <ContenedorHeaderDisplayFlex>   
                        {usuario ? (
                            <>
                                <p
                                    css={css`
                                        margin-right: 2rem;
                                        `}
                                >Hola isaias</p>
                                <Link href="/">
                                    <Boton
                                        bgColor="#DA552F"
                                        fontColor ="#e1e1e1"
                                    >Cerrar sesión</Boton>
                                </Link>
                            </>
                        )
                        :
                        (
                            <>
                             <Link href="/login">
                                <Boton
                                    bgColor="#DA552F"
                                    fontColor ="#e1e1e1"
                                >Login</Boton>
                            </Link>
                            <Link href="/crear-cuenta">
                                <Boton
                                    bgColor="#DA552F"
                                    fontColor ="#e1e1e1"
                                >Crear Cuenta</Boton>
                            </Link>
                            </>
                        )    
                        }
                    </ContenedorHeaderDisplayFlex>
            </ContenedorHeader>
        </ContenedorHeaderLinea>
    );
}
 
export default Header;