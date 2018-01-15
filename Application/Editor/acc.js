键盘的键值码 
  ◆字母和数字键的键码值
    A 65
    B 66
    C 67
    D 68
    E 69
    F 70
    G 71
    H 72
    I 73
    J 74
    K 75
    L 76
    M 77
    N 78
    O 79
    P 80
    Q 81
    R 82
    S 83
    T 84
    U 85
    V 86
    W 87
    X 88
    Y 89
    Z 90
    0 48
    1 49
    2 50
    3 51
    4 52
    5 53
    6 54
    7 55
    8 56
    9 57
  ◆数字键盘上的键的键码值
    0 96 
    1 97 
    2 98 
    3 99 
    4 100 
    5 101 
    6 102 
    7 103 
    8 104 
    9 105 
    * 106 
    + 107 
    Enter 
    - 109 
    . 110        
    / 111        
  ◆功能键键码值(keyCode)
    F1 112 
    F2 113 
    F3 114 
    F4 115 
    108 F5 
    F6 117 
    F7 118
    F8 119
    F9 120
    F10 121
    116 F11 122
    F12 123 
  ◆控制键键码值(keyCode)
    BackSpace   8   
    Tab         9   
    Clear       12 
    Enter       13 
    Shift       16 
    Control     17 
    Alt         18 
    Cape Lock   20 
    Esc         27 
    Spacebar   32 
    Page Up     33 
    Page Down   34 
    End         35 
    Home       36 
    Left Arrow  37 
    Up A        38
    Right Arrow 39 
    Down Arrow 40 
    Insert     45 
    Delete     46 
    Num Lock   144 
    ;:         186 
    =+         187 
    -_         189
    .>         190
    /?         191
    // `~         192
    [{         219
    /|         220
    ]}         221
Question&Idea 
--------------------------------------------------------------------------------
其他编辑器: 
SublimeText3 
  ◆设置 
    缩进宽度         查看   缩进 标签宽度:2
    自动换行         查看   自动换行
    分屏             查看   窗口布局
    失焦自动保存     首选项 设置-用户  "save_on_focus_lost": true,
    字体设置                           "font_face": "consolas", (或楷体)
    一直显示折叠图标                    "fade_fold_buttons": false,
  ◆快捷键 [参照Atom快捷键设置] 
    首选项 按键绑定-用户 中设置
    默认快捷键
      ctrl+x         未选中文字的情况下,剪切光标所在行
      ctrl+shift+m   选择括号内的内容
      // ctrl+shift+`   选择文本的包裹标签   [需要Emmet插件]
      ctrl+shift+a   类似于ctrl+d,向上一层扩展选中 [需要Emmet插件]
      ctrl+shift+d   复制行或选中项,若已选中文本则复制,否则复制光标所在行
      ctrl+shift+v   粘贴并复制格式
      alt+shift+w    选中项外包裹的标签
      ctrl+shift+;   删除包裹的标签
      ctrl+J         选择标签内容
      ctrl+f         查找内容
      ctrl+shift+f   查找并替换
      ctrl+h         替换
      ctrl+r         前往 method
      ctrl+k+b       开关侧栏
      ctrl+m 光标移动至括号内结束或开始的位置。
      ctrl+shift+m   选中当前括号内容,重复可选着括号本身
      ctrl+f2 设置/删除标记
      ctrl+shift+/ 当前位置插入注释
      ctrl+alt+/:块注释,并focus到首行,写注释说明用的
      ctrl+shift+A:选择当前标签前后,修改标签用的
      alt+.:闭合标签
      alt+shift+数字:分屏显示
      alt+数字:切换打开第N个文件
      shift+右键拖动:光标多不,用来更改或插入列内容
      按ctrl,依次点击或选取,可需要编辑的多个位置
      按ctrl+shift+上下键,可替换行
      ctrl+shift+l 先选中多行,再按下快捷键,会在每行行尾插入光标
        即可同时编辑这些行。
      ctrl+← 向左单位性地移动光标
      ctrl+→ 向右单位性地移动光标
      shift+方向键  选中内容
      ctrl+shift+左右键  向单位性地选中文本。
      ctrl+shift+上下键  将光标所在行和上/下一行代码互换（
        将光标所在行插入到上一行之前
      ctrl+alt+上下键    向上/下添加多行光标,可同时编辑多行。
      ctrl+shift+d 复制光标所在整行,插入到下一行。
      ctrl+k+k 从光标处开始删除代码至行尾。
      ctrl+shift+k 删除整行。
      ctrl+k+u 转换大写。
      ctrl+k+l 转换小写。
      ctrl+t 左右字母互换。
      f6 单词检测拼写
      ctrl+P 打开搜索框。
        举个栗子:1、输入当前项目中的文件名,快速搜索文件,
        2、输入@和关键字,查找文件中函数名,
        3、输入:和数字,跳转到文件中该行代码,
        4、输入#和关键字,查找变量名。
      ctrl+g 打开搜索框,自动带:,输入数字跳转到该行代码。
        举个栗子:在页面代码比较长的文件中快速定位。
      ctrl+r 打开搜索框,自动带@,输入关键字,查找文件中的函数名。
        举个栗子:在函数较多的页面快速查找某个函数。
      ctrl+: 打开搜索框,自动带#,输入关键字,查找文件中的变量名、属性名等。
      ctrl+shift+P 打开命令框。
        场景栗子:打开命名框,输入关键字,调用sublime text或插件的功能,
        例如使用package安装插件。
  ◆插件 
    convertutf8 在保存后会自动重载 
      使用convertutf8之后,保存大文件时会乱码或卡顿
      当时对St还有点热情,所以去把convertutf8的代码改了,禁止保存后重载就行了。
    bufferScroll-st 
      保存折叠状态的插件
    Alignment:代码对齐插件,快捷键:Ctrl+Alt+A
    ConvertToUTF8:支持GBK查看与编辑插件
    Emmet:HTML/CSS代码快速编写插件
    JsFormat:JS格式化插件,快捷键:Ctrl+Alt+F
    KeymapManager:快捷键管理插件,快捷键:Ctrl+Alt+K
    Package Control:插件安装
    SideBarEnhancements:侧边栏插件
    Theme - Nil:SideBarEnhancements皮肤
  ◆Suggestion&Question 
    折叠功能
      文本状态下,全部折叠可能不会全部折叠起来
      全部折叠不会将所有可折叠的都折叠起来
      一行缩进的格式不会折叠如以下格式:
        1 
          2
    不可分别设置 中、英文字体
  ◆其他 
    注册密钥:
      LiuFengQingYin
      Unlimited User License
      EA7E-19762
      9916F04082CF9BE66CF22672F5E5003D
      473E7A66546048B6A68EE51BA52A13E2
      3DDE5CE64F1E3E389EEA012D40AE0B8D
      60FA83CD784771F5D0512FB346D10945
      D6338C5EA7A4D98B000E04C5FC0D9B0D
      53BD0E0957882DC55B87E77C4131B14F
      BD045138673EA9B3F3A28D84A8F9C3AE
      0312B06CB39656D268F6F81C9586DFDF
Hbuilder 
  设置
----------------------------------------------------------------------以下待整理







 