# 🌈 ShadeView - HLSL/GLSL/Compute Shader Support for Visual Studio Code

---

## ✨ Description

**ShadeView 2** for Visual Studio Code provides the first-ever comprehensive support for writing **HLSL** (High-Level Shading Language) and **GLSL** (OpenGL Shading Language), along with **ShaderLab** and **Compute Shaders** in the **VSC IDE**. Designed specifically for graphics engineers and developers working with shaders, especially in Unity and GODOT - but it also works with every engine you choose!
The plugin enhances your workflow by bringing advanced features for these languages directly into **Visual Studio Code** and/or your favorite **VSC-based** code editor and game engine.

Marketplace: https://marketplace.visualstudio.com/items?itemName=awwsky.shadeview

## 🚀 Installation

1. Launch **VSCode**.
2. Go to the Extensions view **(View > Extensions)**.
3. Search for the **"ShadeView 2"**.
4. Install the plugin.
5. Reload VSCode.

> 🎉 Enjoy! :)

## ⚙️ Instructions

### ⚡ Fast Way:

1. Open a shader file.
2. From the VSCode bottom bar, where you may see the "Plain Text" label, select **"ShadeView" or "ShadeLab""** as Language Mode.

### 🛠️ Perfect Way:

1. Open a shader file.
2. Press `CTRL + SHIFT + P` to open the command palette.
3. Select **"Format Document With..."**.
4. Select **"Configure Default Formatter"**.
5. Choose **"ShadeView" or "ShadeLab""** as Language Mode.
6. Done! 🎊

## 🌟 Features

![selection](./extension/images/data/selection.png)

- **🔍 Syntax Highlighting**:  
  Robust syntax highlighting for HLSL,GLSL and Compute Shaders, making it easier to read and navigate shader code. It highlights language-specific keywords, types, functions, and more.

- **💡 Autocomplete**:  
  Intelligent code completion for HLSL, GLSL and Compute Shaders built right into VSCode. Get suggestions for language constructs and shader functions, reducing time spent on remembering function names and syntax.

- **📜 Code Snippets**:  
  Quickly insert common shader code snippets, such as function templates for vertex and fragment shaders, matrix transformations, or texture sampling, to accelerate shader development.

- **📚 Built-In Shaders Documentation**:  
  Just `hover your mouse over a keyword` and you'll see _exactly what it does_!
  However, if it's an engine method - press `F12` to see the definition or if it is complicated one, right-click and select **Go to Definition** to see clearly how the method works!

- **❗ Error Highlighting**:  
  Real-time error detection and linting for HLSL, GLSL and Compute Shader code, ensuring you catch issues before compilation, with detailed error messages.

- **🔧 Debugging Support**:  
  Integrated debugging features like stepping through code, inspecting variables, and viewing real-time outputs.

- **🌍 Cross-Platform Support**:  
  Fully compatible with both Windows and MacOS for HLSL, GLSL and Compute development, with partial or full support for Linux - depending on which distribution you use.

- **⚙️ Customizable Settings**:  
  Customize the plugin's features to your preferences, including adjusting syntax highlighting, customizing linting rules, or setting up custom code snippets and more.

## 🛠️ Work In Progress (WIP)

- **🔮 Integrated In-Editor GLSL/HLSL Shader Preview**:
- Test your shader code directly within Visual Studio Code with an integrated GLSL and HLSL compiler, ensuring your shaders are valid and ready for your graphics pipeline!
  **Preview:**
  ![Preview Shader Realtime](https://i.ibb.co/W08rk4P/Screenshot-2024-09-28-203434354453.png)

          Community requested featue! :) Currently hidden, but easy to find and fully available for plugin supporters.
