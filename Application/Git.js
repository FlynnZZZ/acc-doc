GIT 分布式版本管理系统 
  PS: 为了更好地管理Linux内核开发而创立的 
  常用操作及作用: 
    'commit'提交: 将本地文件同步到本地仓库'local repository' 
    'push'推送: 将本地推送到远程仓库'remote repository' 
    'pull'拉取: 将远程仓库同步到本地  
  使用总结 
    通常的操作顺序为,提交、推送、拉取;
    在未进行提交而执行其他操作都有风险,如拉取会覆盖本地未提交的改变,推送无[提交的]更新
TortoiseGit,Git客户端 
GitHub 
  GitHub 
    名词解释 
      commit  版本,添加一个新版本 
      Merging 合并分支
      Pull Request 发起讨论
      collaborators 协作者
      wiki 
      issues 事务卡片
      GitHub Pages 项目展示为网站
    网页上的快捷键 
      t    搜索文件
  命令行 
    PS:需进入到当前仓库对应的文件夹进行相应的操作 
      命令之前都需要加'git'命令[之间使用空格隔开]
    help   查看git的使用帮助[git命令]
    clone  将远端仓库克隆到本地形成本地仓库
      默认克隆在当前文件夹
      Example: git clone https://github.com/hk029/hello-world.git
    init   在本地创建一个新的本地仓库
    add    添加文件到本地仓库
    mv     移动或重命名文件
    rm     移除文件
    commit 提交更新到本地仓库
    pull   将远端仓库同步到本地仓库
    push   将本地仓库同步到远端仓库
