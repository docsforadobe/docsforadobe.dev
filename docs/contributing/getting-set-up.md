# Getting Set Up

While it's technically possible to start contributing just through editing the markdown, we ask that you build the project locally to test your changes & ensure the result is what you'd expect.

To start working locally, you'll need to:

1. [Install Python](#install-python)
2. [Download the repo locally](#download-the-repo-locally)
3. [Install dependencies](#install-dependencies)
4. [Build the project](#build-the-project)

---

## Install Python

This project runs on Python & dependent packages.

You'll need to install [Python 3](https://www.python.org/downloads/) & pip (a Python package manager; typically comes with Python installs)

!!! note
    Specific Python installation instructions will depend on your OS; see above links for more info.

---

## Download the repo locally

From a terminal, enter the command:

```sh
git clone path/to/repo.git
```

For example, to download the [After Effects Scripting Guide](https://github.com/docsforadobe/after-effects-scripting-guide/):

```sh
git clone https://github.com/docsforadobe/after-effects-scripting-guide.git
```

---

## Install dependencies

Once Python is installed, you'll need to install the required dependencies for the specific documentation guide you're working in.

The dependencies for each repo is held in a text file in the root of the repo, `requirements.txt`.

These are things like the actual system used to build the project ("mkdocs"), as well as any plugins or extensions required for the specific guide you're working in.

**First, open a terminal to the repo's directory.**

Then, you can tell Python to install these dependencies globally onto your device with the following command:

```sh
pip install -r requirements.txt
```

If you're wanting to install these locally (for just the local user), you can append the `--user` flag:

```sh
pip install -r requirements.txt --user
```

#### MacOS & Virtual Environments

On MacOS, you may need to set up a virtual environment in order for Python to allow you to install these dependencies.

This author isn't familiar enough to explain *why* this is required, though these commands seem to do the trick *before* running the `pip` command above.

```sh
python3 -m venv venv/
source venv/bin/activate
```

This will create a subfolder in the directory, `/venv/`, that will hold these dependencies. These files should not be committed to the repo, with `/venv/` being present in each repo's `.gitignore` file.

---

## Build the project

Once the dependencies are installed, you can run the following command to build a local copy of the docs:

```sh
mkdocs serve
```

This will set up a virtual server, render the docs to html, and offer up a local url to view these local docs at.

By default, this local url is `http://127.0.0.1:8000`.

!!! tip
    Any update to the mkdocs config file (`./mkdocs.yml`) or any of the .md docs files will automagically reload the above pages, showing the updates!

Be sure to keep an eye on the terminal for any potential errors or warnings that may come up while working.
