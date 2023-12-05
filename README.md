# Pinyin Tonal Marking

This is a VS Code extension for converting the commonly used tonal marking format to their Unicode counterparts.

For example:
- `a1` -> `ā`
- `E3` -> `Ě`
- `v4` -> `ǜ`



## Features

### Automatic conversion as you type

<!-- Include animation of typing nihao shijie -->

Multi-caret editing is also supported

<!-- Include animation of typing with multiple cursors -->

This can be turned on or off using commands

<!-- Include animation of typing a1a2a3a4 with auto-conversion turned on and off -->

> Command used: `pinyinTonalMarking.autoConversion_turnOn` and `pinyinTonalMarking.autoConversion_turnOff`



### Manual conversion using commands

You can perform the conversion on the selected text

<!-- Include animation of using the command to covnert selected text -->

> Command used: `pinyinTonalMarking.performConversion_selectedText`



Or multiple selected text

<!-- Include animation of using the command to convert multiple selected text -->

> Command used: `pinyinTonalMarking.performConversion_multipleSelectedText`



Or the entire file

<!-- Include animation of using the command to convert entire file -->

> Command used: `pinyinTonalMarking.performConversion_entireFile`
> Note: Ensure no text is selected for the command to show up



## Settings

`piniynTonalMarking.turnOnAutoConversion` (default: `true`)

Will be read by the auto-conversion feature on startup, and updated whenever it's turned on and off



## Why does this exist?

When writing synchronized lyrics for my downloaded songs, I wanted to include both chinese and pinyin in chinese songs.

Why don't I just download lyrics and use them instead? Because it's rare to see chinese lyrics with piniyn included.

There are websites that do the same thing, but the whole process feels unintuitive, since it involves copy-pasting.

I've thought about making an input method editor (IME), but I would need to digitally sign it to be able to use it ([link to the reference](https://learn.microsoft.com/en-us/windows/apps/design/input/input-method-editors#requirements-for-imes)), thanks Microsoft.
