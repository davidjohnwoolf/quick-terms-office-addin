/* global Word, Office */
import { Dispatch, SetStateAction, useEffect } from "react";

export const useSelectionChangeEffect = (setSelection: Dispatch<SetStateAction<string>>) => {
  useEffect(() => {
    /** Handles a new document paragraph selection */
    const handleSelection = async () => {
      const nextSelection = await Word.run(async (context) => {
        const paragraph = context.document.getSelection().paragraphs.getFirst();
        paragraph.load("text");
        await context.sync();

        return paragraph.text;
      });

      setSelection(nextSelection);
    };

    /** Subscribes to selection changes, calling the handler to set the currentSelection */
    Office.context.document.addHandlerAsync(Office.EventType.DocumentSelectionChanged, handleSelection);
  }, []);
};
