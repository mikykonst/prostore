import { Metadata } from "next";

import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";
import { convertPrismaObject } from "@/lib/utils";
import { LATEST_PRODUCTS_LIMIT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Home",
};

const HomePage = async () => {
  const latestProducts = await getLatestProducts();

  return (
    <>
      <ProductList
        data={convertPrismaObject(latestProducts)}
        title="Newest arrivials"
        limit={LATEST_PRODUCTS_LIMIT}
      />
    </>
  );
};

export default HomePage;
