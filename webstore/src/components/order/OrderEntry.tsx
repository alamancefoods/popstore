import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateChoice, updateOrder } from '../../redux/order/actions';
import { NO_CHOICE, BUTTON_SVG } from '../../constants/constants';
import { OrderEntryValueTypes } from './types';
import { Formik, FormikActions, Form, ErrorMessage, Field } from 'formik';
import { StyledPopForm, StyledPopField, StyledPopFieldButton, StyledFlavorIcon } from '../../styles/order/OrderStyles';
import * as Yup from 'yup';
import popConverter from '../../utilities/popConverter';
import svgResizer from '../../utilities/svgResizer';

const OrderEntrySchema = Yup.object().shape({
  popCount: Yup.number()
    .typeError('Please enter a numeric value!')
    .integer('Only whole numbers please!')
    .positive("Please stick with positive values!")
    .lessThan(1000, 'No more than 1000 unique pops per order please!')
});


const OrderEntry = () => {
  const order = useSelector((state: any) => state.orderReducer.order);
  const display = useSelector((state: any) => state.displayReducer.display);
  const choice = useSelector((state: any) => state.choiceReducer.choice);
  const dispatch = useDispatch();


  const EntryDeleteButton = () => (
    <button onClick={() => dispatch(updateChoice(NO_CHOICE))}>
      Remove Pop
      </button>
  );

  // Determine the correct SVG to use based on the picked pop state.
  const PICKED_POP = popConverter(choice);
  const FlavorIcon = PICKED_POP!.svg


  // Resize SVG according to display values.
  const { iconWidth, iconHeight } = svgResizer(display, BUTTON_SVG);

  // Customize theme for svg icon placement.
  const theme = {
    gridArea: 'Entry'
  };


  const FormEntry = () => (
    <Formik
      initialValues={{
        popCount: order[choice],
      }}
      validationSchema={OrderEntrySchema}
      onSubmit={(values: OrderEntryValueTypes, actions: FormikActions<OrderEntryValueTypes>) => {
        dispatch(updateOrder(choice, values.popCount));
        dispatch(updateChoice(NO_CHOICE));
      }}
    >
      {({ errors, touched }) => (
        <StyledPopForm className={'className'}>
          <StyledFlavorIcon
            theme={theme}
            component={
              <FlavorIcon
                width={iconWidth}
                height={iconHeight}
              />
            }
          />
          <StyledPopField type="number" className={'className'} name="popCount" placeholder="0" />
          <ErrorMessage name="popCount" />
          <StyledPopFieldButton type="submit">Submit</StyledPopFieldButton>
          <p>{order[choice]} {PICKED_POP!.popText}'s</p>
        </StyledPopForm>
      )}
    </Formik>
  );

  return (
    <div>
      <FormEntry />
      <EntryDeleteButton />
    </div>
  );
};

export default OrderEntry;

// width={iconWidth} height={iconHeight} 
