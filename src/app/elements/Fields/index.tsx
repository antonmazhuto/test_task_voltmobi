// Core
import React, { ReactElement } from 'react';
import cx from 'classnames';
import {
  Field,
  WrappedFieldProps,
  WrappedFieldMetaProps,
  WrappedFieldArrayProps,
} from 'redux-form';

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

export const discounts = ({ fields }: WrappedFieldArrayProps): ReactElement => (
  <div className="custom-field-array-container">
    {fields.map((code, index) => (
      <div key={index.toString()} className="field-array-item">
        <Field
          name={code}
          type="text"
          component={customInput}
          label={`Discount Code #${index + 1}`}
          autoFocus
        />
        <button type="button" onClick={(): void => fields.remove(index)}>
          &times;
        </button>
      </div>
    ))}
    <button
      type="button"
      onClick={(): void => {
        fields.push('Value');
      }}
    >
      Add
      {' '}
      {!fields.length ? 'Discount Code(s)' : 'Another'}
    </button>
  </div>
);
