"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const vscode_1=require("vscode"),Shaderlab_1=require("./Shaderlab");class SLSymbolProvider{provideDocumentSymbols(r,e){if(!Shaderlab_1.Shaderlab.IsDisabled(r)){let e=new Shaderlab_1.Shaderlab(r,new vscode_1.Position(0,0));r=e.provideSymbols();return Promise.resolve(r)}}}exports.default=SLSymbolProvider;