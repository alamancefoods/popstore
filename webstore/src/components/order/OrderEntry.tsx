import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import POP_DICTIONARY, { TOTAL_POPS } from '../../constants/constants'
import { OrderEntryProps, OrderEntryValueTypes } from './types'
import { Formik, FormikActions, Form, ErrorMessage, Field } from 'formik';
import { StyledPopForm, StyledPopField, StyledPopFieldButton, StyledSVGEntry } from '../../styles/order/OrderStyles'
import * as Yup from 'yup';
import popConverter from '../../utilities/popConverter';
import { entrySVGViewBox } from '../../utilities/buttonViewBox';

const OrderEntrySchema = Yup.object().shape({
  popCount: Yup.number()
  .typeError('Please enter a numeric value!')
  .integer('Only whole numbers please!')
  .positive("Please stick with positive values!")
  .lessThan(1000, 'No more than 1000 unique pops per order please!')
})


const OrderEntry = (
  {
    popFlavor,
    updateOrder,
    removePopFromOrder,
    popCount,
    order
  } : OrderEntryProps ) => {


    const EntryDeleteButton = () => (
      <button onClick={() => removePopFromOrder(popFlavor) }>
        Remove Pop
      </button>
    )

    const PICKED_POP = popConverter(popFlavor);
    const themeContext = useContext(ThemeContext);
    const customViewBox = entrySVGViewBox(themeContext);

    const FormEntry = () => (
      <Formik
        initialValues={{
          popCount: order[POP_DICTIONARY[popFlavor]],
        }}
        validationSchema={OrderEntrySchema}
        onSubmit={(values: OrderEntryValueTypes , actions: FormikActions<OrderEntryValueTypes>)=> {
          updateOrder(values.popCount, popFlavor);}}
      >
        {({ errors, touched }) => (
          <StyledPopForm className={'className'}>
            <StyledSVGEntry viewBox={customViewBox}>{PICKED_POP!.svg}</StyledSVGEntry>
            <StyledPopField type="number" className={'className'} name="popCount" placeholder="0"/>
            <ErrorMessage name="popCount" />
            <StyledPopFieldButton type="submit">Submit</StyledPopFieldButton>
<p>{popCount} {popFlavor}'s</p>
          </StyledPopForm>
)}
      </Formik>
)

return(
  <div>
    <FormEntry />
    <EntryDeleteButton />
  </div>
)
}

export default OrderEntry
