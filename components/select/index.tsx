type BaseProps = {
  className?: string;
  label: string;
  items: {
    name: string;
    value: string | number;
  }[];
  hasEmptyValue?: boolean;
  isLoadingOptions?: boolean;
};

type SelectProps = BaseProps &
  Omit<React.SelectHTMLAttributes<HTMLSelectElement>, keyof BaseProps>;

const Select = ({
  className = '',
  label,
  items,
  hasEmptyValue,
  isLoadingOptions,
  ...restProps
}: SelectProps) => {
  return (
    <div className={className}>
      <label htmlFor="countries" className="text-md mb-2 block text-gray-600">
        {label}
      </label>
      <select
        id="countries"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        {...restProps}
      >
        {hasEmptyValue && <option value=""></option>}
        {isLoadingOptions && (
          <option value="" disabled>
            Loading...
          </option>
        )}
        {items.map(({ name, value, ...optionProps }) => (
          <option key={value} value={value} {...optionProps}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
