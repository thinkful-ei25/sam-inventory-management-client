export const required = value => value ? undefined : 'Required';

export const notEmpty = value => value.trim() !=='' ? undefined : 'Field cannot be empty';

export const onlyNumbers = value => !isNaN(value) ? undefined : 'Value is not a number!';

export const notZero = value => parseInt(value,10)!==0 ? undefined: 'Value cannot be 0!';