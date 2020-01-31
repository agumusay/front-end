# Update table cell

Write a function to update the contents of a table cell. It should accept 3 parameters: row, col, and the new text. For now assume there is only one table in the document and it is written with valid HTML. Also assume each cell contains only text and no HTML.

If the provided row or cell do not exist, throw an error with a message.

If all params are correct, update the text of the selected cell to the one provided in the function.

Extra: the first row usually contains `th` elements instead of `td`. Make sure your function can handle this case too.

Another extra: the function should allow for selecting which table to be updated, when the document contains more than one table.