function useSlug(title) {
  const stitle = title.trim().toLowerCase().replace(/[^\w\s]/gi, "");
  const slug = stitle.replace(/\s+/g, "-").replace(/-+/g, "-");
  return { slug };
}
export {
  useSlug as u
};
//# sourceMappingURL=useSlug-71b1c58b.js.map
