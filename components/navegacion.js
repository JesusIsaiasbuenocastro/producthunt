import React from 'react';
import Link from 'next/link'; //Router 
import styled from '@emotion/styled';

const Nav = styled.nav`
    padding-left: 2rem;

    a{
        font-size : 1.8rem;
        margin-left: 2rem;
        color: var(--gris2);

        //Cuando es el ultimo elemento 
        &:last-of-type {
            margin-right: 0;
        }
    }
`;

const Navegacion = () => {
    return ( 
        <Nav>
            <Link href="/">Inicio</Link>
            <Link href="/populares">Populares</Link>
            <Link href="/nuevo-producto">Nuevo producto</Link>
        </Nav>
     );
}
 
export default Navegacion;