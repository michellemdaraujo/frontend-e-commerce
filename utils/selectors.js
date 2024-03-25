export const productByIdSelector = (state, id) => {
  const products = state.products;
  const currentProduct = products.find((product) => product.id === Number(id));

  return currentProduct;
};

export const designerByIdSelector = (state, id) => {
  const designers = state.designers;
  const currentDesigner = designers.find(
    (product) => product.id === Number(id),
  );

  return currentDesigner;
};

export const brandByIdSelector = (state, id) => {
  const brands = state.brands;
  const currentBrand = brands.find((product) => product.id === Number(id));

  return currentBrand;
};

export const categoriesByIdSelector = (state, ids) => {
  const categories = state.categories;
  const currentCategories = ids?.reduce((acc, curr) => {
    const currentCategory = categories.find(
      (category) => category.id === Number(curr),
    );

    if (!currentCategory) {
      return acc;
    }

    return [...acc, currentCategory];
  }, []);

  return currentCategories?.length ? currentCategories : null;
};
