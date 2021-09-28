import React, { Fragment } from 'react';
import Header from './header';
import { Global,css } from '@emotion/react';
import Head from 'next/head';

const Layout = (props) => {
    return (
        <Fragment>
            <Global 
                styles={css`
                    :root{
                        --gris: #3d3d3d;
                        --gris2: #6F6F6F;
                        --gris3: #e1e1e1;
                        --naranja: #DA552F;   
                    }
                    html{
                        font-size: 62.5%;
                        box-sizing: border-box;
                    }
                    *,*:before, *:after{
                        box-sizing: inherint;
                    }
                    body{
                        font-size: 1.6rem;
                        line-height: 1.5;
                    }
                    h1,h2,h3{
                        margin: 0 0 2rem 0;
                        line-height: 1.5;
                    }
                    ul{
                        list-style:none;
                        margin:0;
                        padding: 0;
                    }
                    a{
                        text-decoration: none;
                    }

                `}
            />

            <Head>
                <html lang="es" />
                <title> Product Hunt Firebase y Next.js </title>
            </Head>

           <Header/>
            <main>
                {props.children}
            </main>
        </Fragment>
      );
}
 
export default Layout;