/* global Word */
import { Dispatch, SetStateAction, useEffect } from "react";
import { Definition } from "../types";
import { isDefinition } from "../utils/isDefinition";

/**
 * Loads definitions into context on mount
 * @todo to handle the document change, probably pass the state in and watch it, then set defs
 */
export const useLoadDefinitionsEffect = (setDefinitions: Dispatch<SetStateAction<Definition[]>>) => {
  useEffect(() => {
    (async () => {
      await Word.run(async ({ document, sync }) => {
        const paragraphs = document.body.paragraphs;
        // document.onParagraphChanged.add(() => alert("You just done messed up"));
        paragraphs.load("text, uniqueLocalId");
        await sync();

        const definitions: Definition[] = paragraphs.items.reduce((prev, { text, uniqueLocalId }) => {
          const [term, description] = text.slice(1).split(`”`) as [string, string];

          return isDefinition(text) ? [...prev, { text, uniqueLocalId, term, description }] : prev;
        }, [] as Definition[]);

        setDefinitions(definitions);
      });
    })();
  }, []);
};
