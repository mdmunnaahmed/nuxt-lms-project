export default function removeSpacesAndSpecialChars(title) {
  const regex = /[\s\W]/g;
  const result = title.replace(regex, "");
  return result;
}
