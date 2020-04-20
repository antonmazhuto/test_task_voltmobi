// Core
import React, { ReactElement } from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import capitalize from 'capitalize';
import { validate } from './validate';

// Custom Fields
import { customInput, numberInput } from '../Fields';

// Validators
import { required } from './validation';

// Types
import { Product } from '../../bus/feed/types';

// Styles
import './styles.module.css';

export interface FormProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  products: Product[];
}

export interface DispatchProps {
  handleSubmit: (values: FormProps) => void;
  handleClear: () => void;
}

const OrderComponent = ({
  handleSubmit,
  handleClear,
  pristine,
  submitting,
}: DispatchProps & InjectedFormProps<FormProps, DispatchProps>): ReactElement => (
  <form onSubmit={handleSubmit}>
    <Field
      name="firstName"
      component={customInput}
      label="Имя"
      type="text"
      validate={[required]}
      normalize={capitalize}
    />
    <Field
      name="lastName"
      component={customInput}
      label="Фамилия"
      type="text"
      validate={[required]}
      normalize={capitalize}
    />
    <Field name="email" component={customInput} label="Email" type="email" validate={[required]} />
    <Field
      name="phone"
      component={numberInput}
      label="Номер телефона"
      type="text"
      valodate={[required]}
    />
    <button type="submit" disabled={pristine || submitting}>
      Оформить
    </button>
    <button type="button" onClick={handleClear}>
      Очистить
    </button>
  </form>
);

export const OrderForm = reduxForm<FormProps, DispatchProps>({
  form: 'order',
  validate,
})(OrderComponent);
