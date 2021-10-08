import { Link } from 'react-router-dom'
import { Container } from './styled'
import { useEffect, useState } from 'react'

import Cookie from 'js-cookie'
import CarrinhoItem from './carrinhoItem/'

export default function Carrinho() {
    const [produtos, setProdutos] = useState([]);

    const carregarCarrinho = () => {
        let carrinho = Cookie.get('carrinho');
        carrinho = carrinho !== undefined 
                      ? JSON.parse(carrinho) 
                      : [];

        setProdutos(carrinho);
    }

    const alterarItem = (id, qtd) => {
        // Função filter: cria um novo array somente com os itens que passaram na validação
        let produtoAlterado = produtos.filter(item => item.id === id)[0];
        produtoAlterado.qtd = qtd;

        Cookie.set('carrinho', JSON.stringify(produtos));
    }

    const removerItem = (id) => {
        let produtosNãoRemovidos = produtos.filter(item => item.id !== id)

        Cookie.set('carrinho', JSON.stringify(produtosNãoRemovidos));

        carregarCarrinho();
    }

    useEffect(carregarCarrinho, []);

    return (
        <Container>
            <h1> Carrinho </h1>

            <Link to="/"> Voltar </Link>

            <div className="itens">
            {produtos.map(item => 
                <CarrinhoItem key={item.id} 
                    info={item} 
                    onUpdate={alterarItem} 
                    onRemove={removerItem} />
            )}
            </div>
        </Container>
    )
}