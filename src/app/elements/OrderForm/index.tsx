// Core
import React, { ReactElement } from 'react';
import {
  Field, reduxForm, FieldArray, InjectedFormProps,
} from 'redux-form';
import capitalize from 'capitalize';

// Custom Fields
import { customInput, discounts } from '../Fields';

// Validators
import { required, asyncValidate } from './validation';

// Styles
import './styles.module.css';

export interface FormProps {
  firstName: string;
  surname: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export interface DispatchProps {
  handleSubmit: (values: FormProps) => void;
}

const OrderComponent = ({
  handleSubmit,
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
    <button type="submit">Оформить</button>
  </form>
);

export const OrderForm = reduxForm<FormProps, DispatchProps>({
  form: 'order',
  asyncValidate,
  asyncBlurFields: ['email'],
})(OrderComponent);
