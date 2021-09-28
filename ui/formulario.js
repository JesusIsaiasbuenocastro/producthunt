import styled from "@emotion/styled";

export const Formulario = styled.form`
    max-width: 600px;
    width: 95%;
    margin: 5rem auto 0 auto;
`;

export const Campo = styled.div`
    margin-bottom: 2rem;
    display: flex;
    align-items: center;

    //El label toma los 150px y el imput toma el restante con la propiedad flex
    label {
        flex: 0 0 150px;
        font-size: 1.8rem;
    }

    input{
        flex: 1;
        padding: 1rem;
    }
`;

export const InputSubmit = styled.input`
    background-color: var(--naranja);
    width: 100%;
    height: 4rem;
    padding: 1.5 rem;
    text-align: center;
    color: #fff;
    font-size: 1.8rem;
    text-transform: uppercase;
    border:none;
    font-weigth: 700;
    
    &:hover{
        cursor:pointer;
    }
`;

export const AlinearH1 = styled.h1`
    text-align: center;
    margin-top: 5rem;
`;