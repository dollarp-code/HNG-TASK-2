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
      <ProductList />
      <Header />
      <Navbar />
      {/* <Category /> */}
      <Showcase menu={menu} />
      <Footer />
    </>
  );
};
export default HomeLayout;
