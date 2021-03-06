import fs from 'fs';
import path from 'path';
import transformer from '../transformer';

/**
 * extract Front Matter config from markdown file
 */
export default (fileAbsPath: string): { [key: string]: any } => {
  const content = fs.readFileSync(fileAbsPath).toString();

  return transformer.markdown(content, { fileAbsPath, onlyConfig: true }).config;
};
