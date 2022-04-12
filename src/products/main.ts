import { addProduct, calcStock, products} from './product.service';

addProduct({
  title: 'Pro1',
  createdAt: new Date(1999, 12, 12),
  stock: 7,
});

addProduct({
  title: 'Pro2',
  createdAt: new Date(1999, 12, 12),
  stock: 12,
  size: 'L'
});

console.log(products);
const total = calcStock();
console.log(total);
