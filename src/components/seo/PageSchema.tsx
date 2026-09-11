import { JsonLd } from "@/components/seo/JsonLd";
import {
  breadcrumbSchema,
  propertySchema,
  type Crumb,
} from "@/lib/structured-data";

type PageSchemaProps = {
  /** Trail from the home page down to this one, inclusive. */
  crumbs: Crumb[];
  /**
   * Route of a development in PROPERTY_LISTINGS. When given, the page also
   * emits a RealEstateListing describing it.
   */
  propertyPath?: string;
};

/**
 * Per-page structured data. The site-wide Organization/WebSite graph comes
 * from the root layout; this adds what is specific to one page.
 */
export function PageSchema({ crumbs, propertyPath }: PageSchemaProps) {
  const property = propertyPath ? propertySchema(propertyPath) : null;

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      {property ? <JsonLd data={property} /> : null}
    </>
  );
}
