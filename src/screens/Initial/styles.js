import styled from 'styled-components/native'

export const Wrapper = styled.ScrollView`
background:#f5f5f5;
flex:1;
`;

export const Header = styled.View`
height:150px;
`;

export const HeaderContainer = styled.SafeAreaView`
flex:1;
align-items:center;
justify-content:center;

`;

export const Title = styled.Text`
color:black;
font-size:16px;
font-weight:500;
padding:35px;
`;



export const Img = styled.Image`
width:250px;
flex:1;
    align-items:center;
    justify-content:center;
    align-self:center;
    margin-top:-80%`;


export const ViewMoreContent = styled.View`
    flex:1;
    align-items:center;
    justify-content:center;
    align-self:center;
    background: #0033C6;
    border: 2px solid #0033C6;
    border-radius: 6px;
    width:80%;
    height:50px;
    margin-top:-60%;
    
`;
export const ViewMoreLabel = styled.Text`
font-size:20px;
color:white;
text-align:center;
`;