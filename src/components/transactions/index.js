import React from 'react'

import { 
    Label, 
    ContainerTransactions,
    TransactionContainer,
    TransactionText,
    TransactionTitle,
    TransactionDescription,
    TransactionAmount,
    AmountTitle,

} from './styles'


import {transactions} from '../../screens/Transactions/transactions.json'

export default function Transactions({navigation}){
    function numberToMoney(amount, simbol = 'R$ ', decimalCount = 2, decimal 
    = ",", thousands = ".") {
    decimalCount = Math.abs(decimalCount)
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount
 
    const negativeSign = amount < 0 ? "-" : "+"
 
    const i = parseInt(amount = Math.abs(Number(amount) || 
              0).toFixed(decimalCount)).toString()
    const j = (i.length > 3) ? i.length % 3 : 0
 
    return simbol + negativeSign + (j ? i.substr(0, j) + thousands : '') + 
    i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? 
    decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "")
 };

 function getParsedDate(strDate){
    var strSplitDate = String(strDate).split(' ');
    var date = new Date(strSplitDate[0]);
    // alert(date);
    var dd = date.getDate();
    var mm = date.getMonth() + 1; //January is 0!

    var yyyy = date.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    date =  dd + "/" + mm + "/" + yyyy;
    return date.toString();
}
    return(
       <>
        <ContainerTransactions> 
            
        <Label>Histórico de transações</Label>
        {transactions.slice(0,3).map((item) =>(
                <TransactionContainer key={item._id}>
                    <TransactionText>
                        <TransactionTitle>{item.description}</TransactionTitle>
                        <TransactionDescription color={item.color}>{item.textDescription}</TransactionDescription>
                        <TransactionDescription color="#ccc">{getParsedDate(item.date)}</TransactionDescription>
                    </TransactionText>
                    <TransactionAmount>
                    <AmountTitle color={item.color}>{numberToMoney(item.amount)}</AmountTitle>
                    </TransactionAmount>
                </TransactionContainer>
        ))}
        </ContainerTransactions>
        </>
    )
}