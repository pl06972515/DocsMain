### 一、版本控制简介

___

<span style='color:Blue'>工程设计领域中</span>**使用版本控制 `( 管理工程蓝图的设计过程 )`**，**在 IT 开发过程中**也可以**<span style='color:red'>使用版本控制思想`( 管理代码的版本迭代 )`</span>**

### **二、版本控制工具**

---

#### **- 具备功能**

- <span style='color:Blue'>协同修改</span>
  **<span style='color:red'>多人并行修改</span>**服务器端的**同一个文件**
- <span style='color:Blue'>数据备份</span>
  不仅保存目录和文件的**当前状态`还能够保存每一个提交过的历史状态`**
- <span style='color:Blue'>版本管理</span>
  **在保存每一个版本的文件**信息的时候要做到[**`不保存重复数据,以节约存储空间`**]提高运行效率
- **<span style='color:Red'>权限控制</span>**
  **对<span style='color:red'>团队中参与开发的人员</span>进行`权限控制`**
  **对<span style='color:red'>团队外开发者</span>贡献的代码进行审核(`Git 独有`)**
- **<span style='color:Red'>历史记录</span>**
  **查看修改人、修改时间、修改内容、日志信息<span style='color:red'>[ 可将本地文件恢复到某一个历史状态 ]</span> **
- **<span style='color:Red'>分支管理</span>**
  **允许开发团队在工作过程中<span style='color:red'>[ 多条生产线同时推进任务 ]</span>进一步提高效率**

---

#### **<span style='color:Blue'>- 集中式</span>**

<img src="https://gitee.com/s_origins/ImageStorage/raw/master/PicGo_Typora/20201130000106.png" style="zoom:67%;" />

>**CVS、SVN、VSS ...**
>
>- **客户端  -> 服务器( <span style='color:red'>单点故障: 服务器挂掉版本全部丢失</span> )**

#### **<span style='color:Blue'>- 分布式</span>**

<img src="https://gitee.com/s_origins/ImageStorage/raw/master/PicGo_Typora/20201130000107.png" alt="image-20201125110447627" style="zoom:67%;" />

>**Git、Mercurial、Bazaar、Darcs ...**
>
>- **客户端(本地库) -> 服务器(远程库) - [`都有版本控制库，避免单点故障`]**



### 三、Git-版本管理工具

___

>**Git 的优势**
>
>- 大部分操作在本地完成**`不需要联网`**
>- 完整性保存(**`对每次提交数据进行 hash 操作`**)
>- **<span style='color:Blue'>分支操作</span>非常快捷流畅**
>- **<span style='color:red'>与 Linux 命令全面兼容</span>**

#### - 客户端结构

- <img src="https://gitee.com/s_origins/ImageStorage/raw/master/PicGo_Typora/20201130000108.png" alt="image-20201125164756543"  />

  >- **<span style='color:Blue'>工作区:</span> 代码文件**
  >- **<span style='color:Blue'>暂存区: </span>临时存储(`写操作，但未提交到版本库中`)**
  >- **<span style='color:Red'>本地库: </span>历史版本(`每次提交的版本记录`)**

  

#### - Git 下载安装

