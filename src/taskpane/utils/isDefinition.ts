/**
 * Tests a paragraph text value against a criteria of term definition
 * @todo refine the regex to cover edge cases
 * ie (["'])(?:\\\1|.)*?\1
 */
export const isDefinition = (text: string) => /^“(.+)”(.+)/.test(text);
