import React from 'react';
import { useSelector } from 'react-redux';
import { CART_SVG } from '../../constants/constants';
import { useHistory } from 'react-router-dom';
import { ReactComponent as CartIcon } from '../../static/cart.svg';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import svgResizer from '../../utilities/svgResizer';

export const ConditionalProfileLink = () => {
  const order = useSelector((state: any) => state.orderReducer.order);
  const display = useSelector((state: any) => state.displayReducer.display);
  let history = useHistory();
  let linkHolder = null;
  const { iconWidth, iconHeight } = svgResizer(display, CART_SVG);

  const handleClick = () => {
    setTimeout(() => history.push("/checkout/shipping-details"), 500);
  };

  if (order.totalCount < 5) {
    linkHolder = null;
  } else {
    linkHolder =
      <CartIcon
        width={iconWidth}
        height={iconHeight}
        onClick={handleClick}
      />;
  }
  return (
    linkHolder
  );
};
