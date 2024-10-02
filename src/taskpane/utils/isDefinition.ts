/**
 * Tests a paragraph text value against a criteria of term definition
 * @todo refine the regex to cover edge cases
 */
export const isDefinition = (text: string) => /^“(.+)”(.+)/.test(text);