- [Git 官方网站](https://git-scm.com/) | [非官方 - Git 高速下载](https://npm.taobao.org/mirrors/git-for-windows/)

  >**特殊步骤说明( `安装目录非中文不要包含空格 - 其余步骤全部默认` ):**
  >
  ><img src="https://gitee.com/s_origins/ImageStorage/raw/master/PicGo_Typora/20201130000109.png" alt="image-20201125164010108" style="zoom:80%;" />
  >
  ><img src="https://gitee.com/s_origins/ImageStorage/raw/master/20201129221637.png" alt="image-20201125164028587" style="zoom:80%;" />

  

#### - TortoiseGit

&nbsp;&nbsp;**<span style='color:Blue'>[ 基于Windows - 可视化工具 ]</span>**[点击下载](https://tortoisegit.org/)

---

##### <span style='color:Blue'>- 设置签名</span>

- **&nbsp;&nbsp;签名作用:** **<span style='color:red'>区分不同开发人员的身份</span>(`这里设置的签名和登录远程库(代码托管中心)的账号、密码没有任何关系`)**

  ```ini
  git config --global user.name {用户名称} 
  git config --global user.email {用户邮箱}
  ```

  <img src="https://gitee.com/s_origins/ImageStorage/raw/master/PicGo_Typora/20201130000110.png" alt="image-20201126004630566" style="zoom: 80%;" />



##### **<span style='color:Blue'>- 本地库初始化</span>**

- **&nbsp;&nbsp;<span style='color:Red'>（ .git 目录 ）</span>中存放的是<span style='color:red'>[ 本地库 ]相关的子目录和文件( `禁止写操作` )</span>**

  ```shell
  $ git init;
  ```

  <img src="https://gitee.com/s_origins/ImageStorage/raw/master/PicGo_Typora/20201130000111.png" alt="image-20201125175553826" style="zoom: 80%;" />

  


##### **<span style='color:Blue'>- 版本日志查看</span>**

- ```shell
  $ git reflog;
  ----------------------------------------
  6de18b8 (HEAD -> master) HEAD@{0}: commit: 版本 - 5
  3738a55 HEAD@{1}: commit: 版本 - 4
  864ec57 HEAD@{2}: commit: 版本 - 3
  328ec04 HEAD@{3}: commit: 版本 - 2
  e3d3073 HEAD@{4}: commit (initial): init
  ----------------------------------------
  ```



##### <span style='color:Blue'>- 比较文件差异</span> 

- 将**<span style='color:red'>[ 工作区 | 当前版本 - 中的文件 ]</span>**与本地库**历史版本文件**比较

  <img src="https://gitee.com/s_origins/ImageStorage/raw/master/PicGo_Typora/20201130000112.png" alt="image-20201127013133050" style="zoom:80%;" />

  

##### <span style='color:Blue'>- 版本文件还原 </span>

- **<span style='color:red'>[ 慎用 ]前进  |  后退(`回滚`)  ->  指定版本(`移动指针`)  </span>**

  ```shell
  $ git reset --hard 864ec57 #( 版本回滚 )
  $ git reflog
  ----------------------------------------
  864ec57 (HEAD -> master) HEAD@{0}: reset: moving to 864ec5746da6c7f0aca29cdcd77931ebf23e7bd5
  6de18b8 HEAD@{1}: commit: 版本 - 5
  3738a55 HEAD@{2}: commit: 版本 - 4
  864ec57 (HEAD -> master) HEAD@{3}: commit: 版本 - 3
  328ec04 HEAD@{4}: commit: 版本 - 2
  e3d3073 HEAD@{5}: commit (initial): init
  ----------------------------------------
  ```

  >**<span style='color:Blue'>--hard</span>**
  >
  >- **<span style='color:red'>重置工作区</span>**
  >
  >- **<span style='color:red'>重置缓存区</span>**
  >
  > **`即便是回滚到指定的版本( 以前的版本依然存在)`**

  <img src="https://gitee.com/s_origins/ImageStorage/raw/master/PicGo_Typora/20201130000113.png" alt="image-20201127001023094"  />

  

---

- **<span style='color:red'>前进  |  后退(`回滚`)  ->  指定版本下某个文件(`根据写操作将创建新版本`)</span>**

  **<span style='color:Blue'>支持: 删除文件后找回（`从指定版本还原即可`）</span>**

  <img src="https://gitee.com/s_origins/ImageStorage/raw/master/PicGo_Typora/20201130000114.png" alt="image-20201127004113325" style="zoom:80%;" />

  

### 四、Git-分支管理

---

#### - 基本介绍

- **在版本控制过程中，同时<span style='color:red'>[ 并行推进 ]</span>多个功能开发`(提高开发效率)`**
- **<span style='color:red'>[ 隔离性 ]</span>各分支在开发过程中，如果某一个分支<span style='color:red'>开发失败</span>(`不会影响其他分支，删除即可`)**

<img src="https://gitee.com/s_origins/ImageStorage/raw/master/PicGo_Typora/20201130000115.png" alt="image-20201127020248004" style="zoom:67%;" />



#### - 命令操作

&nbsp;&nbsp;**<span style='color:red'>分支管理的本质是[ 创建和移动指针 ]</span>**

- **<span style='color:Blue'>查看分支(`ALL`)</span>**

  ```shell
  $ git branch -v;  
  ----------------------------------------
  * master 36a5743 版本 - 3
  ----------------------------------------
  ```

- **<span style='color:Blue'>创建分支( `branch` )</span>**

  ```shell
  $ git branch {hot_Bug:分支名称};
  $ git branch -v;
  ----------------------------------------
    hot_Bug 36a5743 版本 - 3
  * master  36a5743 版本 - 3
  ----------------------------------------
  ```

- **<span style='color:Red'>切换分支(`checkout`)</span>**

  ```shell
  $ git checkout {hot_Bug - 分支名称}; #Switched to branch 'hot_fix'
  $ git branch -v;
  ----------------------------------------
  * hot_Bug 36a5743 版本 - 3
    master  36a5743 版本 - 3
  ----------------------------------------
  $ git branch -v;
  ----------------------------------------
  * hot_Bug b3a3226 版本 - 1  #在分支内: 写操作 -> 版本变更
    master  36a5743 版本 - 3
  ----------------------------------------
  ```

- **<span style='color:Red'>合并分支(`merge`)</span>**

  ```shell
  $ git branch -v
  ----------------------------------------
  * hot_Bug 2468039 版本 - 2
    master  36a5743 版本 - 3
  ----------------------------------------
  
  $ git checkout master; #切换到主分支 ( Switched to branch 'master' )
  $ git merge hot_Bug;  #指定【分支: hot_Bug 】合并到【 主分支: master 】
  $ git branch -v
  ----------------------------------------
    hot_Bug 2468039 版本 - 2
  * master  2468039 版本 - 2
  ----------------------------------------
  ```

  

### 四、团队协作方式

---

#### - 团队内部协作

- **<span style='color:Blue'>项目经理:</span> 创建本地库(`本机`)，创建远程库(`代码托管中心`)**

  **本地库代码(`本机`)  ->  <span style='color:red'>推送( push )</span>  ->  远程库(`代码托管中心`)**

- **<span style='color:Blue'>开发人员: </span>**

  - **远程库(`代码托管中心`)   ->  <span style='color:red'>克隆( clone ) </span> ->  本地库(`本机`)**

  - **本地库(开发)  ->  <span style='color:red'>推送( push ) </span> ->   远远程库(`代码托管中心`) <span style='color:red'>[ 需要权限 ]加入团队才能推送</span>**

<img src="https://gitee.com/s_origins/ImageStorage/raw/master/PicGo_Typora/20201130000116.png" alt="image-20201125232107132"  />



#### - 团队外部协作

- **<span style='color:Blue'>夸团队协作 - 第三方人员: </span>远程库(`代码托管中心`)  ->  <span style='color:red'>复制( fork ) </span> ->  第三方远程库(`代码托管中心`)  ->  <span style='color:red'>克隆( clone ) </span> ->  第三方本地库(`本机`)**

<img src="https://gitee.com/s_origins/ImageStorage/raw/master/PicGo_Typora/20201130000049.png" alt="image-20201126001621291"  />



### 五、代码托管中心

---

**代码托管中心主要任务是<span style='color:red'>维护远程库</span>(`适用外网环境下`)**

#### - <span style='color:Blue'>创建远程仓库</span>

- [GitHub - 官方网站](https://github.com/)

- [Gitee - 官方网站](https://gitee.com/)

  

#### <span style='color:Blue'>- 配置连接</span>

- <img src="https://gitee.com/s_origins/ImageStorage/raw/master/PicGo_Typora/20201130000117.png" alt="image-20201128004748076" style="zoom: 80%;" />

  ```shell
  $ git remote add { origin: 地址别名 } https://github.com/xxxx/TestRepository.git #添加远程仓库地址
  
  $ git remote -v; #查看远程库地址
  ----------------------------------------
  origin  https://github.com/xxxx/TestRepository.git (fetch) #用于拉取
  origin  https://github.com/xxxx/TestRepository.git (push)  #用于推送
  ----------------------------------------
  ```

  >**<span style='color:Blue'>SSH 免密配置</span>**
  >
  >- 默认情况下: 用户的 SSH 密钥存储在其 `~/.ssh` 目录下
  >
  >  ```shell
  >  $ ls ~/.ssh;
  >  ----------------------------------------
  >  $ cat ~/.ssh/id_rsa.pub; #查看公钥
  >  #$ rm -r ~/.ssh/; #删除密钥
  >  ----------------------------------------
  >  ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDSdb00uKHCUD0TNqBDAPgRvhO3PppfhfmsOTIMbKLy65LGcNQ1hkAp1dFxKQYCwv15QRDFE8kBJZY6jIvDqYr3ZkkNVUXGNdoeIJH+4ZV/wGH52MzQ3xdSisBUeXZ9fWMnYjmSmlvjL/zxYMZgWEMDCAJM1u+PPZicDfKhoCMtGOHM8UUlySGWr9cpysvhvJ5daN2B7pZcapVrNuZUxdBYEKizpwqtwywocMPKR1qwl3EnVVGEHYb9M1K3pJzRarJIDfXsDUbst/taJhouTDulN5W2lz7vR/fvneWIePI62T+Zbbx7aHZWqVM8T87KSY2IP9FJWXA44RpsI45MTe7PrW1U5lT51ys9Gf7v0= xxxx@xx.com
  >  ----------------------------------------
  >  ```
  > 
  > - <span style='color:Blue'>生成密钥</span>
  >
  >```shell
  >  $ cd ~;
  >  $ ssh-keygen -t rsa -C xxxx@qq.com; #GitHub 账号邮箱
  >  $ cat ~/.ssh/id_rsa.pub;
  > ```
  > 
  > <img src="https://gitee.com/s_origins/ImageStorage/raw/master/PicGo_Typora/20201130000118.png" alt="image-20201128160019461" style="zoom: 80%;" />
  > 
  > - <span style='color:Blue'>设置本地库 -> 添加远程仓库地址(`SSH`)</span>
  >
  >```shell
  >  $ git remote add { origin_ssh: 地址别名 } git@github.com:xxxx/TestRepository.git #添加远程仓库地址
  >  
  >  $ git remote -v; #查看远程库地址
  >  ----------------------------------------
  >  origin_ssh   git@github.com:xxxx/TestRepository.git (fetch)
  >  origin_ssh   git@github.com:xxxx/TestRepository.git (push)
  >  origin  https://github.com/xxxx/TestRepository.git (fetch)
  >  origin  https://github.com/xxxx/TestRepository.git (push)
  >  ----------------------------------------
  > ```
  


#### <span style='color:Blue'>- 克隆 clone</span>

- ```shell
$ git clone https://github.com/xxxx/TestRepository.git; #克隆远程库 -> 本地( 自动初始化本地库 )
  
  $ git remote -v;
  ----------------------------------------
  origin  https://github.com/xxxx/TestRepository.git (fetch)
  origin  https://github.com/xxxx/TestRepository.git (push)
  ----------------------------------------
  ```
  
  >- **完整的把远程库<span style='color:red'>下载到本地</span>**
  >- **自动创建<span style='color:red'>远程库地址别名</span>( `$ git remote -v;` )**
  >- **<span style='color:red'>自动初始化本地库</span>**



#### **<span style='color:Blue'>- 推送 push</span>**

- ```shell
  $ git branch -v;  
  $ git push origin master; #推送分支 -> GitHub(origin) |  HTTPS-方式需登录
  ```

  >- **<span style='color:red'>[ 先拉取，后推送 ]</span>如果不是基于GitHub 远程库的<span style='color:Blue'>最新版本</span>，本地库写操作<span style='color:Blue'>不能推送</span>**
  >- 拉取下来后如果进入**<span style='color:red'>冲突状态</span>**，则按照**`分支冲突解决`**即可



#### <span style='color:Blue'>- 拉取 pull</span>

- ```shell
  $ git fetch origin master;
  $ git merge origin master;
  ```

  >**<span style='color:Red'>拉取(`读操作`)无需身份认证</span>**
  >
  >- <span style='color:Blue'>fetch: </span> 拉取远端分支  ->  至本地仓库
  >- <span style='color:Blue'>merge:</span> 将远端分支  ->  合并至本地分支



#### <span style='color:Blue'>- 团队协作</span>

- **团队内部协作(`邀请成员- [ GitHub-选项 ]Manage accessInvite a collaborator`)**

- **团队外部协作**

  >**<span style='color:red'>第三方人员</span>**
  >
  >- **<span style='color:Blue'>fork -> GitHub(`自己`)</span>**
  >
  >- **<span style='color:Blue'>克隆 clone -> 本地</span>**
  >
  >- **<span style='color:Blue'>本地库-写操作 -> 推送 push -> 远程库(`自己`) </span>**
  >
  >- **<span style='color:Blue'>Push requests </span>**
  >
  ><img src="https://gitee.com/s_origins/ImageStorage/raw/master/PicGo_Typora/20201130000120.png" alt="image-20201128141409113" style="zoom:80%;" />
  >
  >---
  >
  >**<span style='color:red'>主项目团队</span>**
  >
  >- **<span style='color:Blue'>审核代码</span> (`pull request`) ** 
  >
  >![image-20201128141932595](https://gitee.com/s_origins/ImageStorage/raw/master/PicGo_Typora/20201130000121.png)
  >
  >- **<span style='color:Blue'>代码合并</span>**
  >
  >![image-20201128142038987](https://gitee.com/s_origins/ImageStorage/raw/master/PicGo_Typora/20201130000122.png)
  >
  >- **<span style='color:Blue'>拉取 pull -> 本地仓库</span>**

  

### 六、工作流-GitFlow

---

工作流为**<span style='color:Blue'>功能开发、发布准备和产品维护</span>**设立了独立的分支(**`让发布迭代过程更流畅`**)

- [SourceTree - 工作流管理工具](https://www.sourcetreeapp.com/)

<img src="https://gitee.com/s_origins/ImageStorage/raw/master/PicGo_Typora/20201130000123.png" alt="image-20201128165155191"  />



#### - 分支种类

- **<span style='color:Red'>主干分支 - master</span>** 

  >**负责管理<span style='color:red'>正式运行中生产环境代码</span>(`与运行中生产环境完全一致`)**
  >
  >- **<span style='color:red'>[分支保护]一般开发人员禁止操作</span>**

- **<span style='color:Blue'>开发分支 - develop</span>**

  >**负责管理<span style='color:red'>开发过程中的代码(`最新的代码`)</span>**

- **<span style='color:red'>版本分支 - release: </span>**

  >**<span style='color:Blue'>较大的版本上线前</span>，会从开发分支中(``develop``)分出，进行最后阶段的集成测试(该版本上线后，会合并到分支`master|develop`)**
  >
  >- <span style='color:Blue'>[ 标签 ]</span> 合并后**<span style='color:Blue'>根据分支名称</span>**自动生成(`V2.0.0`)

  ---

- **<span style='color:Blue'> BUG - hotfix:</span>**

  >**主要负责<span style='color:red'>生产环境下出现的紧急修复 BUG-代码(`Hotfix`)</span>**
  >
  >- 从主干分支(`master`)分出，**修复完毕并测试上线后，<span style='color:red'>合并回分支`master|develop`</span>**
  >- **命名规则: <span style='color:Blue'>hotfix\分支名称</span>**
  >- <span style='color:Blue'>[ 标签 ]</span> 合并后自动生成(`命名规范: V1.0.1`)
  >- `短期分支 - 可以删除`

- **<span style='color:Blue'>功能分支 - feature: </span>**

  >- 功能模块开发，从开发分支(`develop`)分出，**开发完成后，<span style='color:red'>合并回分支`develop`</span>**
  >
  >- **命名规则: <span style='color:Blue'>feature\分支名称</span>**
  >- `短期分支 - 可以删除`

  

#### - 版本规划

- **<span style='color:red'>[ 标签 ]Tag -  A.B.C</span>**

  >- A: 大版本，较大的功能更新`release`
  >- B: 小版本，较小 | 一般功能更新`feature`
  >- C: bug Fix 只修复BUG, 无任何新功能加入`hotfix`



### 七、<span style='color:red'>提交规范</span>

---

#### - TortoiseGit

![image-20201209023801722](https://gitee.com/s_origins/ImageStorage/raw/master/PicGo_Typora/20201209024422.png)



#### - <span style='color:Blue'>提交模板</span>

[下载模板 commit_template](https://gitee.com/s_origins/disk/blob/master/%E5%B8%B8%E7%94%A8%E6%A8%A1%E6%9D%BF/Git/commit_template) 

```
[新增功能 | 异常修复 | 代码变更 | 代码重构 | 档案更新 | 其他操作] - ALL | Loation | Module: 基本描述

  - 详细-具体的修改描述
  -
  -

备注: Issues< #1 >
```

>- **ALL: 影响面大 (`改动较大，对整个程序产生影响较大`)**
>- **Loation: 影响小(`某个小的功能变动`)**
>- **Module: 影响某个模块(`如登录模块、首页模块 、用户管理模块等等`)**

 








---

