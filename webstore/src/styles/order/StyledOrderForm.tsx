import styled from 'styled-components';
import OrderForm from '../../components/order/OrderForm'

const StyledOrderForm = styled(OrderForm)`
display: flex;
flex-direction: column;
grid-area: firstRowBreak / firstColBreak / bottom / secondColBreak;
`
export default StyledOrderForm;
