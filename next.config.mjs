import createMDX from "@next/mdx";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";
import remarkWikiLink from "remark-wiki-link";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

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
      remarkFrontmatter,
      [remarkMdxFrontmatter, { name: "metadata" }],
      [
        remarkWikiLink,
        {
          aliasDivider: "|",
          hrefTemplate: (permalink) => `/${permalink}`,
          pageResolver: (name) => [name.replace(/ /g, "-").toLowerCase()],
        },
      ],
    ],
    rehypePlugins: [rehypeMathjax],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
