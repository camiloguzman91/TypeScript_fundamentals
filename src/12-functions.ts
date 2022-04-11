(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL' ;

  function createProductToJason(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const product1 = createProductToJason('P1', new Date(), 12, 'XL');
  console.log(product1)
  console.log(product1.title)
  console.log(product1.stock)

  const createProductToJasonV2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes  //?: siginifica que ers opcional
  ) => {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const product2 = createProductToJasonV2('P1', new Date(), 12);
  console.log(product2)
  console.log(product2.title)
  console.log(product2.stock)
  console.log(product2.size)

})();
