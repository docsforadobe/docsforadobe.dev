# Docs for Adobe Homepage

This repo tracks the landing page for [docsforadobe.dev](https://docsforadobe.dev).

It also holds all of the shared components between all of the org-controlled documentation projects.

---

## Global CSS

Within `/docs/_global/` live two css files that all child repos will pull global settings from.

Each repo can override this css within their own css (within `/docs/_static/extra.css`), though they'll first try to pull these globals.

If you're encountering an issue in a specific repo that could benefit from a **global** fix:
- Create a testing area in the `/docs/_demo/` folder (either by modifying [an existing file](https://docsforadobe.dev/_demo/css-testing-ground/) or creating a new one)
- Tweak `global.css` as needed to solve the issue
- Open a PR and get some other eyes on it
- Once approved, commit & merge into the main branch and the other repos will start using it!

> [!NOTE]
> These demo files *aren't* included in the rendered site navigation, deliberately; they will be built as normal, however you'll have to navigate to the pages directly by url in order to see them.
