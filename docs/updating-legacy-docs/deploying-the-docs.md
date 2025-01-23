# Deploying the Updated Docs

!!! tip
    Note that the following guide is only possible for Org admins. If you're stuck at this step, please contact an organization admin to proceed.

Once a conversion-branch PR has been approved & merged into the main repo, it's time to deploy the new docs.

Once the PR has been merged in, the automated build process (from `.\github\workflows\ci.yml`) should run, generating a new branch `gh-pages`. This is the branch we'll use to generate the hosted page via Github Pages.

## Changes in the Repo

1. Update the `./docs/CNAME` file to reflect the new custom domain (ie `ae-scripting.docsforadobe.dev` -> `ai-scripting.docsforadobe.dev`) & ensure this change is committed & pushed
    - If this isn't committed to the main branch, then every push to the repo (and CI action) will remove this file and lose the custom domain. See [this gh-pages issue](https://github.com/tschaub/gh-pages/issues/236).


## Changes on Github

1. From the Github repo, set up Pages & have it use this new branch.
    - `Settings` > `Pages` > Enable Pages
    - `Deploy from a Branch` > Choose the named branch above
    - For folder, choose "/ (root)"
2. Set up the custom domain (`xx.docsforadobe.dev`)
    - This _may_ already be defined by the above CNAME file, but check here just in case.
    - Enable "Enforce HTTPs"

## Changes on web host

1. In the domain registrar / web host, enable DNS-only hosting for this domain
2. Add a CNAME record pointing to `docsforadobe.github.io`
3. Apply for an SSL cert
4. Remove any readthedocs.io hooks from the Github repo
5. Set up branch permissions to require PRs to the main branch

## Changes in readthedocs.io

1. Remove the legacy docs from readthedocs.io
