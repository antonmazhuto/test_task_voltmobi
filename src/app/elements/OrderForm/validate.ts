import { Product } from '../../bus/feed/types';

// type ErrorsType = {
//     firstName: string;
//     lastName: string;
//     email: string;
//     phone: string;
// }
type ErrorsType = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const validate = (values: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  products: Product[];
}) => {
  const errors = {} as ErrorsType;
  if (values.firstName === '') {
    errors.firstName = 'Required';
  }
  if (values.lastName === '') {
    errors.lastName = 'Required';
  }
  if (values.email === '') {
    errors.email = 'Required';
  }
  if (values.phone === '') {
    errors.phone = 'Required';
  }
  return errors;
};
