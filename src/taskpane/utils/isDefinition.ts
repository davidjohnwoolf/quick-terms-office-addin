/** Tests a paragraph text value against a criteria of term definition */
export const isDefinition = (text: string) => /^“.+”[\s].+/.test(text);
