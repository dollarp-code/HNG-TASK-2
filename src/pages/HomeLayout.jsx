import {
  Category,
  Footer,
  Header,
  Navbar,
  ProductList,
  Showcase,
} from '../components';
import menu from '../data';
const HomeLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <ProductList />
      {/* <Showcase menu={menu} /> */}
      <Footer />
    </>
  );
};
export default HomeLayout;
