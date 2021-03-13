import React from 'react'
import { Container, Option, Title, Img} from './styles'

import pix from '../../Images/pix.png'
import deposito from '../../Images/deposito.png'
import saque from '../../Images/saque.png'
import pagamento from '../../Images/pagamento.png'
import transfer from '../../Images/transfer.png'
import invest from '../../Images/invest.png'

const items = [
    {
        key: String(Math.random()),
        img: pix,
        title:'PIX',
        bgColor:'#fff',
    },
    {
        key: String(Math.random()),
        img: deposito,
        title:'Depositar',
        bgColor:'#fff',
    },
    {
        key: String(Math.random()),
        img: saque,
        title:'Sacar',
        bgColor:'#fff',
    },
    {
        key: String(Math.random()),
        img: pagamento,
        title:'Pagamentos',
        bgColor:'#fff',
    },
    {
        key: String(Math.random()),
        img: transfer,
        title:'Transferência',
        bgColor:'#fff',
    },
    {
        key: String(Math.random()),
        img: invest,
        title:'Investimentos',
        bgColor:'#fff',
    }
];

export default function Tips(){
    return(
        <Container> 
            {items.map((item) =>(
                
                <Option key={item.key} bgColor={item.bgColor} >
                <Img source={item.img}/>
                    <Title>{item.title}</Title>
                    
                </Option>
            ))}
        </Container>
    )
}