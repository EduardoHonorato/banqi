import React from 'react'
import {
     Wrapper,
     Header,
     HeaderContainer,
     Title,
     ViewMoreContent,
     ViewMoreLabel,
     Img

    } from './styles';

    import { TouchableOpacity } from 'react-native-gesture-handler';
    import home_cb from '../../Images/home-cb.png'

export default function Initial({navigation}){
    
    return (
        <>
        <Wrapper>
            <Header>
                <HeaderContainer>
                    <Title>Para ver os detalhes da aplicação, clique no botão abaixo.</Title>
                </HeaderContainer>
            </Header>
            <Img source={home_cb} resizeMode="contain"/>
            <ViewMoreContent>
                <TouchableOpacity 
                onPress ={()=> navigation.navigate('Home')}>
                    <ViewMoreLabel>ABRIR APLICAÇÃO</ViewMoreLabel>
                </TouchableOpacity>
            </ViewMoreContent>
        </Wrapper>
        </>
        
    )
}