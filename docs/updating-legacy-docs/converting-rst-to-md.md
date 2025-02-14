# .rst -> MD Conversion Process

- This is a one-time conversion process; it requires changing the Sphinx build system, building as markdown, replacing all the older rst files with the new markdown files, and then going through and cleaning up by hand.
- It is tedious, but the bulk of the work is cleaning vs actual conversion– and we can leverage the existing Sphinx setup.
- This relies on the [sphinx_markdown_builder](https://github.com/liran-funaro/sphinx-markdown-builder/) Sphinx plugin.

!!! tip
    It is *highly* recommended to do this work in a child branch of the repo, vs working directly in main. This will be extremely destructive.

This works in several main phases:

1. Setup – installing required systems for the automated conversion
2. Convert – running these systems to convert the .rst docs to .md
3. Initialize MkDocs – set up the new system that will serve the files
4. Text Cleanup – all of the work to turn the converted docs to a final product
5. Project Cleanup – removing the legacy build system files
6. Deploy

---

## 1. Setup

First, all work should be done in a new branch. Historically, these have been named `change/mkdocs`.

Once the work is done, submit a PR to merge it into the main branch.

### Setting up RST -> MD Conversion

1. Install `sphinx` & `sphinx_markdown_builder` (for converting from .rst to .md):
    ```sh
    pip install sphinx sphinx_markdown_builder
    ```
2. Update Sphinx config to convert to Markdown
    - Navigate to `./docs/conf.py`
    - Replace all of the contents with only this:
        ```py
        extensions = ["sphinx_markdown_builder"]
        ```

### Setting up the new system

1. Replace all contents of `./requirements.txt` with the following list of dependencies:
    ```
    mkdocs
    mkdocs-material
    mkdocs-git-revision-date-localized-plugin
    mkdocs-print-site-plugin
    ```
2. Install the above requirements via `pip`:
    ```sh
    pip install -r requirements.txt
    ```

---

## 2. Convert

1. Run the sphinx command to convert the docs
    ```sh
    sphinx-build -M markdown ./docs ./build
    ```
    - This will generate .md files within `./build/markdown`
2. We want to replace all of the .rst files with the .md files, *however* if we simply delete the .rst and add the .md we will lose all of the git history!
    - To get around this, we're going to first *rename* all of the .rst files to .md, and *then* overwrite the "fake" renamed .md files with the converted .md files
3. Using your renamer tool of choice, rename all .rst files in docs/ to the .md extension
4. **Commit this rename change!**
    - Be careful not to commit anything in `./build/`, as we don't want these in the repo (yet)
5. Now, overwrite all `./docs/` .md files with those from `./build/markdown/`
6. Delete the `./build/` folder, as it won't be needed
7. Rename `./docs/index.md` to `./docs/_nav.md`
    - This is a temporary process that we'll resolve later
    - It needs to be rewritten in a different format, and moved into `./mkdocs.yml`, with this file deleted
8. **Commit this overwrite change!**
    - This solidifies the history, at which point we can start cleanup

---

## 3. Initialize MkDocs

Instead of initializing MkDocs from scratch, we're going to just copy files over from the [After Effects Scripting Guide](https://github.com/docsforadobe/after-effects-scripting-guide/) and tweak those to fit.

1. Copy the following files from the above guide into this repo, overwriting if existing:
    - `./.github/`
    - `./_static/`
    - `./docs/CNAME`
    - `./docs/index.md`
    - `./overrides/`
    - `./.editorconfig`
    - `./.gitattributes`
    - `./.gitignore`
    - `./.mkdocs.yml`
2. Update anything related to "After Effects Scripting Guide" and make it relevant for this repo
    - `./docs/index.md`
    - `./.mkdocs.yml`
3. Open a terminal to the root folder, and run the below command to serve the docs
    ```sh
    mkdocs serve
    ```

---

## 4. Text Cleanup

### Bulk Cleanup

#### Search & Replace Steps

1. Remove generated `<a>` links
    - Using regex, search for `<a id=".+"></a>(\n|\r)(\n|\r)` and replace with blank
2. Update notes, warnings, tips admonitions
    - Valid admonitions [can be found here](https://squidfunk.github.io/mkdocs-material/reference/admonitions/#supported-types)
    - Using regex, search for `#### NOTE\n(.+)` and replace with `!!! note\n    $1`
    - Using regex, search for `#### WARNING\n(.+)` and replace with `!!! warning\n    $1`
    - Using regex, search for `#### TIP\n(.+)` and replace with `!!! tip\n    $1`
3. Update case-sensitive syntax highlighting languages
    - Using regex, search for `` ```AppleScript `` and replace with `` ```applescript ``
4. Replace nonstandard
    - Using regex, search for `“|”` and replace with `"`
    - Using regex, search for `‘|’` and replace with `'`
    - Using regex, search for `–` and replace with `-`
    - Search for `…` and replace with `...`
5. Update offset sublist settings
    - Using regex, search for`(\n|\r)  : - ` and replace with `:\n    - ` – only seems to be an issue with changelog

#### Look for lingering bulk-conversion issues

1. Search for lines starting with `  : - ` and
2. Search for rst-specific syntax such as the below, and fix them as needed
    - `.. note::`
    - `::`
    - `:ref:`
    - `.. WARNING::`

### Manual Cleanup

#### Sidebar / Navigation

The sidebar / navigation needs to be present inside of `./mkdocs.yml`, formatted identically to how it's presented in the [After Effects Scripting Guide](https://github.com/docsforadobe/after-effects-scripting-guide/) repo.

Earlier, we set aside `./docs/_nav.md` as a reference point. Now, use that file as the basis for how to display the nav within the `nav` section within `./mkdocs.yml`.

When finished, delete `./docs/_nav.md`.

#### Links

1. Search for hyphenated cross-links and replace with plain slugs, i.e.
    - `[CharacterRange.pasteFrom()](../text/characterrange.md#characterrange-pastefrom)` to
    - `[CharacterRange.pasteFrom()](../text/characterrange.md#characterrangepastefrom)`
    - This regex search can help, but fails when the link is also a header (see changelog):
        - `(?:#)(.*?)-(.*?)(?:\))` => `#$1$2)`
        - *Note: this also fails for any page that uses hyphens in page names, which is... most of them*
2. Search for anchored links to the top-level page & replace with direct page link, i.e.
    - `[Settings object](../other/settings.md#settings)` to
    - `[Settings object](../other/settings.md)`
    - This regex search / replace can help:
        - `(.*)\.md#(\1)\)` => `$1.md)`
3. Search for empty in-page links and replace them with the proper format, i.e.
    - `[app.watchFolder()]()` to
    - `[app.watchFolder()](#appwatchfolder)`

#### Update Tables

In RST, tables didn't need to have header rows. In markdown, they do (should). This, unfortunately, means a lot of work is needed as the conversion method isn't capable of generating table headers.

!!! note
    We're also going to use this opportunity to add in property types for arguments & parameters, making the docs friendlier to use.

- Set up table headers
- Format tables according to the required table format.

See [Style Guide - Tables](../contributing/style-guide.md#tables).

#### Titles

See [Style Guide - Title Hierarchy](../contributing/style-guide.md#title-hierarchy).

#### Other

- Check that images are properly linked to the root `./docs/_static` folder
- Value ranges should be formatted as: `` `[0.0..10800.0]` `` (surrounded by backticks, two periods between min and max)
- Sort class properties into "Attributes" and "Methods"
    - Alphabetically sort methods and attributes
- Inline doublespace
    ```regexp
    (?<![\n\r\| ])( ){2,}(?![ \|])
    ```
- Bad indent (not a multiple of 4 spaces) `^( ){1,3}(?:(\1)(\1)(\1)(\1))*(?=\S+)`
    - (based on [this stackoverflow answer](https://stackoverflow.com/a/42202431))
- Remove unnecessary `<br/>`

---

## 5. Project Cleanup

Now that we've got a full suite of .md files, we can remove some old cruft:

- `./build/`
- `./docs/**/*.rst`
- `./docs/conf.py`
- `./.readthedocs.yaml`
- `./make.bat`
- `./Makefile`

---

## 6. Open a PR!

Once the above steps are complete, it's time to open a PR for review!

Open a new Pull Request for merging the `change/mkdocs` branch into the main branch of the repo.

Once reviewed & accepted by an org admin, your converted docs will be pushed into main repo and it'll be time for an org admin to [Deploy the docs](./deploying-the-docs.md)!
