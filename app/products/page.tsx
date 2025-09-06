import { sanityFetch } from "@/sanity/lib/live";
import { defineQuery } from "next-sanity";
import { Products, Projects } from "@/sanity/sanity.types";
import ProductsClient from "@/screens/projects/products/ProductsClient";
import { PROJECTS_QUERY } from "../page";

export default async function ProductsServer() {
  const PRODUCTS_QUERY = defineQuery(`
      *[_type == "products"]|  order(_createdAt desc) {
          id,
          name,
          icon,
          iconBg,
          category,
          url,
      }`);

  const { data: projects } = (await sanityFetch({ query: PROJECTS_QUERY })) as {
    data: Projects[];
  };
  const { data: products } = (await sanityFetch({ query: PRODUCTS_QUERY })) as {
    data: Products[];
  };

  return <ProductsClient projects={projects} products={products} />;
}
