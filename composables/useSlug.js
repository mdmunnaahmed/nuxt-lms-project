// composables/useSlug.js
export default function useSlug(title) {
  const stitle = title
    .trim()
    .toLowerCase()
    .replace(/[^\w\s]/gi, "");
  const slug = stitle.replace(/\s+/g, "-").replace(/-+/g, "-");

  return { slug };
}
