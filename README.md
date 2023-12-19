# Pinyin Tonal Marking

This is a VS Code extension for converting the commonly used tonal marking format to their Unicode counterparts.

For example:
- `a1` -> `ā`
- `E3` -> `Ě`
- `v4` -> `ǜ`



## Features

### Automatic conversion as you type

![Demo of typing pinyin using Piniyn Tonal Marking](docs/Auto%20conversion%20-%20hello%20world.webp)

Multi-caret editing is also supported

![Demo of using Pinyin Tonal Marking with multiple cursors](docs/Auto%20conversion%20-%20multiple%20cursors.webp)

This can be turned on or off using commands

![Demo of turning Pinyin Tonal Marking's auto-conversion on and off](docs/Auto%20conversion%20-%20turn%20on%20and%20off.webp)

> Command used: `pinyinTonalMarking.autoConversion_turnOn` and `pinyinTonalMarking.autoConversion_turnOff`



### Manual conversion using commands

You can perform the conversion on the selected text

![Demo of using Pinyin Tonal Marking's manual conversion on a selected text](docs/Manual%20conversion%20-%20selected%20text.webp)

> Command used: `pinyinTonalMarking.performConversion_selectedText`



Or multiple selected text

![Demo of using Pinyin Tonal Marking's manual conversion on multiple selected text](docs/Manual%20conversion%20-%20multiple%20selected%20text.webp)

> Command used: `pinyinTonalMarking.performConversion_multipleSelectedText`



Or the entire file

![Demo of using Pinyin Tonal Marking's manual conversion on an entire file](docs/Manual%20conversion%20-%20entire%20file.webp)

> Command used: `pinyinTonalMarking.performConversion_entireFile`
> Note: Ensure no text is selected for the command to show up



## Installation

1. Download the `.vsix` file at the [Releases tab of this repo](https://github.com/ARipeAppleByYoursTruly/pinyin-tonal-marking/releases)
2. Install the extension by clicking the `Intall from VSIX...` option on the Extensions tab, and selecting the `.vsix` file



## Settings

`piniynTonalMarking.turnOnAutoConversion` (default: `true`)

Will be read by the auto-conversion feature on startup, and updated whenever it's turned on and off



## Why does this exist?

When writing synchronized lyrics for my downloaded songs, I wanted to include both chinese and pinyin in chinese songs.

Why don't I just download lyrics and use them instead? Because it's rare to see chinese lyrics with piniyn included.

There are websites that do the same thing, but the whole process feels unintuitive, since it involves copy-pasting.

I've thought about making an input method editor (IME), but I would need to digitally sign it to be able to use it ([link to the reference](https://learn.microsoft.com/en-us/windows/apps/design/input/input-method-editors#requirements-for-imes)), thanks Microsoft.
