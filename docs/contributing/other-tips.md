# Other Tips

Various other tips, suggestions, solutions that we've found to be helpful when working on these guides.

---

## Use code editor extensions!

As markdown is such a common language, there are a *ton* of code editor extensions to help writing it. Take advantage of them!

One specific place this can help is when working with [tables](./style-guide.md#tables). As these can get fairly long and unwieldy, being able to quickly format the table to align columns & fix formatting is *way* better than doing this by hand.

---

## Adding undocumented attributes or methods

If you find attributes or methods that are not mentioned in this documentation, and they are not publically announced by Adobe, please add this warning to attribute/method so the user knows to use it at their own risk.

=== "Rendered"

    !!! warning
        This method/property is officially undocumented and was found via research. The information here may be inaccurate, and this whole method/property may disappear or stop working some point. Please contribute if you have more information on it!

=== "Markdown"

    ```
    !!! warning
        This method/property is officially undocumented and was found via research. The information here may be inaccurate, and this whole method/property may disappear or stop working some point. Please contribute if you have more information on it!
    ```
