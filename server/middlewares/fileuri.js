import dataUriParser from "datauri/parser.js";
import path from "path";

export const getDataUri = (file) => {
  const parser = new dataUriParser();
  const extensionName = path.extname(file.originalname).toString();
  return parser.format(extensionName, file.buffer);
};
