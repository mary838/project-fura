/**
 * Renders a JSON-LD block. Structured data is what lets Google, and the
 * answer/AI engines that reuse its index, state facts about the business
 * rather than guess them from prose.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify does not escape "<", so a stray "</script>" inside any
      // content string would close this tag early. Escaping it as < is
      // valid JSON and inert in HTML.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
