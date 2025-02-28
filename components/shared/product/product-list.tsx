import ProductCard from "@/components/shared/product/product-card";
import { Product } from "@/types";

type ProductListProps = {
  title?: string;
  data: Product[];
  limit?: number;
};

const ProductList = ({ data, title, limit }: ProductListProps) => {
  const products = limit ? data.slice(0, limit) : data;

  return (
    <div className="my-5">
      <h2 className="h2-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.length ? (
          products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))
        ) : (
          <div>
            <p>No products found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
