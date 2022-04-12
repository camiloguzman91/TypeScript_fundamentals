(() => {
  const login = (data: {email:string, password: number}) => {
    console.log(data.email, data.password);
  }

  //login('camilo@camilo.co', '123456');
  login({
    email: 'camilo@camilo.co',
    password: 123456
  });

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = [];

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) => {
    products.push(data);
  }

  addProduct({
    title: 'Pro1',
    createdAt: new Date(1999, 12, 12),
    stock: 12,
  });

  addProduct({
    title: 'Pro1',
    createdAt: new Date(1999, 12, 12),
    stock: 12,
    size: 'L'
  });

  console.log(products);

})();
