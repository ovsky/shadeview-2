"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const vscode_1=require("vscode"),Formatter_1=require("./Formatter"),Utilities_1=require("./Utilities");class ShaderlabDocumentRangeFormatter{provideDocumentRangeFormattingEdits(e,t,r,i){let o=vscode_1.workspace.getConfiguration();var a=null!=o.get("editorconfig.generateAuto");let n=vscode_1.window.activeTextEditor.options.insertSpaces;"string"!=typeof n&&a||(n=o.get("editor.insertSpaces"));let s=vscode_1.window.activeTextEditor.options.tabSize;"string"!=typeof s&&a||(s=o.get("editor.tabSize"));let g="\t";n&&0<s&&(g=Utilities_1.default.getRepeatText(" ",s));var l=o.get("formatting.style"),c=o.get("formatting.alignMacros"),d=o.get("formatting.tags.singleline"),a=!o.get("formatting.cbuffer");let u=new Formatter_1.default(g,s,l,c,d,a);return u.formatSelection(e,t)}}exports.default=ShaderlabDocumentRangeFormatter;