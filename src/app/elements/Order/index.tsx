// Core
import React, { FC, ReactElement } from 'react';

// Hooks
import { useOrder } from './hooks/useOrder';

// Components
import { OrderForm, FormProps } from '../OrderForm';

type PropTypes = {
  children?: never;
};

export const Order: FC<PropTypes> = (): ReactElement => {
  const { submit, clearOrder } = useOrder();

  const handleSubmit = (values: FormProps): void => {
    // eslint-disable-next-line no-alert
    submit(values);
  };

  const handleClear = (): void => {
    clearOrder();
  };

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    products: [],
    handleSubmit,
  };
  return (
    <OrderForm
      handleClear={handleClear}
      handleSubmit={handleSubmit}
      initialValues={initialValues}
    />
  );
};
