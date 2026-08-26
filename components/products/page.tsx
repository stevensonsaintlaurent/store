import ProductsContainer from "@/components/products/ProductsContainer";

type ProductsPageProps = {
  searchParams: Promise<{
    layout?: string;
    search?: string;
  }>;
};

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const params = await searchParams;

  const layout = params.layout || "grid";
  const search = params.search || "";

  return <ProductsContainer layout={layout} search={search} />;
}
