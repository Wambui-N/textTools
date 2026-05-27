export function removeHtmlTags(text: string, decodeEntities = true): string {
  let result = text.replace(/<[^>]*>/g, "");
  if (decodeEntities) {
    result = result
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'")
      .replace(/&nbsp;/g, " ");
  }
  return result;
}
