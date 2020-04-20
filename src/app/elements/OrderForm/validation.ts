export const required = (value: string): undefined | string => (value ? undefined : 'Value is requied');
export const minLength = (value: string): undefined | string => (value.length < 4 ? 'Value must be at least 4 characters long' : undefined);
export const maxLength = (value: string): undefined | string => (value.length > 10 ? 'Value is too long' : undefined);
export const matchesPassword = (
  value: string,
  allValues: { password: string },
): undefined | string => (value === allValues.password ? undefined : 'Password must match');
export const asyncValidate = (values: { username: string }): Promise<undefined> => {
  const sleep = (ms: number): Promise<undefined> => new Promise((resolve) => setTimeout(resolve, ms));

  return sleep(1000).then(() => {
    const db = ['oliver', 'andrii'];
    if (db.includes(values.username)) {
      return Promise.reject({
        username: 'Username already taken',
      });
    }

    return undefined;
  });
};
