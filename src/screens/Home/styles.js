import styled from 'styled-components/native'

export const Wrapper = styled.ScrollView`
background:#f8f8f8;
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


export const HeaderLogo = styled.SafeAreaView`
flex:1;
align-items:center;
justify-content:space-between;
background:#fff;
flex-direction:row;
align-items:center;
margin-bottom:20px;
padding:20px;
`;
export const ImgLogo = styled.Image`

`;

export const Title = styled.Text`
color:black;
font-size:18px;
font-weight:500;
`;

export const BalanceContainer = styled.View`
margin:10px 0;
flex-direction:row;
align-items:center;
`;

export const Value = styled.Text`
color:black;
font-size:38px;
font-weight:200;
margin-bottom:-20px;
`;

export const Bold = styled.Text`
font-weight:bold;
`;

export const EyeButton = styled.TouchableOpacity`
margin-left:10px;`;

export const Info = styled.Text`
color:black;
font-size:14px;
font-weight:bold;`;

export const Actions = styled.View`
flex-direction:row;
margin-top:40px;
`;

export const Action = styled.TouchableOpacity`
flex-direction:row;
align-items:center;
border:1px solid rgba(255,255,255,0.6);
width:150px;
height:45px;
border-radius:25px;
justify-content:center;
margin:0 10px;
`;

export const ActionLabel = styled.Text`
color:black;
font-size:20px;
margin-left:10px;
`;

export const UseBalance = styled.View`
background:#fff;
height:60px;
flex-direction:row;
padding:0 16px;
align-items:center;
justify-content:space-between;
`;

export const UseBalanceTitle = styled.Text`
color:#000;
font-size:16px;
font-weight:400;
`;

export const Loan = styled.View`
margin-top:10px;
padding:0 5px;
`;


export const Card = styled.View`
background:#fff;
padding:20px;
border-radius:8px;
margin-top:10px;
`;

export const CardBody = styled.View`
flex-direction:row;
`;


export const CardDetails = styled.View`
flex:1;
margin-right:20px;
`;

export const CardTitle = styled.Text`
color:#000;
font-size:18px;
font-weight:bold;
`;

export const CardInfo = styled.Text`
color:rgba(0,0,0,0.5);
font-weight:bold;
font-size:13px;
margin-top:10px;
`;

export const Img = styled.Image`
width:60px;`;

export const AddButton = styled.TouchableOpacity`
flex-direction:row;
align-items:center;
margin-top:25px;
`;

export const AddLabel = styled.Text`
color:#0db060;
font-size:18px;
font-weight:bold;
margin-left:15px;
`;
export const ViewMoreContent = styled.View`
background:#fff;
height:60px;
flex-direction:row-reverse;
padding:0 16px;
align-self:flex-end;
width:100%;
`;
export const ViewMoreLabel = styled.Text`
color:#00B0F0;
font-size:18px;
font-weight:bold;
`;