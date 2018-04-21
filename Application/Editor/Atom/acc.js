配置文件 
  PS: 文件存放路径'C:/Users/<用户名>/.atom/'
  'config.cson',用户全局设置 
    悬挂缩进: 2
    字体设置: Consolas,楷体 
      PS: consolas为atom默认字体
        字体间使用逗号隔开,第一个定义英文字体,第二个定义中文字体.
    取消勾选: ctrl+滚轮,调整字体大小
    忽略的文件: 
      .git, .hg, *.svn, .dS_Store, ._*, thumbs.db,
      *.docx, *.doc, *.pdf,*.jpg,*.project,*.lnk,*.ini,*.exe
    非实体字符'Non Word Characters' 
      // @/\()"':,.;<>~!#$%^&*|+=[]{}`?…、◆★●■▲▼（）,。-[]【】〖〗『』《》
  'keymap.cson',用户键盘映射 
    枚举: 
      自定义 
        Now         Prev              功能   
        ★键盘键位更改  
        f1          backspace         删除  
        f5          enter             换行  
        ★显示/隐藏/打开/关闭 
        alt-n       ctrl-shift-N      新建窗口 
        alt-m       ctrl-shift-A      添加项目文件夹 
        alt-l       ctrl-shift-T      恢复关闭的页面  
        alt-\       ctrl-|            在文件目录中定位当前文档 
        alt-1       ctrl-alt-{        折叠所有 
        alt-2       ctrl-alt-}        展开所有 
        alt-3       ctrl-alt-[        折叠当前 
        alt-4       ctrl-alt-]        展开当前 
        alt-e       ctrl-space        激活代码提示 
          默认快捷键存在bug
        alt-b       ctrl-alt-o        浏览器中打开文档 
        alt-p                         浏览器兼容写法 
        ★查询/选中  
        f4          shift-f3          查找时,到上一个 
        ctrl-e      ctrl-u            取消'ctrl-d'的选中 
        ctrl-p      alt-f3            选中所有匹配项   
        alt-q       ctrl-alt-,        选中括号内内容 
        alt-t       ctrl-alt-backspace  删除匹配括号 
        alt-f       ctrl-m            标签跳转 
        ★行操作 
        alt-c       ctrl-l            行选中 
        alt-v       ctrl-shift-D      行复制  
        ctrl-q      ctrl-/            行注释 
        alt-a       ctrl-[            行负缩进 
        alt-s       ctrl-]            行缩进 
        alt-z       ctrl-j            行合并  
        alt-enter   ctrl-shift-enter  行前插入 
        alt-x       ctrl-alt-f2       行标记 
        alt-d       ctrl-shift-K      行删除 
        ★插件快捷键 
        alt-r      ctrl-shift-b      script插件-运行代码
        alt-w      ctrl-q            script插件-清理当前进程 
        ★不常用 
        alt-u       ctrl-k ctrl-u     字母大写 
        alt-i       ctrl-k ctrl-l     字母小写 
      默认  
        ★显示/隐藏/打开/关闭  
        ctrl-,         打开设置面板 
        ctrl-o         打开文件 
        ctrl-n         新建页面  
        ctrl-w         关闭当前标签 
        ctrl-\         开关目录树 
        ctrl-space     激活代码提示 
        ctrl-shift-o   打开文件夹 
        ctrl-home      移到文档开始
        ctrl-end       移到文档结束
        ctrl-shift-s   保存所有打开的文件
        ctrl-shift-u   调出切换编码选项
        ★查询相关 
        f2             跳到当前文件的下一条书签
        ctrl-d         选取和当前单词相同的下一处
        ctrl-f2        列出当前工程所有书签
        ctrl-g         跳转到指定的行
        ctrl-f         当前页查找
        ctrl-shift-f   在整个文件夹中查找  
        ctrl-shift-p   调出命令查询框 
          可查询并执行命令
        ★行操作 
        ctrl+↑/↓       行移动
        ctrl-enter     在当前行的末尾回车
        ★光标操作  
        ctrl-click     增加新光标 
        ctr-→/←        单词单位移动 
        alt-→/←        单词单位移动 
        ctrl-alt-↑/↓   光标多选
        ★文件目录树操作  
        a             新增文件 
        shift-a       新增文件夹 
        m             修改文件名  
        delet         删除文件 
        ★不常用 
    未占用键汇总: 
      ★左
      // alt-f1 f2
      // alt-`
      // alt-g
      // ctrl-3 4
      ★右
      // alt- f7 f8 f9 f10
      // alt-6 7 8 9 0 - =
      // alt-y [ ]
      // alt-h j k l ; '
      // alt-, . /
      // ctrl-`
      // ctrl-u i
      // ctrl-j k ; '
      // ctrl-n m , . /
    Question: 
      如何切换到下一个和当前词相同的词
  'styles.less',用户样式设置 
    // 设置技巧: ctrl-shift-i 打开调试面板,然后调试样式 
  'snippets.cson',用户代码片段 
