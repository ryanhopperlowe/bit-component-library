import { useForm } from 'react-hook-form';
import { RhfInput } from './rhf-input';

export const BasicRhfInput = () => {
  const form = useForm({ defaultValues: { name: 'test' } });

  return <RhfInput name="name" control={form.control} />;
};
