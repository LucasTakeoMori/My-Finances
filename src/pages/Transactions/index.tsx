import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighLight variant="income">R$ 12.000,00</PriceHighLight>
              </td>
              <td> Venda </td>
              <td>13/04/2023</td>
            </tr>
            <tr>
              <td width="50%">Creatina</td>
              <td>
                <PriceHighLight variant="outcome"> - $ 89,00 </PriceHighLight>
              </td>
              <td> Consumos </td>
              <td> 11/04/2023 </td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
