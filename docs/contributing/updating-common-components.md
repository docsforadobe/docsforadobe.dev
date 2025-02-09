# Updating common components

All of these guides share common components. These are things like css tweaks, page layout templates, announcement banners, and more.

!!! warning
    These common components live within the `./docs/_global/` folder of each guide's repo.

    Files here **should not be modified** without running the provided script!

Instead of trying to manage all of these shared files many times, we've hosted them in [their own config repo](https://github.com/docsforadobe/docsforadobe-mkdocs-config), and instead distribute a small python script to download the latest version of these components from that repo.

In this manner, we've introduced a one-command workflow to fetch all of the latest global settings and ensure each guide is up-to-date with these changes.

```sh
python ./scripts/update-common-components.py
```

This will modify the contents of the `./docs/_global/` directory.

## Verifying changes

Once the update has finished, we recommend scanning through the guide to ensure these updates haven't negatively affected anything in the project.

Once it looks good, commit the modified `./docs/_global/` folder, noting the change.
