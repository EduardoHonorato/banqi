import styled from 'styled-components/native'



export const Option = styled.TouchableOpacity`
    background: ${({bgColor}) => bgColor};
    width:118px;
    height:118px;
    border-radius:8px;
    padding:15px;
    margin-right:5px;
    justify-content:space-between;
    margin-top:-5px;
    
`;

export const Title = styled.Text`
color:black;
font-size:16px;
font-weight:bold;
`;

export const Img = styled.Image`
align-self:flex-start;
height:30px;
width:30px;`;

export const Label = styled.Text`
color:#000;
font-size:18px;
padding:0 0;
font-weight:500;
padding-bottom:20px;
`;

export const ContainerTransactions = styled.ScrollView`
flex:1;
margin-top:25px;
background:white;
padding:20px;
`;


export const TransactionContainer = styled.View`
flex-direction:row;
align-items:center;
justify-content:space-between;
margin-bottom:20px;
`;


export const TransactionImage = styled.View`
`;
export const TransactionText = styled.View`
margin-right:50px;
width:70%;
`;
export const TransactionAmount = styled.View`
margin-left:-50px;
`;


export const TransactionTitle = styled.Text`
color:#000;
font-size:16px;
text-align:left;
font-weight:bold;

`;
export const AmountTitle = styled.Text`
font-size:15px;
text-align:right;
font-weight:bold;
margin-top:-18px;
margin-left:-10px;
color:${props => props.color};
`;

export const TransactionDescription = styled.Text`
color:${props => props.color};
font-size:12px;
font-weight:bold;
`;
