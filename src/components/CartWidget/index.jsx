import { Icon } from '@iconify/react';

function cartWidget() {
  return (
    <div className="cart-widget carrito">
      <Icon icon="material-symbols:shopping-cart" />
      <span className="cart-count numeroCarrito">1</span>
    </div>
  );
}

export default cartWidget;
