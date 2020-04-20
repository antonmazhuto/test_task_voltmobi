// Core
import React, { ReactElement } from 'react';
import cx from 'classnames';
import {
  WrappedFieldProps,
  WrappedFieldMetaProps,
} from 'redux-form';
import MaskedInput from 'react-text-mask';

type CustomFieldProps = {
  type?: string;
  label?: string;
};

type CustomFieldType = WrappedFieldProps & CustomFieldProps;

const getValidityClassName = (meta: WrappedFieldMetaProps): undefined | string => {
  if (meta.asyncValidating) {
    return 'async-validating';
  }

  if (meta.active) {
    return undefined;
  }

  if (meta.touched && meta.invalid) {
    return 'invalid';
  }

  if (meta.touched && meta.valid) {
    return 'valid';
  }

  return undefined;
};

export const customInput = (props: CustomFieldType): ReactElement => {
  const {
    label, input, type, meta,
  } = props;

  return (
    <div
      className={cx(
        'custom-input-container',
        { 'flex-row-reverse': type === 'checkbox' },
        { dirty: meta.dirty },
        getValidityClassName(meta),
      )}
    >
      <label htmlFor="currentInput">{label}</label>
      <input {...input} type={type} id="currentInput" />
      {meta.error && meta.touched && !meta.active && (
        <div className="feedback-text error-text">{meta.error}</div>
      )}
    </div>
  );
};

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

export const numberInput = (props: CustomFieldType): ReactElement => {
  const {
    label, input, type, meta,
  } = props;
  return (
    <div
      className={cx(
        'custom-input-container',
        { 'flex-row-reverse': type === 'checkbox' },
        { dirty: meta.dirty },
        getValidityClassName(meta),
      )}
    >
      <label htmlFor="currentInput">{label}</label>
      <MaskedInput {...input} type={type} id="numberInput" mask={phoneNumberMask} />
      {meta.error && meta.touched && !meta.active && (
        <div className="feedback-text error-text">{meta.error}</div>
      )}
    </div>
  );
};
