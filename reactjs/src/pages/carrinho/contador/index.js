import { useEffect, useState } from 'react'
import { Container } from './styled;'

export default function Contador(props) {

    const [qtd, setQtd] = useState(props.value)

    const decrementar = () => {
        if (qtd === 1)
            return;
        setQtd(qtd - 1)
    }
    
    const incrementar = () => {
        setQtd(qtd + 1)
    }

    useEffect(() => {
        // Chama o pai (função que está ligada ao onChange) quando a variavel de estado qtd for alterada
        props.onChange(qtd);

    }, [qtd])

    return (
        <Container>
            <div className="menos" onClick={decrementar}> - </div>
            <div className="quantidade"> {qtd} </div>
            <div className="mais" onClick={incrementar}> + </div>
        </Container>
    )
}