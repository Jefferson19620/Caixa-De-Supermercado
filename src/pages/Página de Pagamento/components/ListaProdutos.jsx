import { useState, useEffect } from "react";
import styles from "./ListaProdutos.module.css";

const estoque = [
    { codigo: "001", produto: "Memória RAM", valor: 1000.00 },
    { codigo: "002", produto: "Placa-Mãe", valor: 500.00 },
    { codigo: "003", produto: "RX580", valor: 400.00 },
    { codigo: "089", produto: "I5 14700K", valor: 3600.00 },
    { codigo: "032", produto: "Intel Pentium 4", valor: 24.99 },
    { codigo: "055", produto: "GTX 1080 TI", valor: 1800.00 },
    { codigo: "009", produto: "Fonte Mancer 1000v", valor: 150.00 },
    { codigo: "016", produto: "Gabinete", valor: 100.00 },
    { codigo: "067", produto: "Monitor Pichau 1000hz", valor: 11000.00 },
];

export function GerarNota(navigate) {
    navigate("/NotaFiscal");
}

export function ListaProdutos({ setTotalVenda, setCarrinhoTotal, finalizarVenda }) {
    const [busca, setBusca] = useState("");
    const [carrinho, setCarrinho] = useState([]);


    const adicionarProduto = () => {
        const produtoEncontrado = estoque.find((item) => item.codigo === busca);

        if (produtoEncontrado) {
            const jaExiste = carrinho.find(item => item.codigo === produtoEncontrado.codigo);

            if (jaExiste) {
                setCarrinho(carrinho.map(item =>
                    item.codigo === busca
                        ? { ...item, quantidade: item.quantidade + 1 }
                        : item
                ));
            } else {
                setCarrinho([...carrinho, { ...produtoEncontrado, quantidade: 1 }]);
            }
        }
    };

    const formatarMoeda = (valor) => {
        return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    };

    const removerProduto = (codigo) => {
        const novoCarrinho = carrinho.filter((item) => item.codigo !== codigo);
        setCarrinho(novoCarrinho);
    };

    const valorTotalGeral = carrinho.reduce((acc, item) => acc + (item.valor * item.quantidade), 0);

    useEffect(() => {
        setTotalVenda(valorTotalGeral);
        setCarrinhoTotal(carrinho);
    }, [carrinho, setCarrinhoTotal, valorTotalGeral, setTotalVenda])

    function confirmarPagamento() {
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        localStorage.setItem("total", valorTotalGeral);

        finalizarVenda();
    }

    return (
        <div className={styles.card}>
            <h2 className={styles.title}>Lista de Produtos</h2>

            <div className={styles.searchContainer}>
                <input type="text" placeholder="Digite o código do produto..." className={styles.searchInput} value={busca} onChange={(e) => setBusca(e.target.value)}
                />
                <button className={styles.searchButton} onClick={adicionarProduto}>+</button>
            </div>

            <div className={styles.tableRolagem}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Produto</th>
                            <th>Quantidade</th>
                            <th>Valor unitário(R$)</th>
                            <th>Valor total(R$)</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carrinho.map((item, index) => (
                            <tr key={index}>
                                <th>{item.produto}</th>
                                <th>{item.quantidade}</th>
                                <th>{formatarMoeda(item.valor)}</th>
                                <th>{formatarMoeda(item.valor * item.quantidade)}</th>
                                <th>
                                    <button onClick={() => removerProduto(item.codigo)} className={styles.removeButton}>Remover</button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className={styles.footer}>
                <div className={styles.pagamento}>
                    <h3>Método de Pagamento:</h3>
                    <div className={styles.gridPagamento}>
                        <button className={styles.btnPagamento}>PIX</button>
                        <button className={styles.btnPagamento}>Débito</button>
                        <button className={styles.btnPagamento}>Dinheiro</button>
                        <button className={styles.btnPagamento}>Crédito</button>
                    </div>
                </div>

                <div className={styles.totais}>
                    <div className={styles.totalBox}>
                        <span>Valor Total:</span>
                        <p>{formatarMoeda(valorTotalGeral)}</p>
                    </div>
                    <div className={styles.trocoBox}>

                        <button className={styles.btnConfirma} onClick={confirmarPagamento} >Confirmar Pagamento</button>

                    </div >
                </div >
            </div >
        </div >
    );
}