import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const werkDirectory = path.join(process.cwd(), 'werk');
 
export async function getSortedWerkData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(werkDirectory);
  const allWerkData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get slug
    const slug = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(werkDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const parsedContent = matter(fileContents);

    // Combine the data with the slug
    return {
      slug,
      ...parsedContent.data,
    };
  });
  // Sort work in some way, could be useful in future for sorting work by technologies
  return allWerkData.sort((a, b) => {
    if (a.date > b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}