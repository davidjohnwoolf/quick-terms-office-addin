/* global Word */
import { Dispatch, SetStateAction, useEffect } from "react";
import { reduceParagraphsToDefinitions } from "../utils/reduceParagraphsToDefinitions";
import { ValueById } from "../types";

/**
 * Loads definitions into context on mount
 * @todo to handle the document change, probably pass the state in and watch it, then set defs
 */
export const useLoadDefinitionsEffect = (setDefinitions: Dispatch<SetStateAction<ValueById>>) => {
  useEffect(() => {
    (async () => {
      await Word.run(async ({ document, sync }) => {
        const paragraphs = document.body.paragraphs;
        // document.onParagraphChanged.add(() => alert("You just done messed up"));
        paragraphs.load("text, uniqueLocalId");
        await sync();

        setDefinitions(reduceParagraphsToDefinitions(paragraphs.items));
      });
    })();
  }, []);
};
