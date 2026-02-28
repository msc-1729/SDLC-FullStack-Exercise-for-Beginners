#!/usr/bin/env node
/**
 * Updates the blueprint table in README.md by scanning all Markdown blueprint
 * files in the repo root. Blueprint files must have YAML frontmatter with:
 *   project: Project name
 *   backend: Backend stack (e.g. Node.js (Express))
 *   domain: Short domain description
 *
 * Usage: node scripts/update-blueprint-table.js
 * Run from repository root.
 */

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '..');
const README_PATH = path.join(REPO_ROOT, 'README.md');
const TABLE_START = '<!-- BLUEPRINT_TABLE -->';
const TABLE_END = '<!-- /BLUEPRINT_TABLE -->';

function getBlueprintFiles() {
  const files = fs.readdirSync(REPO_ROOT);
  return files
    .filter((f) => f.endsWith('.md') && f !== 'README.md')
    .sort();
}

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return null;
  const block = match[1];
  const result = {};
  for (const line of block.split(/\r?\n/)) {
    const m = line.match(/^(\w+):\s*(.+)$/);
    if (m) result[m[1].trim()] = m[2].trim();
  }
  return result;
}

function buildTable(files) {
  const rows = files.map((file) => {
    const filePath = path.join(REPO_ROOT, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const fm = parseFrontmatter(content);
    const project = fm?.project ?? '—';
    const backend = fm?.backend ?? '—';
    const domain = fm?.domain ?? '—';
    const link = `[${file}](./${file})`;
    return `| ${link} | **${project}** | ${backend} | ${domain} |`;
  });

  const header =
    '| Document | Project | Backend | Domain |\n' +
    '| -------- | ------- | ------- | ------ |';
  return [header, ...rows].join('\n');
}

function updateReadme(table, count) {
  let readme = fs.readFileSync(README_PATH, 'utf8');
  const startIdx = readme.indexOf(TABLE_START);
  const endIdx = readme.indexOf(TABLE_END);

  if (startIdx === -1 || endIdx === -1) {
    console.error('README.md must contain <!-- BLUEPRINT_TABLE --> and <!-- /BLUEPRINT_TABLE -->');
    process.exit(1);
  }

  const before = readme.slice(0, startIdx + TABLE_START.length);
  const after = readme.slice(endIdx);
  const newReadme = before + '\n\n' + table + '\n\n' + after;
  fs.writeFileSync(README_PATH, newReadme, 'utf8');
  console.log('Updated README.md blueprint table with', count, 'blueprint(s).');
}

const files = getBlueprintFiles();
if (files.length === 0) {
  console.log('No blueprint .md files found (excluding README.md).');
  process.exit(0);
}

const table = buildTable(files);
updateReadme(table, files.length);
