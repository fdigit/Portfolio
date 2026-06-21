const fs = require('fs');
const path = require('path');

const projects = require('../src/data/projects.json');
const outDir = path.join(__dirname, '../content/projects');

if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

projects.forEach(p => {
    let frontmatter = `---
title: "${p.title}"
description: "${p.description}"
tags: ${JSON.stringify(p.tags)}
image: "${p.image}"
`;
    if (p.url) frontmatter += `url: "${p.url}"\n`;
    if (p.androidUrl) frontmatter += `androidUrl: "${p.androidUrl}"\n`;
    if (p.iosUrl) frontmatter += `iosUrl: "${p.iosUrl}"\n`;
    if (p.githubUrl) frontmatter += `githubUrl: "${p.githubUrl}"\n`;
    
    frontmatter += `---\n\n`;
    const content = p.content || p.description;
    
    fs.writeFileSync(path.join(outDir, `${p.slug}.mdx`), frontmatter + content);
});

console.log('Migration complete!');