插件 
  自带插件 
    about                  关于Atom的信息查看 [help-about Atom]
      禁止后可能影响软件的自动升级
    autocomplete-atom-api  功能未知
    autocomplete-plus      完善自带 autocomplete,有二度设置
      勾选 allowed backspace to trigger autocomplete   当删除时也会激活可选列表选项
      'autocomplete-plus:activate' 将其快捷键 从 ctrl-space 改为 alt-e
        默认的ctrl-space 快捷键未生效
    autocomplete-Snippets  
    snippets               代码片段 
      通过关键词来扩展为代码块——tab/enter 
        使用alt+shift+s来查看所有的扩展 (?)
      Atom-自定义自动填充代码 Snippets(在这里我把 snippet 理解为代码块。)
        打开定义的文件
          打开 snippets.cson 文件,windows 平台的路径为 C:\users\用户名\.atom\snippets.cson。
        具体定义的方式
          输入snip,回车,就得到一个 snippet 模板。如下
            '.source.js':
            'Snippet Name':
            'prefix': 'Snippet trigger'
            'body': 'hello World!'
            解读
              '.source.js' 目标文件类型为 .js
              'Snippet Name' 要新建的 snippet 的名称
              'prefix' 触发当前 snippet 的代码
              'body' 要填充的代码
        Example: 例如给 C 语言的 if 写一个 snippet。
          '.source.c':
          'if':
            'prefix': 'if'
            'body': 'if($1){$2}'
          $1 表示光标的默认位置
          $2 按下 tab 键,光标跳到的第二个位置,以此类推
          另外,使用${1:'replaced'}替换$1即可转换光标到选定状态,选定内容为replaced

          在要填充的代码中使用回车并不能使代码填充以后自动换行,自动换行要使用\n,或者用"""将要填充的代码包起来。
          '.source.c':
          'if':
            'prefix': 'if'
            'body': """
              if($1)
              {
                  $2\n}
            """
          要给 C 语言文件定义多个 snippet ,只需在.source.c下从添加新的 snippet 名称写起。
          '.source.c':
          'if':
            'prefix': 'if'
            'body': """
              if($1)
              {
                  $2\n}
            """
          'while':
            'prefix': 'while'
            'body':"""
              while($1)
              {
                  $2
              }
            """
            //注:使用"""创建长模板
      自定义Snippets的扩展词时,定义的格式的确定
        在要定义的文档类型下,ctrl-shift-p   输入代码Editor: log Cursor Scope
        弹出字符如 txt格式的为 text.plain ,则.text.plain类似于.source.js表示一种文件格式
    autoflow               功能未知
    autosave               失焦或关闭时自动保存
    bookmarks              书签功能支持
    bracket-matcher        括号匹配功能 
      设置
        autocomplete characters [激活括号特性匹配的字符对]
          (), [], {}, "", '', ``, “”, ‘’, «», ‹›,<>,《》,（）,[],『』,【】,〖〗,><
        pairs with extra newline[在其中间换行时,自动多添加一行]
          (), [], {}
    find-and-replace       查找和替换 
      正则查找 
        将查找内容的部分进行替换 
          Example:
          查找 1122 将其替换为 11AA
          (11)22;
          $1AA;
          
          查找大写字符,在其前加上换行
          ([A-Z])
          \n$1
        清除空行:  \r\n\r\n   替换为 \r\n 
        在字符后换行:  a          替换为 a\n\t 
        查找词: \b<word>\b     
    go-to-line             跳转到指定行 
    command-palette        命令面板 
      快捷键  ctrl-shift-p
    settings-view          设置页面 
      快捷键
        ctrl-,    打开设置页
        ctrl-.    打开快捷键绑定页[self] 
          PS: '1.22.1' 不再支持该快捷键 
          '.platform-win32, .platform-linux':
            'ctrl-.': 'settings-view:show-keybindings'
    symbols-view          查看变量
      变量、函数 查找快捷键 ctrl-r
    tabs                  标签栏
      add new tabs at end  始终在最后打开文件
    timecop               统计加载时间
    tree-view             文件目录 
      设置
        focus on reveal  激活文件时,在文件目录定位
      快捷键
        ctrl-\         toggle,开关文件目录
        ctrl-shift-\   reveal active file,在目录中定位到当前文件
    wrap-guide            标尺线
    markdown-preview      在编辑器中以markdown展示 
      快捷键 ctrl-shift-m
    ★语言支持类插件 
    language-css           css语言支持 
      将'.'号从'非实体字符'中去除
    language-less          less语言支持 
      将'.'号从'非实体字符'中去除
    language-sass          sass语言支持 
      将'.'号从'非实体字符'中去除
    可禁用列表 
      about             关于Atom的介绍相关 
      archive-view       
      background-tips 
      delek 
      dev-live-reload 
      exception-reporting 
      fuzzy-finder 
      git-diff          对比差异
      github            
      image-view        图片预览 
      incompatible-packages 
      keybinding-resolver 
      link              显示连接 
      markdown-review 
      metrics           发送收集的信息 
      open-on-github    在github打开 
      package-generator 
      spell-check       拼写检查 
      symbols-view    
      update-package-dependencies 
      Welcome           欢迎页 
      whitespace   空白符设置 
        取消勾选
          Ensure Single trailing Newline      自动去掉文档最后的空行
          ignore Whitespace On Current line
          remove trailing Whitespace          自动删除行末空格
  社区扩展: 'C:/Users/f/.atom/packages'  
    aaa-snippets               自定义的代码片段   
    minimap                    缩略图 
      相关设置: 
      Absolute Mode   在缩略图下方显示代码  true 
      Char Width      缩略图代码宽度比例    0.7     
    minimap-highlight-selected 缩略图高亮
    color-picker               快捷颜色选择 
      颜色选取插件,点击颜色值弹出颜色选择板进行颜色选择,
      或直接使用快捷键ctrl+alt+c进行颜色值的选择插入.
    autocomplete-project-paths 路径补全 
      Question: 路径补全应为/而非\
    highlight-selected         高亮选中词 
    pigments                   根据颜色值显示颜色 
    regex-railroad-diagram     正则查看 
    remember-folds             记录折叠的状态
    open-in-browsers           在浏览器中快捷打开html 
      安装此插件会在编辑器下方添加浏览器的小图标,点击在浏览器中打开正在编辑的文档.
    atom-wx                    '.wxml','.wxss'语法高亮 
    language-vue               '.vue'语法高亮 
    script                     在Atom中运行代码  
      Default Current Working Directory (CWD) Behavior  // 设置代码执行时的路径 
        Directory of the script   // 当前代码执行的路径 
      目前存在的问题: 
        监听端口后,结束运行代码,程序仍占用端口 
    选用插件 
      atom-beautify              代码格式美化
      autocomplete-cocos2d-js    cocos的补全插件
      autoprefixer               用来补充css前缀的,会自动生成多个浏览器的前缀 
        自定义快捷键 alt-m
      file-icons                 显示文件图标 
      simplified-chinese-menu    菜单汉化 
      atom-wrap-in-tag           在选中字符外增加标签 
        (该快捷键有bug,不起效,使用 'alt-w': 'unset!' 命令来解决)
        自定义默认开始的标签
          设置 open-config-folder 
          找到   atom-wrap-in-tag 下的 wrap-in-tag.coffee 文件
          修改 代码
            tag = 'div'

            start:
              from: [tagrangePos.start.row, tagrangePos.start.column+1]
              to: [tagrangePos.start.row, tagrangePos.start.column+4]
            end:
              from: [tagrangePos.end.row, tagrangePos.end.column+7],
              to: [tagrangePos.end.row, tagrangePos.end.column+10]
      restore-windows            启动时加载之前的多窗口 
        最早关的窗口加载时最后加载
        统一全部关闭,则该插件不能准确的记住窗口下次打开的先后顺序
          若无项目文件夹,则默认不加载
        记录状态 如 标签等
总结 
  可在命令行中使用Atom打开当前文件: atom ./ 
  '1.18.0' 折叠正常,1.19.0 折叠非标准内容的文件存在bug,并且也不能记住折叠的状态  
  '1.20.0' 开启atom-beautify导致内存占用过高  
  '1.23.1' CSS代码提示,冒号后有空格则无提示 
  '1.25.1' 打开项目过多,导致运行很慢 
    display: block; 
  最新稳定版本: '1.21.2' 
Q&I: 
  优点总结
    折叠功能优秀
    选中字符后直接增加括号,则选中的内容被包括在括号内
    可无限回退,上次编辑过的文档在关闭后,下次仍可以回退
  上下移动多行会改变缩进
    解决方法:使用剪切代替行移动操作.
    相对的,可以使用此特性用于格式化代码
  无 块注释 功能?
  折叠功能
    html格式文件 行内标签折叠不能达到块便签的效果
  snippets 插件的自定义提示词,激活的关键字不能有重复
Q&A: 
  使用一段时间后,出现卡死崩溃,无响应的现象,关闭重新启动后一直处于卡死状态 
    $ atom --clear-window-state  // 命令行执行 
  


