import styled from 'styled-components';

export const Container = styled.div`
    background-image: ${p => `url(${p.bgUrl})`};
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;
export const Title = styled.h1`
    color: white;
    font-size: 28px;
    font-weight: 500;
    margin-top: 30px;
    @media(max-width:375px){
        font-size: 24px;
    }
`;
export const FormArea = styled.form`
    width: 35%;
    background: white;
    margin-top: 20px;
    border-radius:15px;
    display: flex;
    justify-content: space-between;
    @media(max-width:375px){
        width: 85%;
    }
  
`;
export const Button = styled.button`
    background: black;
    height: 100%;
    padding: 18px;
    cursor: pointer;
    border-radius:0px 15px 15px 0px;
    border: 0;
`;

export const Input = styled.input`
    width: 100%;
    background: none;
    border: none;
    outline: none;
    padding-left: 20px;
    font-size: 18px;
`;