/* global Word */

/** Select the paragraph in the document from provided uniqueLocalId */
export const selectParagraphById = async (id: string) => {
  await Word.run(async (context) => {
    /* Select the paragraph by the id provided */
    context.document.getParagraphByUniqueLocalId(id).select();
    await context.sync();
  });
};
