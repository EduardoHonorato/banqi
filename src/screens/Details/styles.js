import styled from 'styled-components/native'

export const Wrapper = styled.ScrollView`
background:#f5f5f5;
flex:1;
`;

export const Header = styled.View`
height:150px;
`;

export const Container = styled.SafeAreaView`
flex:1;
align-items:center;
background:#f5f5f5;

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
    margin-top:-80%;`;


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

export const LabelText = styled.Text`
color:black;
font-size:10px;
font-weight:bold;
margin-top:5px;
`;
export const LabelAmountV = styled.Text`
color:black;
font-size:16px;
font-weight:bold;
margin-top:10px;
`;
export const LabelTitle = styled.Text`
color:black;
font-size:22px;
font-weight:bold;
margin-top:30px;
`;
export const LabelTextDescription = styled.Text`
color:#ccc;
font-weight:600;
font-size:14px;
margin-top:3px;
padding-bottom:10px;
`;

export const LabelAmount = styled.Text`
color:${props => props.color};
font-size:16px;
`;