import React from 'react';
import { Formik, FormikActions, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';

const OrderEntrySchema = Yup.object().shape({
  popCount: Yup.number()
  .typeError('Please enter a numeric value!')
  .integer('Only whole numbers please!')
  .positive("Let's stay positive!")
  .lessThan(1000, 'No more than 1000 unique pops per order please!')
})

interface OrderEntryValues {
  popCount: number
}

const OrderEntry = (
  {
    popFlavor,
    updateOrder,
    removePopFromOrder,
    popCount
  } : {
    popFlavor: string,
    updateOrder: (popcount: number, popFlavor: string) => void,
    removePopFromOrder: (popFlavor: string) => void,
    popCount: number
  }) => {


    const EntryDeleteButton = () => (
      <button onClick={() => removePopFromOrder(popFlavor) }>
        Remove Pop
      </button>
    )

    const FormEntry = () => (
      <Formik
        initialValues={{
          popCount: popCount,
        }}
        validationSchema={OrderEntrySchema}
        onSubmit={(values: OrderEntryValues, actions: FormikActions<OrderEntryValues>)=> {
          updateOrder(values.popCount, popFlavor);}}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="popCount" />
            <ErrorMessage name="popCount" />
            <button type="submit">Submit</button>
            <p>{popCount} {popFlavor}'s</p>
          </Form>
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
