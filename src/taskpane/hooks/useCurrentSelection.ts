/* global Word, Office */
import { useEffect, useState } from "react";

/**
 * Handle document selection as a state returning the selection text string
 * @returns currentSelection
 */
export const useCurrentSelection = (): string => {
  const [currentSelection, setCurrentSelection] = useState<string>();

  /** Async handler for updating the selection on document selection change */
  const handleSelection = async () => {
    const nextSelection = await Word.run(async (context) => {
      const paragraph = context.document.getSelection().paragraphs.getFirst();
      paragraph.load("text");
      await context.sync();

      return paragraph.text;
    });

    setCurrentSelection(nextSelection);
  };

  useEffect(() => {
    /** Subscribes to selection changes, calling the handler to set the currentSelection */
    Office.context.document.addHandlerAsync(Office.EventType.DocumentSelectionChanged, handleSelection);
  }, []);

  return currentSelection;
};
