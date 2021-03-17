import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
    useEffect(() => {
        api.get('http://localhost:3000/api/transactions')
            .then( response => console.log(response.data))
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categorias</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td className="deposit">R$12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>15/03/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">R$2.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>15/03/2021</td>
                    </tr>
                    <tr>
                        <td>Compras</td>
                        <td className="withdraw">R$500,00</td>
                        <td>Desenvolvimento</td>
                        <td>15/03/2021</td>
                    </tr>
                </tbody>
            </table>  
        </Container>
    )
}