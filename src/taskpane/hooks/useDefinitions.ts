import { useContext } from "react";
import { DefinitionsContext } from "../components/DefinitionsProvider";

/** @todo consider a better structure here, this seems unnecessary */
interface DefinitionProperties {
  /** The uniqueLocalId from Word.Paragraph */
  id: string;
  /** The definition term */
  key: string;
  /** The definition after the term */
  value: string;
}

/** Definitions in paragraph form by uniqueLocalId (from Word) */
export const useDefinitions = (selection?: string) => {
  const definitions = useContext(DefinitionsContext);

  /** An array of entries ([term, termDefinition]) format */
  const propsArray: DefinitionProperties[] = Object.entries(definitions).map(([uniqueId, text]: [string, string]) => {
    const [key, value] = text.slice(1).split(`”`);
    return { id: uniqueId, key, value };
  });

  const selectionPropsArray = propsArray.filter(({ key }) => (selection?.length ? selection.includes(key) : true));

  /** @todo account for terms within terms, etc */
  // const definitionKeys = definitionKeyValueArray.map(([key]) => key);

  return selectionPropsArray.length ? selectionPropsArray : propsArray;
};
