import Select from 'react-tailwindcss-select';
import type { SelectProps } from 'react-tailwindcss-select/dist/components/type';
import Spinner from '../spinner';

type BaseProps = {
  className?: string;
  label: string;
  isLoadingOptions?: boolean;
};

type MultiSelectProps = BaseProps &
  SelectProps &
  Omit<SelectProps, 'isMultiple' | 'primaryColor'>;

const MultiSelect = ({
  className,
  label,
  isLoadingOptions,
  ...props
}: MultiSelectProps) => {
  return (
    <div className={className}>
      <p className="text-md mb-2 block text-gray-600">{label}</p>
      {isLoadingOptions ? (
        <Spinner size="small" />
      ) : (
        <Select {...props} primaryColor="blue" isMultiple />
      )}
    </div>
  );
};

export default MultiSelect;
