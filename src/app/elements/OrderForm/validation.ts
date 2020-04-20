export const required = (value: string): undefined | string => (value ? undefined : 'Значение обязательно');
export const minLength = (value: string): undefined | string => (value.length < 4 ? 'Значение должно быть больше 4 символов' : undefined);
export const maxLength = (value: string): undefined | string => (value.length > 10 ? 'Значение очень длинное' : undefined);
