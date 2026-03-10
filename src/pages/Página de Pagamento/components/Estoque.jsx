import styles from './Estoque.module.css';

export function Estoque() {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>Produtos em Estoque</h2>

           

            <div className={styles.tableRolagem}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Produto</th>
                            <th>Quantidade</th>
                            <th>Valor unitário(R$)</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>001</th>
                            <th>Memória RAM</th>
                            <th>10</th>
                            <th>R$1.000</th>   
                        
                        </tr>
                         <tr>
                            <th>002</th>
                            <th>Placa-Mãe</th>
                            <th>10</th>
                            <th>R$500</th>   
                        
                        </tr>
                         <tr>
                            <th>003</th>
                            <th>RX580</th>
                            <th>10</th>
                            <th>R$400</th>   
                        
                        </tr>
                         <tr>
                            <th>089</th>
                            <th>I5 14700K</th>
                            <th>10</th>
                            <th>R$3.600</th>   
                        
                        </tr>
                         <tr>
                            <th>032</th>
                            <th>Intel Pentium 4</th>
                            <th>4</th>
                            <th>R$24,99</th>   
                        
                        </tr>
                        <tr>
                            <th>055</th>
                            <th>GTX 1080 TI</th>
                            <th>10</th>
                            <th>R$1.800</th>   
                        
                        </tr>
                        <tr>
                            <th>009</th>
                            <th>Fonte Mancer 1000v</th>
                            <th>5</th>
                            <th>R$150</th>   
                        
                        </tr>
                        <tr>
                            <th>016</th>
                            <th>Gabinete</th>
                            <th>5</th>
                            <th>R$100</th>   
                        </tr>
                        <tr>
                            <th>067</th>
                            <th>Monitor Pichau 1000hz</th>
                            <th>5</th>
                            <th>R$11.000</th>   
                        
                        </tr>
                    </tbody>
                </table>
            </div>

          
        </div>
    )
}