# Style Guide

These guides are primarily written in plain, vanilla markdown. With that said, in order to maintain a consistent experience across docs, we require contributors to adhere to some opinionated decisions.

In addition, we *are* making use of some specific features & syntax decisions introduced by the current rendering framework being used ([MkDocs](https://www.mkdocs.org/) for the engine, [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) for the theme base).

This page serves to clarify some of these decisions, as well as specific tips and workflows for ensuring consistency.

!!! note
    If anything is unclear or should be re-evaluated, please open a ticket or discussion post in the [Github org](https://github.com/docsforadobe/).

---

## Writing Tips

- **Do not manually insert linebreaks**! Let the text be long; it will wrap as necessary upon render.
- Any indented blocks **require four spaces** in order to properly nest. This applies to lists, admonitions, nested content blocks, and more. Four spaces!
- As frequently as possible, **add crosslinks in the guides**!
  - If an attribute returns an object that's also documented, adding in a crosslink from the attribute's "type" to the other object's page greatly improves the user experience in these guides.

---

## Element Templating

Typically, we try to ensure consistency between all Class pages across the docs, and between all Attributes and Methods.

### Class Pages

These should broadly be structured following the below template. Note that not all page elements may apply, or some other page elements may be added as needed.

Note that depending on the specific page format, the 'depth' of each title (as far as number of `#`) may change.

=== "Template"

    ```md
    # Page Title

    `sample.call`

    #### Description

    Description of this class

    #### Example

    Class-wide example(s), if applicable

    ---

    ## Attributes

    { list of attributes }

    ---

    ## Methods

    { list of attributes }
    ```

=== "Sample"

    ```md
    # Layer object

    `app.project.item(index).layer(index)`

    #### Description

    The Layer object provides access to layers within compositions. It can be accessed from an item's layer collection either by index number or by a name string.

    #### Example

    If the first item in the project is a [CompItem](../item/compitem.md), this example disables the first layer in that composition and renames it. This might, for example, turn an icon off in the composition.

    `var layer = app.project.item(1).layer(1);`

    ---

    ## Attributes

    ---

    ## Methods
    ```

### Attributes

In this context, attributes are synonymous with object properties. (ie `class.attribute`, e.g. `layer.name`).

The base attribute template should look similar to:

=== "Template"

    ```md
    ### Class.attributeName

    `sample.attribute.call`

    #### Description

    Attribute description

    #### Type

    Property Type. { Read-only, if applicable. }

    { If enum, list possible options. }
    { If an object, create a table of object properties. }
    ```

=== "Sample"

    ```md
    ### Layer.autoOrient

    `app.project.item(index).layer(index).autoOrient`

    #### Description

    The type of automatic orientation to perform for the layer.

    #### Type

    An `AutoOrientType` enumerated value; read/write. One of:

    - `AutoOrientType.ALONG_PATH` Layer faces in the direction of the motion path.
    - `AutoOrientType.CAMERA_OR_POINT_OF_INTEREST` Layer always faces the active camera or points at its point of interest.
    - `AutoOrientType.CHARACTERS_TOWARD_CAMERA` Each character in a per-character 3D text layer automatically faces the active camera.
    - `AutoOrientType.NO_AUTO_ORIENT` Layer rotates freely, independent of any motion path, point of interest, or other layers.
    ```

### Methods

Methods are formatted similarly to attributes, with two primary differences:

- The addition of the `Parameters` section, including a table of parameters
- The use of `Returns` in lieu of `Type` for the method's returned type.

=== "Template"

    ```md
    ### Class.methodName()

    `sample.method.call()`

    #### Description

    Method description

    #### Parameters { If applicable }

    |    Parameter    |   Type    | Description |
    | --------------- | --------- | ----------- |
    | `parameterName` | Item type | Description |

    #### Returns

    Property Type.

    { If enum, list possible options. }
    { If an object, create a table of object properties. }
    ```

=== "Sample"

    ```md
    ### Layer.activeAtTime()

    `app.project.item(index).layer(index).activeAtTime(time)`

    #### Description

    Returns `true` if this layer will be active at the specified time.

    To return `true`, the layer must be enabled, no other layer may be soloing unless this layer is soloed too, and the time must be between the `inPoint` and `outPoint` values of this layer.

    #### Parameters

    | Parameter |         Type         |     Description      |
    | --------- | -------------------- | -------------------- |
    | `time`    | Floating-point value | The time in seconds. |

    #### Returns

    Boolean.
    ```

---

## Tables

---

## Admonitions

Often, we'll want to call out specific pieces of info to the end reader. Typically, these are in the form of **notes**, **tips**, and **warnings** though [more admonitions](https://squidfunk.github.io/mkdocs-material/reference/admonitions/) can be used as appropriate.

To author these, use the following sytax. Note that the content **must be indented with 4 spaces** in the line following the header!

Adding in linebreaks, lists, code, etc. are all supported within admonitions.

### Note

Notes detail version added, and/or relevant pieces of information.

=== "Rendered"

    !!! note
        Notes detail version added, and/or relevant pieces of information.

=== "Markdown"

    ```
    !!! note
        Notes detail version added, and/or relevant pieces of information.
    ```

### Tip

Tips detail version added, and/or relevant pieces of information.

=== "Rendered"

    !!! tip
        Tips detail version added, and/or relevant pieces of information.

=== "Markdown"

    ```
    !!! tip
        Tips detail version added, and/or relevant pieces of information.
    ```

### Warning

Warnings convey negative behaviours, or when something won't work the way you'd expect.

=== "Rendered"

    !!! warning
        Warnings convey negative behaviours, or when something won't work the way you'd expect.

        They're also used to indicate undocumented elements.

=== "Markdown"

    ```
    !!! warning
        Warnings convey negative behaviours, or when something won't work the way you'd expect.

        They're also used to indicate undocumented elements.
    ```

---
