import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";

export function Content() {
  let products = [
    {
      id: 1,
      productName: "Ferrari",
      price: 24,
      description: "this is a fast car",
      image_url:
        "https://hips.hearstapps.com/hmg-prod/images/2024-ferrari-812-gts-101-64caae4038b21.jpeg?crop=0.526xw:0.701xh;0.137xw,0.299xh&resize=768:*",
    },
  ];
  return (
    <main>
      <ProductsNew />
      <ProductsIndex products={products} />
    </main>
  );
}
