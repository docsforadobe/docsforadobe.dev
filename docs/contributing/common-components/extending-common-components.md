# Extending Common Components

If you want to extend the common components in your guide, we've provided a few methods to do so.

Note that for the below cases, you **must** use the methods outlined below – we've built a system for overriding various MkDocs features, and this system is required for full compatibility.

!!! note
    Please override sparingly! Consistency between guides is important.

??? tip "Quick extension reference"

    Assuming you're familiar with some of the below, here's a quick list of allowable overrides:

    ```xml
    extra:
        overrides:
            custom_dir: path/to/template_root
            hooks:
                - path/to/hook.py
                - path/to/hook2.py
            not_in_nav:
                - gitignore_style_ignore_spec
            theme_features:
                - theme.feature
    ```

---

## CSS & JS

Each guide should have an existing css & js file in `./docs/static/`. These files are called `extra.css` and `extra.js`, and may be used as needed.

Alternatively, you can add *new* css/js files to the above directory, and then add the paths to the relevant `extra_css` or `extra_js` key in `./mkdocs.yml`.

---

## Template Pages

This documentation system allows creating custom page templates to override existing components. You can view more info in the [MkDocs user guide](https://www.mkdocs.org/user-guide/customizing-your-theme/) and the [Material for MkDocs user guide](https://squidfunk.github.io/mkdocs-material/customization/).

If your guide needs to use custom templates, add a path to that directory within `./mkdocs.yml`;

```xml
extra:
    overrides:
        custom_dir: path/to/template_root
```

---

## Python Hooks

MkDocs allows authors to write small snippets of Python that hook into MkDocs to tweak behaviour in various ways.

There shouldn't be *too* much need for these, but if for some reason it comes up, see the [MkDocs user guide](https://www.mkdocs.org/user-guide/configuration/#hooks) for info on writing hooks.

If your guide needs to use custom hooks, add a path to each hook within `./mkdocs.yml`;

```xml
extra:
    overrides:
        hooks:
            - path/to/hook.py
            - path/to/hook2.py
```

---

## Excluding Items from Nav Menu

There are occasionally times where you want to remove some items from the guide's navigation menu.

For these cases, include a gitignore-style path spec to each item within the overrides key in `./mkdocs.yml`:

```xml
extra:
    overrides:
        not_in_nav:
            - gitignore_style_ignore_spec
```

---

## Theme Features

While we aim for consistency between guides, on occasion a specific project can benefit from using additional features that [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/reference/) provides.

If your guide needs to use additional theme features, add each feature name within `./mkdocs.yml`;

```xml
extra:
    overrides:
        theme_features:
            - theme.feature
```

---

## Markdown Extensions & Plugins

Adding markdown extensions & plugins is fairly straightforward.

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
