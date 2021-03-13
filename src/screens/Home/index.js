import React, {useState} from 'react'

import { Feather, Entypo, Fontisto } from '@expo/vector-icons'

import {
     Wrapper,
     Header,
     HeaderContainer,
     Title,
     BalanceContainer,
     Value,
     Bold,
     EyeButton,
     Loan,
     Card,
     CardBody,
     CardDetails,
     CardTitle,
     CardInfo,
     Img,
     ViewMoreContent,
     ViewMoreLabel,
     HeaderLogo,
     ImgLogo

    } from './styles';

    import Tips from '../../components/Tips'
    import Transactions from '../../components/transactions'
    import loan from '../../Images/loan.png'
    import Data from '../../components/transactions/transactions.json'
    import { TouchableOpacity } from 'react-native-gesture-handler';

    import images from '../../components/params/images'
    import colors from '../../components/params/colors';



export default function Home({navigation}){
    const [isVisible, setIsVisible] = useState(true);

    function handleToggleVisibility(){
        setIsVisible((prevState)=> !prevState);
    }

    const Amount = Data.balance;

    function numberToMoney(amount, simbol = 'R$ ', decimalCount = 2, decimal 
    = ",", thousands = ".") {
    decimalCount = Math.abs(decimalCount)
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount
 
    const negativeSign = amount < 0 ? "-" : ""
 
    const i = parseInt(amount = Math.abs(Number(amount) || 
              0).toFixed(decimalCount)).toString()
    const j = (i.length > 3) ? i.length % 3 : 0
 
    return simbol + negativeSign + (j ? i.substr(0, j) + thousands : '') + 
    i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? 
    decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "")
 };

    return (
        <>

        <Wrapper>
            <Header>
                <HeaderLogo>
                    <ImgLogo source={images.logo} style={{width:160, height:30}} resizeMode="cover"/>
                    <Entypo name="chevron-down" size={30} color={colors.primary} style={{marginLeft:-140}}/>
                    <Fontisto name="bell" size={30} color={colors.primary} style={{marginRight:15}}/>
                </HeaderLogo>
                <HeaderContainer>
                    <Title>Meu saldo:</Title>

                    <BalanceContainer>
                        <Value>
                             <Bold> {isVisible? numberToMoney(Amount) : 'R$ -------'}</Bold>
                        </Value>
                        <EyeButton onPress={handleToggleVisibility}>
                            <Feather name={isVisible ? 'eye-off': 'eye'} size={28} color="#000" />
                        </EyeButton>
                    </BalanceContainer>          
                </HeaderContainer>
            </Header>

            <Tips/>

        <Loan>           
            <Card>
                <TouchableOpacity >
                    <CardBody>
                    <Img source={loan} resizeMode="contain" style={{height:50}}/>
                        <CardDetails>
                            <CardTitle>
                                Empréstimo pessoal
                            </CardTitle>
                            <CardInfo>
                                Você tem R$ 500,00 pré-aprovados!
                            </CardInfo>
                        </CardDetails>
                    </CardBody>
                </TouchableOpacity>
            </Card>
        </Loan>
        <Transactions />
        <ViewMoreContent>
            <TouchableOpacity 
            onPress ={()=> navigation.navigate('Transactions')}
            style={{flex:1, background:'#fff', width: 100, height:50}}
            >
                <ViewMoreLabel>VER MAIS</ViewMoreLabel>
            </TouchableOpacity>
        </ViewMoreContent>
        </Wrapper>
        </>
        
    )
}