import { Definition } from "../types";

/** Search definitions by term */
export const searchDefinitionsByTerm = (searchText: string, definitions: Definition[]): Definition[] =>
  // return definitions where the term includes the search,
  definitions.filter(({ term }) => term.toLowerCase().includes(searchText.toLowerCase()));
