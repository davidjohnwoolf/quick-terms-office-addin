/* global Word */
import { Dispatch, SetStateAction, useEffect } from "react";
import { reduceParagraphsToDefinitions } from "../utils/reduceParagraphsToDefinitions";
import { ValueById } from "../types";

/** @todo to handle the doc change, probably pass the state in and watch it, then set defs */
export const useLoadDefinitionsEffect = (setDefinitions: Dispatch<SetStateAction<ValueById>>) => {
  useEffect(() => {
    /** Load the document definitions on mount */
    (async () => {
      await Word.run(async ({ document, sync }) => {
        const paragraphs = document.body.paragraphs;
        // document.onParagraphChanged.add(async ({ uniqueLocalIds }) => {
        //   const isDefinitionChange = uniqueLocalIds.some((id) => currentIds.includes(id));
        // });
        paragraphs.load("text, uniqueLocalId");
        await sync();

        setDefinitions(reduceParagraphsToDefinitions(paragraphs.items));
      });
    })();
  }, []);
};
