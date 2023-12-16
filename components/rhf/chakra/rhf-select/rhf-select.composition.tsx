import { useForm } from 'react-hook-form';
import { RhfSelect } from './rhf-select';

const OPTIONS = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
];

export const BasicRhfSelect = () => {
  const form = useForm({ defaultValues: { option: OPTIONS[0].value } });

  return (
    <>
      <p>SelectedValue: {form.watch('option')}</p>
      <RhfSelect options={OPTIONS} control={form.control} name="option" />
    </>
  );
};
