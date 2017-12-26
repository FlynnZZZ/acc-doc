BIOS'Basic Input/Output System',基本输入输出系统 
  boot mode 启动模式 
    UEFI   新式的BIOS
    legacy 传统BIOS
  Secure BOOT 安全启动 
  USB Boot  U盘启动 
系统安装-老毛桃UEFI版U盘启动安装 
  一: 按照教程制作UEFI版启动U盘 
    制作的U盘可能是一个分区也可能是两个分区,
    因为单个文件大于4G无法放置到FAT32格式的启动U盘中, 
    故需使用两个分区的模式‹可能需制作多次›,
    将‹大于4G的›系统镜像放置到NTFS格式的分盘中 
  二: 按照教程进行系统安装 
    开机按F12进入启动项设置界面,使用U盘启动 
    安装完毕后,拔出U盘进行重启即可 
  三: 重启设置 
    开机按F2进入BIOS系统,进行相关设置 
    Boot选项:将从硬盘启动的项放到第一的顺序 
    UEFI改为:legacy 
  ◆可能遇到的问题: 
    重启显示: NO BOOTABLE DEVICE 
      表示缺少系统引导设备,用于开机引导系统的文件丢失或损坏;
      解决方法: 重新使用U盘启动,使用Diskgenius工具重建分区表,
      选中硬盘右键-搜索已丢失分区(重建分区表),中途按提示选择保留或忽略-
      完成后,重建主引导记录-然后进行重启
  四: 安装完系统后,将系统进行重置,以去除附加进系统中的第三方软件 
重启慢‹启动正常› 
  一: 启动模式问题 ‹待验证› 
    若主板是UEFI启动,而采用传统启动模式,就会很慢
    决解: 
      1:重新安装UEFI启动的系统
      2:已安装好系统后修改下启动引导,以达到UEFI启动的效果 
        1、新建一个100M空间的分区 
          计算机-选择管理,选中一有空闲空间的分区,右键-压缩卷,新建分区 
        2、将新分区格式化<FAT32格式> 
        4、修复EFI引导分区 
          命令行中键入命令：
          bcdboot <X>：Windows /s <Y>： /l zh-CN /f ALL 
            Example: bcdboot C：Windows /s E： /l zh-CN /f ALL
            X是系统文件所在分区
            Y是刚分出来的FAT32分区 
        5、重启并进入BIOS
          Secure Boot 设为 Enabled
          Launch CSM 设为 Never 
          Boot Menu 设为 Disable 
        6、保存更改的设置，退出BIOS，重启 
  二: 到官方网站下载主板芯片驱动更新 ‹待验证› 
  三: 
--------------------------------------------------------------------------------
系统特性、设置及说明 
  系统[部分]字体更改
    在桌面上右击-个性化-窗口颜色-高级外观设置-在项目中进行每项的字体显示更改。
  设置win7资源管理器默认打开为“我的电脑”
    关闭所有的资源管理器窗口,Shift+在任务栏的资源管理器图标上右击,选属性。
    在目标“%windir%\explorer.exe”的后面加一个空格和逗号
    （即: %windir%\explorer.exe ,）,然后保存。
    记住此方法是把输入法切换在英文状态下进行。
快捷键 
  ★窗口操作 
  alt-space-n           窗口最小化
  win-d                 显示桌面 
  ctrl-n                另外打开一新的该窗口
  alt-esc               以项目打开的顺序切换项目
  ctrl?-alt-tab-↑↓→←?   在打开的项目间切换
  ctrl?-win-tab-↑↓→←?   '3D'形式切换界面
  ★文档操作 
  ctrl?-shift-↑↓→←  文字选择 
  ctrl-a            全选
  ctrl-f            查找
  ctrl-p            打印
  ctrl-s            保存
  ctrl-z            取消
  ctrl-f4           关闭多个文档
  shift-↑↓→←           多个项目选择
  
  alt-f4            退出
  ctrl-scroll       缩放 
    可在桌面上调整图标大小  
  alt-enter         显示所选项的属性
  shift-f10         打开右键菜单
  alt-↑             打开文件夹的上级菜单
  ctrl-shift-esc    打开任务管理器
  
  ctrl-esc    打开开始菜单
  win-<num>   打开任务栏上的第几个程序
  win-d       显示桌面
  win-e       打开我的电脑
  win-l       锁定计算机或切换用户
  win-r       打开运行对话框
  win-t       切换任务栏上的程序
  win-w       打开工作区面板,可使用便签、草图板及屏幕草绘等工具.
  win-space   预览桌面/选择输入法 
  win-↑↓→←    最大化/最小化/最大化到屏幕左/右侧
  win-f       搜索文件或文件夹
  win-ctrl-f  搜索计算机‹需要在网络上›

  shift-drag      可将复制到换成移动到
  prtscSysRq      全屏截屏 
    截屏后需在画图软件中粘贴出来,才可以查看
小技巧 
  文件编辑、修改与保存 
    将文件保存为PDF格式文件
      第一种方法: 另存为进行保存为PDF,若没有保存为PDF的选项
      第二种方法: 打印-选择打印机PDFCreator-打印-选择保存位置 
Q&A 
  为什么Word、Excel等文字中句号。在中间显示？
    港台用的宋体句号在中间。
    
  桌面图标排列方式改为纵向排列。

  U盘右键菜单中格式化和弹出放在一起,不太好,菜单的排序方式应该与使用方便、合理为原则。
--------------------------------------------------------------------------------
关机设置
  Shutdown -s -t XX       XX秒后关机
  shutdown -a             取消关机
  at 22:00 shutdown -s    在22: 00定时关机
通过自带防火墙控制软件联网方法 
  可通过360上网管理-联网控制,发现联网的程序及确定其位置
  步骤 
    进入到防火墙设置页->高级设置,
    选择 出站规则 或 进站规则,进行 新建规则,
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
--------------------------------------------------------------------------------
护眼色 
  网上流行护眼色的RGB值和颜色代码
  RGB: rgb(199, 237, 204)
  16进制: #C7EDCC 


