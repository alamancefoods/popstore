import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateChoice, updateOrder } from '../../redux/order/actions';
import { NO_CHOICE, BUTTON_SVG, PLUS_SVG, MINUS_SVG } from '../../constants/constants';
import { OrderEntryValueTypes } from './types';
import { Formik, FormikActions, ErrorMessage } from 'formik';
import {
  StyledPopForm,
  StyledPopField,
  StyledFlavorSubmitButton,
  StyledFlavorChoice,
  StyledFlavorName,
  ValueSubmissionContainer,
  AlertContainer,
  StyledPlusIcon,
  StyledMinusIcon,
  StyledFlavorDeleteButton
} from '../../styles/order/OrderStyles';
import * as Yup from 'yup';
import popConverter from '../../utilities/popConverter';
import svgResizer from '../../utilities/svgResizer';

const OrderEntrySchema = Yup.object().shape({
  popCount: Yup.number()
    .typeError('Please enter a numeric value!')
    .integer('Only whole numbers please!')
    .moreThan(-1, "Please enter zero or a positive value!")
    .lessThan(1000, 'No more than 1000 unique pops per order please!')
});


const OrderEntry = () => {
  const order = useSelector((state: any) => state.orderReducer.order);
  const display = useSelector((state: any) => state.displayReducer.display);
  const choice = useSelector((state: any) => state.choiceReducer.choice);
  const siteLocation = useSelector((state: any) => state.locationReducer.location);
  const dispatch = useDispatch();
  const choiceCount = order[choice];


  // Determine the correct SVG to use based on the picked pop state.
  const PICKED_POP = popConverter(choice);
  const FlavorIcon = PICKED_POP!.svg


  // Resize Flavor SVG according to display values.
  const { iconWidth, iconHeight } = svgResizer(display, BUTTON_SVG);

  // Resize PLUS Svg.
  const { iconWidth: plusIconWidth, iconHeight: plusIconHeight } = svgResizer(display, PLUS_SVG);

  // Resize Minus Svg.
  const { iconWidth: minusIconWidth, iconHeight: minusIconHeight } = svgResizer(display, MINUS_SVG);
  // Customize theme for svg icon placement.
  const theme = {
    gridArea: 'selection'
  };

  const selectionAddOne = () => {
    let newChoice = choiceCount + 1;
    console.log(siteLocation);
    dispatch(updateOrder(choice, newChoice));
  };

  const selectionMinusOne = () => {
    if (choiceCount > 0) {
      let newChoice = choiceCount - 1;
      dispatch(updateOrder(choice, newChoice));
    }
  };

  const removeItem = () => {
    dispatch(updateOrder(choice, 0));
    dispatch(updateChoice(NO_CHOICE));
  };


  const FormEntry = () => (

    <Formik
      initialValues={{
        popCount: "",
      }}
      validationSchema={OrderEntrySchema}
      onSubmit={(values: OrderEntryValueTypes, actions: FormikActions<OrderEntryValueTypes>) => {
        let parsedNum = parseInt(values.popCount);
        if (isNaN(parsedNum)) {
        } else if (parsedNum === order[choice]) {
        } else {
          dispatch(updateOrder(choice, parsedNum));
        };
        dispatch(updateChoice(NO_CHOICE));
      }}
    >
      {({ errors, touched }) => (
        <StyledPopForm className={'className'}>
          <StyledFlavorChoice
            theme={theme}
            component={
              <FlavorIcon
                width={iconWidth}
                height={iconHeight}
              />
            }
          />

          <StyledFlavorName>{PICKED_POP!.popText}</StyledFlavorName>

          <StyledMinusIcon
            width={minusIconWidth}
            height={minusIconHeight}
            onClick={selectionMinusOne}
          />
          <StyledPopField
            type="number"
            className={'className'}
            name="popCount"
            placeholder={order[choice]}
          />
          <StyledPlusIcon
            width={plusIconWidth}
            height={plusIconHeight}
            onClick={selectionAddOne}
          />

          <ValueSubmissionContainer>
            <StyledFlavorSubmitButton
              type="submit">
              Submit
            </StyledFlavorSubmitButton>
            <StyledFlavorDeleteButton onClick={removeItem}>
              Delete
            </StyledFlavorDeleteButton>
          </ValueSubmissionContainer>

          <AlertContainer >
            <ErrorMessage name="popCount" />
          </AlertContainer>

        </StyledPopForm>
      )}
    </Formik>
  );

  return (
    <>
      <FormEntry />
    </>
  );
};

export default OrderEntry;

// width={iconWidth} height={iconHeight} 
