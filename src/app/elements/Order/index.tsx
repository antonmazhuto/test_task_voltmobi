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

// // Core
// import React, { FC, ReactElement } from 'react';
// import { Formik, Form, Field } from 'formik';
// import cx from 'classnames';
// import MaskedInput, { MaskedInputProps } from 'react-text-mask';
//
// // Instruments
// import Styles from './styles.module.css';
//
// // Hooks
// import { useOrder } from './hooks/useOrder';
// import { OrderForm, FormProps } from '../OrderForm';
//
// type PropTypes = {
//   children?: never;
// };
//
// export const Order: FC<PropTypes> = (): ReactElement => {
//   const {
//     order, isFetching, submit, clearOrder,
//   } = useOrder();
//
//   const buttonMessage = isFetching ? 'Оформление...' : 'Оформить заказ';
//
//   const disabledStyle = cx({
//     [Styles.disabled]: isFetching,
//   });
//
//
//   const initialValues = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     number: '',
//     products: [],
//     submit,
//   };
//
//     const handleSubmit = (values: FormProps): void => {
//         // eslint-disable-next-line no-alert
//         submit(values)
//     };
//
//   return (
//     <section className={Styles.order}>
//       <OrderForm handleSubmit={submit} initialValues={initialValues} />
//       {/* <Formik */}
//       {/*  initialValues={order} */}
//       {/*  render={(): ReactElement => ( */}
//       {/*    <Form> */}
//       {/*      <Field */}
//       {/*        className={disabledStyle} */}
//       {/*        disabled={isFetching} */}
//       {/*        name="firstName" */}
//       {/*        type="text" */}
//       {/*        placeholder="Имя" */}
//       {/*      /> */}
//       {/*      <Field */}
//       {/*        className={disabledStyle} */}
//       {/*        disabled={isFetching} */}
//       {/*        name="lastName" */}
//       {/*        type="text" */}
//       {/*        placeholder="Фамилия" */}
//       {/*      /> */}
//       {/*      <Field */}
//       {/*        className={disabledStyle} */}
//       {/*        disabled={isFetching} */}
//       {/*        name="email" */}
//       {/*        type="text" */}
//       {/*        placeholder="Email" */}
//       {/*      /> */}
//       {/*      <Field */}
//       {/*        name="phone" */}
//       {/*        render={(field: MaskedInputProps): ReactElement => ( */}
//       {/*          <MaskedInput */}
//       {/*            {...field} */}
//       {/*            className={disabledStyle} */}
//       {/*            disabled={isFetching} */}
//       {/*            mask={phoneNumberMask} */}
//       {/*            id="phone" */}
//       {/*            name="phone" */}
//       {/*            placeholder="Номер телефона" */}
//       {/*            type="text" */}
//       {/*          /> */}
//       {/*        )} */}
//       {/*      /> */}
//       {/*      <div> */}
//       {/*        <button className={disabledStyle} disabled={isFetching} type="submit"> */}
//       {/*          {buttonMessage} */}
//       {/*        </button> */}
//       {/*        <button type="button" onClick={clearOrder}> */}
//       {/*          Очистить */}
//       {/*        </button> */}
//       {/*      </div> */}
//       {/*    </Form> */}
//       {/*  )} */}
//       {/*  onSubmit={submit} */}
//       {/* /> */}
//     </section>
//   );
// };
