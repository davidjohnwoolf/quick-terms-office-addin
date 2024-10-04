/* global Word, console */
import { Dispatch, SetStateAction, useEffect } from "react";
import { Definition } from "../types";
import { getParagraphDefinitions } from "../utils/getParagraphDefinitions";

/** Loads definitions into context on mount and when document definitions change*/
export const useLoadDefinitionsEffect = (
  prev: Definition[],
  setDefinitions: Dispatch<SetStateAction<Definition[]>>
) => {
  const handleLoad = async () => {
    await Word.run(async ({ document, sync }) => {
      const paragraphs = document.body.paragraphs;

      paragraphs.load("text, uniqueLocalId");
      await sync();

      // set definitions from document paragraphs
      const definitionsFromParagraphs = getParagraphDefinitions(paragraphs.items);
      setDefinitions(definitionsFromParagraphs);
    });
  };

  useEffect(() => {
    handleLoad();
  }, []);

  // set new change handler (with newly associated defs) on change
  useEffect(() => {
    (async () => {
      await Word.run(async ({ document }) => {
        // set new change handler
        document.onParagraphChanged.add(async (event) => {
          await Word.run(async (context) => {
            await context.sync();
            console.log(event.uniqueLocalIds);

            // if existing definitions match an id from the changed ones
            if (prev.some(({ uniqueLocalId }) => event.uniqueLocalIds.includes(uniqueLocalId))) {
              handleLoad();
            }
          });
        });
      });
    })();
  }, [prev]);
};
