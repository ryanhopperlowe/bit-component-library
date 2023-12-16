import { Controller, FieldValues } from 'react-hook-form';
import { Input, InputProps } from '@chakra-ui/react';
import { RhfControllerProps } from '../../controller';

export type RhfInputProps<T> = RhfControllerProps<InputProps, T>;

export function RhfInput<T extends FieldValues>({
  inputProps = {},
  ...rest
}: RhfInputProps<T>) {
  return (
    <Controller
      {...rest}
      render={({ field }) => <Input {...field} {...inputProps} />}
    />
  );
}
