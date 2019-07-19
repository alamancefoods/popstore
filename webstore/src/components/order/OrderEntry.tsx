import React from 'react';
import { OrderEntryProps, OrderEntryValueTypes } from './types'
import { Formik, FormikActions, Form, ErrorMessage, Field } from 'formik';
import { StyledPopForm, StyledPopField, StyledPopFieldButton } from '../../styles/order/OrderStyles'
import * as Yup from 'yup';

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
    popCount
  } : OrderEntryProps ) => {


    const EntryDeleteButton = () => (
      <button onClick={() => removePopFromOrder(popFlavor) }>
        Remove Pop
      </button>
    )

    const FormEntry = () => (
      <Formik
        initialValues={{
          popCount: 0,
        }}
        validationSchema={OrderEntrySchema}
        onSubmit={(values: OrderEntryValueTypes , actions: FormikActions<OrderEntryValueTypes>)=> {
          updateOrder(values.popCount, popFlavor);}}
      >
        {({ errors, touched }) => (
          <StyledPopForm className={'className'}>
            <StyledPopField className={'className'} name="popCount" placeholder="Enter Value"/>
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
