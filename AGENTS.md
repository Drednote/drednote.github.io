# AGENTS: Project Resume

## What This Project Is

This repository is a personal resume card website (`drednote.github.io`) that presents:
- About section
- Work experience
- Projects
- Contacts and external links

Core idea: content is data-driven from files in `public/*` and rendered by React components in `src/*`.

## Tech Stack

- React 18 + TypeScript
- Webpack 5
- Sass
- Ant Design
- i18next + react-i18next
- moment.js (date formatting for experience timeline)

## Main App Structure

- `src/modules/navigation/*` - top navigation (desktop/mobile), section anchors.
- `src/modules/resume/*` - PDF resume generation/download flow.
- `src/modules/card-content/Home.tsx` - hero/home block.
- `src/modules/card-content/about/*` - "About me" section and skills.
- `src/modules/card-content/work-experience/*` - work experience cards and timeline.
- `src/modules/card-content/projects/*` - project cards.
- `src/modules/card-content/footer/*` - footer and social links.

Root composition is in:
- `src/modules/card-content/CardContent.tsx` (Home -> About -> Work Experience -> Projects -> Footer)

## Where Resume Content Lives

### Work Experience

- Index: `public/experience/experience.json`
- Content per language:
  - `public/experience/ru/*.json` and `public/experience/ru/*.md`
  - `public/experience/en/*.json` and `public/experience/en/*.md`

Each experience entry includes role/company/dates/skills/link in JSON plus markdown description in MD.

### Projects

- Index: `public/projects/projects.json`
- Content per language:
  - `public/projects/ru/*.json` and `public/projects/ru/*.md`
  - `public/projects/en/*.json` and `public/projects/en/*.md`

### About / Contact Text

- `public/text/ru/about-me.md`
- `public/text/en/about-me.md`
- `public/text/ru/contact.md`
- `public/text/en/contact.md`

### PDF Resume Metadata

- `public/text/ru/resume.json`
- `public/text/en/resume.json`

These files hold PDF-only resume metadata such as file name, name/header, phone, preferred contact
method, contacts, target position, education, and languages.

Important: `education` is an array so multiple education entries can be added without code changes.
Do not hardcode mutable resume facts (phone, contacts, education, position text, etc.) in TS/TSX.

### UI Translations

- `public/translation/ru/translation.json`
- `public/translation/en/translation.json`
- `src/utils/i18n.ts` (language detection/init config)

## Runtime Behavior Notes

- Experience and projects are loaded dynamically by current language (`i18n.language`).
- Experience timeline duration is computed from earliest `startDate` entry.
- Desktop and mobile layouts use adaptive wrappers from `src/components/adaptive/Adaptive.tsx`.
- PDF resume download is generated client-side with `pdfmake` in
  `src/modules/resume/resumePdf.ts`.
- The top-nav PDF button lives in `src/modules/navigation/NavExtra.tsx` and uses
  `src/components/icon-button/IconButton.tsx`, matching the GitHub icon button style.
- `pdfmake` is lazy-loaded on PDF button click; avoid static imports from always-rendered navigation
  components because they pull the large PDF vendor chunk into the main bundle.
- PDF labels/headings should use `i18next` (`t(...)`) and translation files, not inline
  `lang === ...` strings.
- PDF skills are derived from `skills` arrays in work-experience JSON files, not a separate static
  skills list.
- Markdown in PDF descriptions currently supports paragraphs, headings, bullets, `**bold**`,
  inline `` `code` ``, and markdown links.

## Dev Commands

- `npm run dev` - run local dev server.
- `npm run build` - production build + copy `public/404.html` to `dist/404.html`.
- `npm run lint` - ESLint with `--fix`.
- `npm test` - placeholder script (`No tests found`).
- Type-check workaround: `tsc --noEmit` currently needs `--baseUrl .` because `tsconfig.json`
  defines path aliases without `baseUrl`; use `tsc --noEmit --baseUrl .` for focused checks.

## Agent Rules For This Repo

- Do not revert existing user changes unless explicitly asked.
- Prefer `rg`/`rg --files` for searching.
- Use `apply_patch` for manual file edits.
