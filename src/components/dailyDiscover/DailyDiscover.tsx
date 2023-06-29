import DailyDiscoverE1 from "./DailyDiscoverE1";
import { Div, ProductCardGrid } from "./DailyDiscoverStyle";
import { Product } from "../../hooks/useProducts";
import DailyDiscoverE2 from "./DailyDiscoverE2";

interface Props {
  products: Product[];
  isLogin: boolean;
}
function DailyDiscover({ products, isLogin }: Props) {
  return (
    <Div>
      <DailyDiscoverE1 />
      <ProductCardGrid>
        <DailyDiscoverE2 products={products} isLogin={isLogin} />
      </ProductCardGrid>
    </Div>
  );
}

export default DailyDiscover;
