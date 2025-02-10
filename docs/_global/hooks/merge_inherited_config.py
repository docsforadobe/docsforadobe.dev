# Handles merging mkdocs config in a way the native inheritance feature doesn't quite cover
#
# This relies on a key in "extra.overrides"
# Valid keys are `custom_dir: str` and `hooks: [-path/to.py, -path/to.py]`, e.g.
#
# ```yml
# extra:
#     overrides:
#         custom_dir: overrides
#         extra_css:
#             - docs/_global/css/global.css
#             - docs/_global/css/global-syntax-highlight.css
#         extra_javascript:
#             - docs/_global/js/global.js
#         hooks:
#             - hooks/local_override.py
#             - hooks/local_override2.py
#         theme_features:
#             - theme.feature1
#             - theme.feature2
# ```

import os

import mkdocs
from mkdocs.config.defaults import MkDocsConfig
from mkdocs.config.config_options import (Hooks, ListOfItems, File, FilesystemObject)
from mkdocs.structure.files import (Files, File as FileStructure)

# Load any local files into mkdocs
def append_local_files(files: Files, config: MkDocsConfig, local_files: list):
    for local_file_path in local_files:
        local_file = FileStructure(
            path= local_file_path,
            src_dir=config["docs_dir"] + "/../",
            dest_dir=config["site_dir"],
            use_directory_urls=False,
        )

        files.append(local_file)

# Load any override theme features
def merge_local_theme_features(config: MkDocsConfig, theme_features: list):
    for local_feature in theme_features:
        config.theme["features"].append(local_feature)

# Add additional theme_override folder
def merge_local_theme_override(config: MkDocsConfig, custom_dir: str):
    try:
        local_override_path = FilesystemObject(exists=True).validate(custom_dir)
    except Exception as e:
        raise e

    config.theme.dirs.insert(1, local_override_path)

# Load any override hooks
def merge_local_hooks(config: MkDocsConfig, hooks: list):
    try:
        paths = ListOfItems(File(exists=True)).validate(hooks)
    except Exception as e:
        raise e

    for name, path in zip(hooks, paths):
        config.plugins[name] = Hooks._load_hook(mkdocs, name, path)

def on_files(files: Files, config: MkDocsConfig):
    if "overrides" in config.extra:
        extra_overrides = config.extra["overrides"]

        if "extra_css" in extra_overrides:
            extra_css = extra_overrides["extra_css"]
            append_local_files(files, config, extra_css)

        if "extra_javascript" in extra_overrides:
            extra_javascript = extra_overrides["extra_javascript"]
            append_local_files(files, config, extra_javascript)


def on_config(config: MkDocsConfig):
    if "overrides" in config.extra:
        extra_overrides = config.extra["overrides"]

        if "hooks" in extra_overrides:
            hooks = extra_overrides["hooks"]
            merge_local_hooks(config, hooks)

        if "custom_dir" in extra_overrides:
            custom_dir = extra_overrides["custom_dir"]
            merge_local_theme_override(config, custom_dir)

        if "extra_css" in extra_overrides:
            extra_css = extra_overrides["extra_css"]
            config.extra_css.extend(extra_css)

        if "extra_javascript" in extra_overrides:
            extra_javascript = extra_overrides["extra_javascript"]
            config.extra_javascript.extend(extra_javascript)

        if "theme_features" in extra_overrides:
            theme_features = extra_overrides["theme_features"]
            merge_local_theme_features(config, theme_features)
