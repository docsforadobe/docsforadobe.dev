# Modifying Common Components

!!! danger
    These changes will be pushed to many different sites! It's **your** responsibility to ensure the change is safe.

If something needs to be updated globally (across all orgs):

- Perform that work in the [docsforadobe-mkdocs-config repo](https://github.com/docsforadobe/docsforadobe-mkdocs-config)
    - **Note: This page assumes you're working from the above repo**
- (Manually) update one of your local repo's `./docs/_global/` contents with the updated content, to verify the change works as expected
    - Do not commit incremental `_global` updates to any child project!
- Once complete, submit a PR to the above repo for review.

!!! note
    While these changes *are* used globally, this system is specifically built in such a way that each guide can override some of these global settings if needed.

---

## CSS & JS

If you're changing something generally straightforward (javascript, css), you should use the existing `./js/global.js` and `./css/global.css` files. These are purpose-built to do the job.

If you'd like to add a **new** css or js file instead of using the above:

1. Place those in the appropriate folder (`./css/` or `./js/`)
2. In `./mkdocs.yml`, update the `extra.overrides.extra_css` or `extra.overrides.extra_js` lists with a path to your new file

---

## Template Pages

Similarly, if you're hoping to tweak the page templates, you can easily tweak (or add to) anything within the `./overrides/` directory without issue.

Make sure these files stay within the above directory, and follow the structure found in the [Material for MkDocs user guide](https://squidfunk.github.io/mkdocs-material/customization/).

---

## Python Hooks

While this title is admittedly vague, we do have the option to add in [custom python hooks](https://www.mkdocs.org/user-guide/configuration/#hooks) to change deeper behaviour.

Right now, this repo is using this system to help manage a lot of how inheritance of common components work, though it's conceivable that more needs come up down the road.

As ever, be careful with what you change! These can have serious impacts.

If you add in custom hooks:

1. Place the hooks themselves in `./hooks/`
2. In `./mkdocs.yml`, update the `hooks` key with a path to your new hook

---

## Theme Features

If the entire org could benefit from a new (or tweaked) theme feature:

1. In `./mkdocs.yml`, update the `theme.features` list with the new addition
2. Update any applicable guides to make use of that new feature (if applicable)

---

## Markdown Extensions & Plugins

These work similarly to Theme Features, with some more work.

1. In `./mkdocs.yml`, update the `markdown_extensions` or `plugins` lists with the new addition

    !!! note
        Note the specific syntax being used here! Due to how MkDocs inheritance works, we **must** use this object syntax:
        ```xml
        markdown_extensions:
            extension_name: {}
        ```
        instead of this list syntax:
        ```xml
        markdown_extensions:
            - extension_name
        ```

        See `./mkdocs.yml` for further samples.

2. In `./requirements.txt`, add the name of the extension or plugin (if applicable – some extensions don't need to be explicitly installed!)
