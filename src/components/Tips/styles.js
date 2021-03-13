import styled from 'styled-components/native'

export const Container = styled.ScrollView.attrs(()=>({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle:{
        alignItems:'center',
        padding:5,
    },
}))`
margin-top:30px;
`;

export const Option = styled.TouchableOpacity`
    background: white;
    width:130px;
    height:115px;
    border-radius:8px;
    padding:15px;
    margin-right:5px;
    justify-content:space-between;
    margin-top:-5px;
    
`;

export const Title = styled.Text`
color:black;
font-size:14px;
font-weight:bold;
`;

export const Img = styled.Image`
align-self:flex-start;
height:35px;
width:35px;`;
