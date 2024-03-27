import { Option } from 'react-tailwindcss-select/dist/components/type';

export type FilterType = {
  designer_id?: string[] | undefined;
  brand_id?: string[] | undefined;
  category_id?: string[] | undefined;
};

export const formatFilters = ({
  designers,
  brands,
  categories,
}: {
  [key: string]: Option[] | null;
}) => ({
  ...(designers?.length
    ? {
        designer_id: designers?.map(
          (designer: { value: string }) => designer.value,
        ),
      }
    : {}),
  ...(brands?.length
    ? { brand_id: brands?.map((brand: { value: string }) => brand.value) }
    : {}),
  ...(categories?.length
    ? {
        category_id_contains: categories?.map(
          (category: { value: string }) => category.value,
        ),
      }
    : {}),
});
