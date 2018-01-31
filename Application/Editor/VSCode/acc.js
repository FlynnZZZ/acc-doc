配置&配置文件 
  PS: 文件存放目录'C:/Users/<用户名>/AppData/Roaming/Code/User' 
  'settings.json',用户设置 
    PS: 文件-首选项-用户设置,进行设置 
  'keybindings.json',快捷键 
    PS: 文件-首选项-键盘快捷方式,进行设置;参照Atom快捷键设置; 
    枚举: 
      ★默认 
      f5                                                调试 
      ctrl-``                                           切换集成终端   
      ★暂时设置
      workbench.action.showCommands          ctrl+f1    显示所有命令
      ★其他参照Atom设置 
  'snippets/xxx.xx',用户代码片段 
插件 
  ★外观
  vscode-icons    // 文件图标主题
  One Dark Theme  // Atom的oneDark主题
  ★功能
  open in browser    // 在浏览器中打开文件 
    快捷键 alt-b
  Path Intellisense  // 路径提示 
  VS Color Picker    // 颜色选取 
    自定义快捷键 ctrl+alt+c 
  ★HTML
  Auto Rename Tag  // 同时修改HTML标签 
  HTML Snippets    // HTML语言代码提示 
  ★JS
  JavaScript Snippet Pack         // ES5及以下的代码提示
  JavaScript (ES6) code snippets  // ES6代码提示 
  jQuery Code Snippets            // jQuery代码提示 
自定义样式 
  PS: '安装目录/resources/app/out/vs/workbench/workbench.main.css' 
    该方式非正常渠道,编辑器会显示'文件被破环,是否重新安装' 
  /*自定义样式*/
  .mtki {  
    /*注释*/
    color: #1ca3a3 !important;
  }
Suggestion&Question 
  如何在折叠后的文字后新增新的文字
  折叠功能
    折叠后将后面所用的空行也折叠进去了,无法在折叠状态下,再在接着的后一行添加内容
