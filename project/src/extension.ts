import * as vscode from 'vscode'



// Constants
// ===
const EXTENSION_NAME = "pinyinTonalMarking"
const SETTINGS_NAME_enableAutoConversion = "enableAutoConversion"
const CONTEXT_NAME_isAutoConversionTurnedOn = "isAutoConversionTurnedOn"



export function activate(context: vscode.ExtensionContext) {
  // Variables
  // ===
  let isApplyingEdit = false
  let disposableListener: vscode.Disposable

  updateState_isAutoConversionTurnedOn(
    vscode.workspace.getConfiguration(EXTENSION_NAME).get(SETTINGS_NAME_enableAutoConversion)!
  )



  // Commands
  // ===
  let disposables = [
    vscode.commands.registerCommand(`${EXTENSION_NAME}.autoConversion_turnOn`, () => {
      updateState_isAutoConversionTurnedOn(true)
    }),



    vscode.commands.registerCommand(`${EXTENSION_NAME}.autoConversion_turnOff`, () => {
      updateState_isAutoConversionTurnedOn(false)
    }),



    vscode.commands.registerCommand(`${EXTENSION_NAME}.performConversion_entireFile`, () => {
      let document = vscode.window.activeTextEditor!.document

      isApplyingEdit = true

      vscode.window.activeTextEditor?.edit((editBuilder) => {
        editBuilder.replace(
          new vscode.Range(
            document.lineAt(0).range.start,
            document.lineAt(document.lineCount - 1).range.end
          ),
          performConversion(document.getText())
        )
      }).then(() => {
        isApplyingEdit = false
      })
    }),



    vscode.commands.registerCommand(`${EXTENSION_NAME}.performConversion_selectedText`, () => {
      let selectionRange = vscode.window.activeTextEditor!.selection.with()

      isApplyingEdit = true

      vscode.window.activeTextEditor?.edit((editBuilder) => {
        editBuilder.replace(
          selectionRange,
          performConversion(vscode.window.activeTextEditor!.document.getText(selectionRange))
        )
      }).then(() => {
        isApplyingEdit = false
      })
    })
  ]

  context.subscriptions.push(...disposables)



  // Functions
  // ===
  function performConversion(text: string): string {
    // Lower case
    text = text.replaceAll("a1", "ā")
    text = text.replaceAll("a2", "á")
    text = text.replaceAll("a3", "ǎ")
    text = text.replaceAll("a4", "à")

    text = text.replaceAll("e1", "ē")
    text = text.replaceAll("e2", "é")
    text = text.replaceAll("e3", "ě")
    text = text.replaceAll("e4", "è")

    text = text.replaceAll("i1", "ī")
    text = text.replaceAll("i2", "í")
    text = text.replaceAll("i3", "ǐ")
    text = text.replaceAll("i4", "ì")

    text = text.replaceAll("o1", "ō")
    text = text.replaceAll("o2", "ó")
    text = text.replaceAll("o3", "ǒ")
    text = text.replaceAll("o4", "ò")

    text = text.replaceAll("u1", "ū")
    text = text.replaceAll("u2", "ú")
    text = text.replaceAll("u3", "ǔ")
    text = text.replaceAll("u4", "ù")

    text = text.replaceAll("v1", "ǖ")
    text = text.replaceAll("v2", "ǘ")
    text = text.replaceAll("v3", "ǚ")
    text = text.replaceAll("v4", "ǜ")
    text = text.replaceAll("v5", "ü")

    // Upper case
    text = text.replaceAll("A1", "Ā")
    text = text.replaceAll("A2", "Á")
    text = text.replaceAll("A3", "Ǎ")
    text = text.replaceAll("A4", "À")

    text = text.replaceAll("E1", "Ē")
    text = text.replaceAll("E2", "É")
    text = text.replaceAll("E3", "Ě")
    text = text.replaceAll("E4", "È")

    text = text.replaceAll("I1", "Ī")
    text = text.replaceAll("I2", "Í")
    text = text.replaceAll("I3", "Ǐ")
    text = text.replaceAll("I4", "Ì")

    text = text.replaceAll("O1", "Ō")
    text = text.replaceAll("O2", "Ó")
    text = text.replaceAll("O3", "Ǒ")
    text = text.replaceAll("O4", "Ò")

    text = text.replaceAll("U1", "Ū")
    text = text.replaceAll("U2", "Ú")
    text = text.replaceAll("U3", "Ǔ")
    text = text.replaceAll("U4", "Ù")

    text = text.replaceAll("V1", "Ǖ")
    text = text.replaceAll("V2", "Ǘ")
    text = text.replaceAll("V3", "Ǚ")
    text = text.replaceAll("V4", "Ǜ")
    text = text.replaceAll("V5", "Ü")

    return text
  }



  function updateState_isAutoConversionTurnedOn(value: boolean) {
    vscode.workspace.getConfiguration().update(
      `${EXTENSION_NAME}.${SETTINGS_NAME_enableAutoConversion}`,
      value,
      true
    )

    vscode.commands.executeCommand(
      "setContext",
      `${EXTENSION_NAME}.${CONTEXT_NAME_isAutoConversionTurnedOn}`,
      value
    )

    if (value) {
      disposableListener = vscode.workspace.onDidChangeTextDocument(autoConversionListener)
    }
    else {
      if (disposableListener !== undefined) {
        disposableListener.dispose()
      }
    }

    vscode.window.setStatusBarMessage(
      `Pinyin Tonal Marking: Auto-conversion has been turned ${value ? "on" : "off"}`,
      5000
    )
  }



  function autoConversionListener(event: vscode.TextDocumentChangeEvent) {
    let cursorPosition = vscode.window.activeTextEditor?.selection.active!

    if (
      cursorPosition.character === 0 ||
      isApplyingEdit ||
      event.reason !== undefined
    ) {
      return
    }



    let rangeBeforeCursor = new vscode.Range(
      cursorPosition.translate(0, -1),
      cursorPosition.translate(0, 1)
    )
    let textBeforeCursor = event.document.getText(rangeBeforeCursor)

    if (textBeforeCursor.match(/^[aeiouv][12345]$/i) === null) {
      return
    }



    isApplyingEdit = true

    vscode.window.activeTextEditor?.edit((editBuilder) => {
      editBuilder.replace(rangeBeforeCursor, performConversion(textBeforeCursor))
    }).then(() => {
      isApplyingEdit = false
    })
  }
}



export function deactivate() {}
