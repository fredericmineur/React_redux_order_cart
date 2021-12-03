import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [{
  id: 'p1',
  title: 'Book',
  price: 24,
  description: 'This is a book - amazing!'
}, {
  id: 'p2',
  title: 'Screwdriver',
  price: 6,
  description: 'This is a screwdriver - cool!'
}, {
  id: 'p3',
  title: 'Smart phone',
  price: 345,
  description: 'This is a just a phone!'
}]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(item =><ProductItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
        /> )}
        
      </ul>
    </section>
  );
};

export default Products;
