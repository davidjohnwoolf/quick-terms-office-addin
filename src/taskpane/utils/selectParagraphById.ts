/* global Word */

/** Select the paragraph in the document from provided uniqueLocalId */
export const selectParagraphById = async (uniqueLocalId: string) => {
  await Word.run(async (context) => {
    /* Select the paragraph by the id provided */
    context.document.getParagraphByUniqueLocalId(uniqueLocalId).select();

    await context.sync();
  });
};
