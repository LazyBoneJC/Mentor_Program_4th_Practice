## 交作業流程

1. 新開一個 branch：`git branch week1`
2. 寫作業！
3. 如果有新增的檔案，記得加進去 git：`add .`
4. 提交改動： `git commit -am "week1"`
5. 推到 GitHub：`git push origin week1`
6. 到自己的 repo 去，並發起 PR (Pull Request)
7. 把 PR 的連結複製起來，並在學習系統上繳交作業

等待作業改完並 merge 後：

    1. 切換到master：`git checkout master`

    2. 把最新的改動拉下來：`git pull origin master`

    3. 刪除已經 merge 的 branch：`git branch -d week1`
