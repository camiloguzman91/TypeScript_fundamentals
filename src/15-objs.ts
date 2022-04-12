(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  };

  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
  }

  addProduct({
    title: 'Pro1',
    createdAt: new Date(1999, 12, 12),
    stock: 12,
  });

  addProduct({
    title: 'Pro2',
    createdAt: new Date(1999, 12, 12),
    stock: 12,
    size: 'L'
  });

  console.log(products);

  products.push({
    title: 'Pro3',
    createdAt: new Date(1900, 1, 1),
    stock: 8,
    size: 'S'
  });

})();
