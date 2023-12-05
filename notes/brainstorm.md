# Core Function
Converts pinyin tonal marking format to their actual counterparts

Example:
- `a1` -> `ā`
- `o3` -> `ǒ`
- `v4` -> `ǜ`



# Features
- Automatic conversion while typing

  - Achieved by checking the 2 characters before the cursor whenever an `onDidChangeTextDocument` event is fired

  - Can be turned on or off using a command

  - Supports multiple cursor edits

- Perform conversion manually

  - Triggered using a command

  - Can perform conversion on the entire file, or only the selected text
