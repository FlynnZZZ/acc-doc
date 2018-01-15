设置
快捷键 [参照Atom快捷键设置] 
  设置-管理快捷键 进行修改
  快键键文件为 C:\Users\Fan\AppData\Roaming\Notepad++\shortcuts.xml
    <NotepadPlus>
        <InternalCommands>  <!-- 软件默认快捷键 对应 main menu --> 
            <Shortcut id="43034" Ctrl="no" Alt="no" Shift="no" Key="0" />
        </InternalCommands>
        <Macros>   <!-- 录制宏 对应 macros --> 
            <Macro name="copy-line" Ctrl="no" Alt="yes" Shift="no" Key="86">
                <Action type="0" message="2469" wParam="0" lParam="0" sParam="" />
            </Macro>
        </Macros>
        <UserDefinedCommands> 
            <Command name="Send via Outlook" Ctrl="yes" Alt="yes" Shift="yes" Key="79">outlook /a &quot;$(FULL_CURRENT_PATH)&quot;</Command>
        </UserDefinedCommands>
        <PluginCommands />
        <ScintillaKeys>   <!-- 对应 scintilla commands -->
            <ScintKey ScintID="2469" menuCmdID="42010" Ctrl="no" Alt="yes" Shift="no" Key="86" />
        </ScintillaKeys>
    </NotepadPlus>
    注:其中 快捷键优先级依次为:InternalCommands > Macros > UserDefinedCommands >
      PluginCommands > ScintillaKeys
      故当InternalCommands和自定义的快捷键有冲突时,在InternalCommands中对应的删除.
  原始快捷键          修改为           功能
    ◆无修改
    ctrl-b                               括号间跳转
    alt-h                                隐藏行  
    alt-d                                打开的文件比较      
    alt-S                                跟上次保存的文件比较   
    alt-b                                跟SVN的文件比较    
    ctrl-u                               转为小写 
    ctrl-h                               查找/替换对话框
    ctrl-t                               当行向上移动一行
    ctrl-f2                              切换书签
    ctrl-f3                              选定并找下一个
    ctrl-delete                          删除结束词
    ctrl-backSpace                       删除开始词
    ctrl-PageuP                          上一个差异地方      
    ctrl-Pagedown                        下一个差异地方      
    ctrl-alt-S                           另存为
    ctrl-alt-d                           关闭文件比较       
    ctrl-shift-f                         在文件中搜索 
    ctrl-shift-u                         转为大写  
    ctrl-shift-f3                        查找（volatil）上一页
    ctrl-shift-i                         组合增量搜索
    ctrl-shift-s                         保存所有文件
    ctrl-shift-leftMouse                 选取多行
    ctrl-shift-Pageup                    第一个差异地方      
    ctrl-shift-Pagedown                  最后一个差异地方     
    ctrl-shift-delete                    删除至行尾
    ctrl-shift-backSpace                 删除至行
    shift-f3                             查找上一个 
    shift-f2                             上一书签
    ◆同Atom相同
    f2                                   下一书签 
    f3                                   查找下一个 
    ctrl-leftmouse                       多光标操作
    ctrl-g                               行定位 
    shift-tab                            删除缩进
    ◆参照Atom修改
    ctrl-shift-up      ctrl-up           上移行
    ctrl-shift-down    ctrl-down         下移行
    ctrl-l             alt-d             剪切行 [约等于删除行]
    ctrl-j             alt-z             合并行 [不同于Atom,需要选取多行才能操作]
    ctrl-b             alt-f             转到匹配的括号
    alt-0              alt-1             折叠所有层次  
    alt-shift-0        alt-2             展开所有层次  
    ctrl-alt-f         alt-3             折叠当前层次
    ctrl-alt-shift-f   alt-4             展开当前层次
    unknow             ctrl-q            设置单行注释
    ctrl-alt-b         alt-q             选中括号内的字符 [需要在括号边缘可用]
    alt-shift-up/down  ctrl-alt-up/down  光标多选
    alt-b              alt-u             转换大写
    alt-b              alt-i             转换小写
    ctrl-f2            alt-x             设置/取消书签 [alt-x 默认为关闭当前标签]
    ctrl-f3            ctrl-d            选取并寻找下一个
    dimness            ctrl-e            快速寻找上一个
    ◆录制宏 
    ctrl-d             alt-v             复制当前行  
    backspace          f1                删除   [原f1为查看Notepad++详情]
    未知               alt-s              缩进
    未知               alt-a              取消缩进
    未知               alt-c              选中行
    ◆其他更改
    alt-c              alt-r             列编辑     [和Atom定义冲突]
    ctrl-alt-space     alt-e             路径补全
    dimness            ctrl-shift-q      取消注释
    unknow             ctrl-/            区块注释 
    unknow             alt-/             清除区块注释 
    unknow             ctrl-,            设置-首选项 
    unknow             ctrl-.            管理快捷键 
    ◆未知
    选中当前行
插件 
  autosave
Suggestion&Question 
  如何设置将所有文件默认作为Python格式  [Notepad++ python格式文件可以折叠]
    设置-语言格式设置-选择python 
    在自定义扩展名中填入需要的格式后缀 如 txt rec
  取消代码折叠后的下划线
  自定义扩展词 [snippet?]
