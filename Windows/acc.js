◆系统特性、设置及说明 
  系统[部分]字体更改
    在桌面上右击-个性化-窗口颜色-高级外观设置-在项目中进行每项的字体显示更改。
  设置win7资源管理器默认打开为“我的电脑”
    关闭所有的资源管理器窗口，Shift+在任务栏的资源管理器图标上右击，选属性。
    在目标“%windir%\explorer.exe”的后面加一个空格和逗号
    （即：%windir%\explorer.exe ,），然后保存。
    记住此方法是把输入法切换在英文状态下进行。
---------------------------------------------------------------------------
◆快捷键、小技巧 
  Alt+Space+N——窗口最小化
  开始+D——桌面显示
  Ctrl+方向键右——光标移到下一空格处（或行尾）
  Ctrl+方向键左——光标移到上一空格处（或行首）
  Ctrl+方向键下——光标移到下一段落处（或段尾）
  Ctrl+方向键下——光标移到上一段落处（或段首）
  Ctrl+Shift+方向键——文字选择
  Ctrl+A——全选
  Ctrl+F——查找
  Ctrl+P——打印
  Ctrl+S——保存
  Ctrl+Z——取消
  Alt+F4——退出
  Ctrl+滚轮——缩放
  Shift+方向键——多个项目选择
  Alt+Enter——显示所选项的属性
  Ctrl+F4——关闭多个文档
  (Ctrl+)Alt+Tab(+方向键)——在打开的项目间切换
  （Ctrl+）Windows+Tab（+方向键）——3D形式切换界面
  Alt+Esc——以项目打开的顺序切换项目
  Ctrl+Esc——打开开始菜单
  Shift+F10——打开右键菜单
  Alt+上——打开文件夹的上级菜单
  Ctrl+Shift+Esc——打开任务管理器
  Windows+数字——打开任务栏上的第几个程序
  Windows+D——显示桌面
  Windows+E——打开我的电脑
  Windows+L——锁定计算机或切换用户
  Windows+R——打开运行对话框
  Windows+T——切换任务栏上的程序
  Windows+Space——预览桌面
  Windows+方向键——最大化/最小化/最大化到屏幕左/右侧
  Windows+F——搜索文件或文件夹
  Ctrl+Windows+F——搜索计算机（需要在网络上）
  Ctrl+N——另外打开一新的该窗口

  Shift+拖动——可将复制到换成移动到
  prtscSysRq——截屏（全屏）
    截屏后需在画图软件中粘贴出来，才可以查看
        
    缩放（桌面图标大小调整）
        Ctrl+鼠标滚轮       
    文件编辑、修改与保存
        将文件保存为PDF格式文件
            第一种方法：另存为进行保存为PDF，若没有保存为PDF的选项，可使用第二种方法：打印-选择打印机PDFCreator-打印-选择保存位置。
    选择文字
        Shift+左、右方向键
---------------------------------------------------------------------------
◆Question&Answer 
  为什么Word、Excel等文字中句号。在中间显示？
    港台用的宋体句号在中间。
    
  桌面图标排列方式改为纵向排列。

  U盘右键菜单中格式化和弹出放在一起，不太好，菜单的排序方式应该与使用方便、合理为原则。
---------------------------------------------------------------------------
关机设置
  Shutdown -s -t XX       XX秒后关机
  shutdown -a             取消关机
  at 22:00 shutdown -s    在22：00定时关机
通过自带防火墙控制软件联网方法
  可通过360上网管理-联网控制,发现联网的程序及确定其位置
  步骤
    进入到防火墙设置页->高级设置,
    选择 出站规则 或 进站规则,进行 新建规则 ,
    然后跟着指引设置即可
◆Problem: 
一直更新失败 
  停止 'Windows update' 和 'Background Intelligent Transfer Service' 服务  
  方法一: 
    删除临时文件 
      'C:\Windows\SoftwareDistribution'下
      删除 DataStore 文件夹下的内容和 Download 文件夹下的内容 
    重命名'SoftwareDistribution'文件夹为'SDfolder' ? 
      Windows+R 打开运行,输入 services.msc 并回车 
      打开'Windows  Update'服务,点击'服务状态'下面的'关闭'按钮,将启动类型改为'禁用'
      然后重命名,完成后,重启之后重新启用 Windows  Update 服务再尝试检查更新和安装 
  方法二: 
    删除文件夹 'C:\Windows\System32\Tasks\Microsoft\XblGameSave' 
    删除注册表文件夹 'HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\WindowsNT\CurrentVersion\Schedule\ TaskCache\Tree\Microsoft\XblGameSave' 
  方法三: 
    控制面板/疑难解答/使用windows更新解决问题 
  终极方法: 搜索'windows10',进入下载页,点击立即更新,下载辅助更新软件'易升' 
svchost.exe 占大量网速和内存 
  右键我的电脑----管理---选择服务 
  找到 Background Intelligent Transfer Service
  服务状态改为停止服务
  启动类型改为手动或禁用






