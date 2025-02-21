import Select from 'react-tailwindcss-select';
import type { SelectProps } from 'react-tailwindcss-select/dist/components/type';
import Skeleton from '../skeleton';

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
      <p className="text-md text-color-text-secondary mb-2 block">{label}</p>
      {isLoadingOptions ? (
        <Skeleton className="h-[38px] w-full" />
      ) : (
        <Select {...props} primaryColor="blue" isMultiple />
      )}
    </div>
  );
};

export default MultiSelect;
