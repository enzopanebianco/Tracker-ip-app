import styled from 'styled-components';

export const Container = styled.div`
    background: #fdfdfd;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding:10px;
    margin: 0 auto;
    width: 75%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    z-index: 5;
    div:last-child{
        border: 0;
    }
    position: relative;
    transform: translateY(-60px);
    @media(max-width:375px){
        transform: translateY(-100px);
        width: 90%;
        flex-direction: column;
        align-items: center;
    }
`;
export const InformationArea = styled.div`
    display: flex;
    margin-top: 10px;
    flex-direction: column;
    border-right:1px solid #ccc;
    height: 70%;
    padding:15px;
    width: 25%;
    justify-content: flex-start;
    @media(max-width:375px){
        border-right: none;
        width: 80%;
        align-items: center;
        padding:10px;
    }
`;

export const InformationTitle = styled.span`
    color: hsl(0, 0%, 59%);
    letter-spacing: 2px;
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 10px;
    @media(max-width:375px){

    }
`;

export const InformationContent = styled.h3`
    color:  hsl(0, 0%, 17%);
    font-size: 22px;
    @media(max-width:375px){
        font-size:18px;
        text-align: center;
    }
`;
