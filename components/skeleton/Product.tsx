import Skeleton from '.';

const ProductSkeleton = () => {
  return (
    <div className="inline-block h-[346px] w-full rounded-lg p-2">
      <Skeleton className="inline-block h-72 w-72 rounded-xl" />
      <div className="my-1 flex h-7 items-center justify-between">
        <Skeleton className="h-6 w-1/2" />
        <Skeleton className="h-5 w-1/3" />
      </div>
    </div>
  );
};

export default ProductSkeleton;
