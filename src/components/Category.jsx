const Category = () => {
  const categories = ['Mide Chair', 'Seun Chair', 'Fae Chair', 'Zoe Chair'];

  return (
    <section className="category-container">
      <h2>Best Selling Products</h2>
      <div className="btn-container">
        {categories.map((category) => {
          return (
            <button type="button" className="btn">
              {category}
            </button>
          );
        })}
      </div>
    </section>
  );
};
export default Category;
