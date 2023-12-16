import { Controller, FieldValues } from 'react-hook-form';
import { Select, SelectProps } from '@chakra-ui/react';
import { ComponentProps } from 'react';
import type { RhfControllerProps } from '../../controller';

type OptionType = Omit<ComponentProps<'option'>, 'children'> & {
  label: string;
  value: string | number;
};

export type RhfSelectProps<
  TFieldValues,
  TOption extends OptionType
> = RhfControllerProps<SelectProps, TFieldValues> & {
  options: TOption[];
};

export function RhfSelect<T extends FieldValues, TOption extends OptionType>({
  inputProps = {},
  options,
  ...rest
}: RhfSelectProps<T, TOption>) {
  return (
    <Controller
      {...rest}
      render={({ field }) => (
        <Select {...inputProps} {...field}>
          {options.map((option) => (
            <option key={option.value} {...option}>
              {option.label}
            </option>
          ))}
        </Select>
      )}
    />
  );
}
