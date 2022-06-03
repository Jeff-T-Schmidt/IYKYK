import styled from 'styled-components';

export const Box = styled.div `
padding: 0px 60px;
background: #4285F4;
position: absolute;
bottom: 0;
width: 100%;


@media (max-width: 1000px) {
padding: 0px 30px;
}
`;

export const Container = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
max-width: 1000px;
margin: 0 auto;

`

export const Column = styled.div `
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;

export const Row = styled.div `
display: grid;
grid-template-columns: repeat(auto-fill,
minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
grid-template-columns: repeat(auto-fill,
minmax(50px, 1fr));
}
`;


export const Heading = styled.p `
font-size: 24px;
color: #fff;
margin-bottom: 40px;
font-weight: bold;
`;