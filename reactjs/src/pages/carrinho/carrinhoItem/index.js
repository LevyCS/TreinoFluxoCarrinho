import { useState } from 'react';

import Contador from '../contador'
import { Container, RemoverIcon } from './styled'

export default function CarrinhoItem(props) {
    const [produto, setProduto] = useState(props.info);

    const alterarQtd = (qtd) => {
        //atualiza a quantidade no produto
        setProduto({...produto, qtd})
        // chama a função atualizar do outro componente
        props.onUpdate(produto.id, qtd)
    }

    const remover = () => {
        props.onRemove(produto.id);
    }

    return (
        <Container>
            <div>
                <img className="capa" src={produto.imagem} alt="" />
                <Contador onChange={alterarQtd} value={produto.qtd} />
            </div>
            <div className="titulo"> {produto.titulo} </div>
            <div className="preco"> 
                <span>Preço unitário</span> <br /> 
                {produto.preco} 
            </div>
            <div className="qtd"> 
                <span>Qtd</span> <br /> 
                {produto.qtd} 
            </div>
            <div className="remover"> <RemoverIcon onClick={remover} /> </div>

        </Container>
    )
}