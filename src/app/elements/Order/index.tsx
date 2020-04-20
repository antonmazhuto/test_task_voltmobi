// // Core
// import React, { FC, ReactElement } from 'react';
//
// // Components
// import { OrderForm, FormProps } from '../OrderForm';
//
// type PropTypes = {
//   children?: never;
// };
//
// export const Order: FC<PropTypes> = (): ReactElement => {
//   const handleSubmit = (values: FormProps): void => {
//     // eslint-disable-next-line no-alert
//     window.alert(JSON.stringify(values, null, 4));
//   };
//
//   const initialValues = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     products: '',
//     handleSubmit,
//   };
//   return <OrderForm handleSubmit={handleSubmit} initialValues={initialValues} />;
// };

// Core
import React, { FC, ReactElement } from 'react';
import { Formik, Form, Field } from 'formik';
import cx from 'classnames';
import MaskedInput, { MaskedInputProps } from 'react-text-mask';

// Instruments
import Styles from './styles.module.css';

// Hooks
import { useOrder } from './hooks/useOrder';

type PropTypes = {
  children?: never;
};

export const Order: FC<PropTypes> = (): ReactElement => {
  const {
    order, isFetching, submit, clearOrder,
  } = useOrder();

  const buttonMessage = isFetching ? 'Оформление...' : 'Оформить заказ';

  const disabledStyle = cx({
    [Styles.disabled]: isFetching,
  });

  const phoneNumberMask = [
    '8',
    '(',
    /[1-9]/,
    /\d/,
    /\d/,
    ')',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ];

  return (
    <section className={Styles.order}>
      <Formik
        initialValues={order}
        render={(): ReactElement => (
          <Form>
            <Field
              className={disabledStyle}
              disabled={isFetching}
              name="firstName"
              type="text"
              placeholder="Имя"
            />
            <Field
              className={disabledStyle}
              disabled={isFetching}
              name="lastName"
              type="text"
              placeholder="Фамилия"
            />
            <Field
              className={disabledStyle}
              disabled={isFetching}
              name="email"
              type="text"
              placeholder="Email"
            />
            <Field
              name="phone"
              render={(field: MaskedInputProps): ReactElement => (
                <MaskedInput
                  {...field}
                  className={disabledStyle}
                  disabled={isFetching}
                  mask={phoneNumberMask}
                  id="phone"
                  name="phone"
                  placeholder="Номер телефона"
                  type="text"
                />
              )}
            />
            <div>
              <button className={disabledStyle} disabled={isFetching} type="submit">
                {buttonMessage}
              </button>
              <button type="button" onClick={clearOrder}>
                Очистить
              </button>
            </div>
          </Form>
        )}
        onSubmit={submit}
      />
    </section>
  );
};
