import createMDX from "@next/mdx";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";
import remarkWikiLink from "remark-wiki-link";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [
      remarkMath,
      [
        remarkWikiLink,
        {
          // Define como o link será gerado no HTML
          hrefTemplate: (permalink) => `/calculo3/${permalink}`,
          // Opcional: define uma classe CSS para os links
          pageResolver: (name) => [name.replace(/ /g, "-").toLowerCase()],
        },
      ],
    ],
    rehypePlugins: [rehypeMathjax],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
