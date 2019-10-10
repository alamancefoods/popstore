import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BUTTON_SVG } from '../../constants/constants';
import { ReactComponent as CartIcon } from '../../static/cart.svg';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import svgResizer from '../../utilities/svgResizer';

export const ConditionalProfileLink = () => {
  const order = useSelector((state: any) => state.orderReducer.order);
  const display = useSelector((state: any) => state.displayReducer.display);
  let linkHolder = null;
  const { iconWidth, iconHeight } = svgResizer(display, BUTTON_SVG);

  if (order.totalCount < 5) {
    linkHolder = null;
  } else {
    linkHolder = <NavLink
      className={'headerIcon'}
      to='/checkout/shipping-details'>
      <CartIcon
        width={iconWidth}
        height={iconHeight}
      />
    </NavLink>;
  }
  return (
    linkHolder
  );
};
