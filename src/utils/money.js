const money = (element) => {
    return new Intl.NumberFormat('pt-BR',{
        style: 'currency', 
        currency: 'BRL'
    }).format(element)
}

export default money