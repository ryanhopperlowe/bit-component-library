import { ControllerProps, FieldValues } from 'react-hook-form';

type RhfFieldProps = Parameters<ControllerProps['render']>[0]['field'];

export type RhfControllerProps<
  TInput,
  TFieldValues extends FieldValues = FieldValues
> = Omit<ControllerProps<TFieldValues>, 'render'> & {
  inputProps?: Omit<TInput, keyof RhfFieldProps>;
};
export const Controller = () => null;
