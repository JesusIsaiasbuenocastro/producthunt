import React from 'react';
import Layout from '../components/layout'
import { Formulario,Campo,InputSubmit ,AlinearH1} from '../ui/formulario';

export default function CrearCuenta() {
  return (
    <div>
      <Layout>
            <>
                <AlinearH1>Crear cuenta</AlinearH1>
                <Formulario>
                    <Campo>
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" id="nombre" placeholder="Tu nombre" name= "nombre"/>
                    </Campo>
                    <Campo>
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" placeholder="Tu email" name= "email"/>
                    </Campo>
                    <Campo>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Tu password" name= "password"/>
                    </Campo>
                    <InputSubmit type="submit" value="Crear cuenta" />
                </Formulario>
            </>
        
      </Layout>
    </div>
  )
}
