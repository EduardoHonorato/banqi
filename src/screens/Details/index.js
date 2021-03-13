import React from 'react';
import LottieView from 'lottie-react-native';

import { 
    LabelAmount,
    LabelText,
    Container,
    LabelAmountV,
    LabelTextDescription,
    LabelTitle
} from './styles'

export default function Detail({route}) {
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
        <Container>
        <LottieView 
        source={require('./payment.json')} 
        autoPlay 
        style={{
            width:250,
            height:250,
            marginTop:10
        }}
        />
        <LabelTitle>{route.params?.title}</LabelTitle>
        <LabelAmountV>Valor: <LabelAmount color={route.params?.color}>{route.params?.amount}</LabelAmount></LabelAmountV>
        <LabelTextDescription>{route.params?.description}</LabelTextDescription>

        <LabelText>Código da transação: {route.params?.transactionId}</LabelText>
        <LabelText>Data da transação: {route.params?.date}</LabelText>

        </Container>

  );
}
