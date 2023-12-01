import * as vscode from 'vscode'



export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('pinyin-tonal-marking.helloWorld', () => {
    vscode.window.showInformationMessage('Hello World from Pinyin Tonal Marking!')
  })

  context.subscriptions.push(disposable)



  let text = "a1a2a3a4 e1e2e3e4 i1i2i3i4 o1o2o3o4 u1u2u3u4 v1v2v3v4v5\n"
  text += "A1A2A3A4 E1E2E3E4 I1I2I3I4 O1O2O3O4 U1U2U3U4 V1V2V3V4V5"

  console.log(text)
  console.log(performConversion(text))
}



export function deactivate() {}



// Functions
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
