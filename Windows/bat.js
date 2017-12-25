'.bat'批处理脚本 
  ::   单行注释 
  REM  注释 
  
隐藏文件夹的'.bat'
  // cls
  // @ECHO OFF
  // title Folder Private
  // if EXIST "HTG Locker" goto UNLOCK
  // if NOT EXIST Private goto MDLOCKER
  // :CONFIRM
  // echo 你确定要加密隐藏Private文件夹吗？(Y/N)
  // set/p "cho=>"
  // if %cho%==] goto LOCK
  // if %cho%==\ goto LOCK
  // if %cho%==' goto LOCK
  // if %cho%==n goto END
  // if %cho%==N goto END
  // echo Invalid choice.
  // goto CONFIRM
  // :LOCK
  // ren Private "HTG Locker"
  // attrib +h +s "HTG Locker"
  // echo Folder locked
  // goto End
  // :UNLOCK
  // echo 输入密码来解锁文件夹
  // set/p "pass=>"
  // if NOT %pass%== 121 goto FAIL
  // attrib -h -s "HTG Locker"
  // ren "HTG Locker" Private
  // echo Folder Unlocked successfully
  // goto End
  // :FAIL
  // echo Invalid password
  // goto end
  // :MDLOCKER
  // md Private
  // echo Private created successfully
  // goto End
  // :End
批量删除文件名称中的文字
  新建一个文本文档，复制下面内容并保存为.bat文件,运行即可。
    @echo off& setlocal enabledelayedexpansion
      for /f "delims=" %%1 in ('dir /a /b') do (set wind=%%1
      ren "%%~1" "!wind:xxx=!")
    注：将上面的  “XXX” 改为你需要批量删除的文字。比如我要删除“视频教程”，就将“XXX”修改为“视频教程”
  
  
