# Lumos Circle Site

## Lumos のサークルサイト Hooks です

---

<br>

### **Get started(初回のみ)**

1. vscode を入れてください
2. vscode の拡張機能 prettier/eslint/stylelint/Vue Language Features (Volar) を入れてください(vetur は無効化してください)
3. Node と Node バージョン管理ツールと yarn の環境構築をしてください
4. `git clone https://github.com/Lumos-Programming/circle-cite.git`
5. `code -r circle-cite`
6. `git config --local user.name "ユーザーネーム"`や`git config --local user.email メールアドレス`で 個人用 github のアカウントの情報を登録してください(スキップしても OK)
7. `git checkout develop` & `git pull origin develop`
8. lumos の Google Drive の「hooks 設定ファイル共有用」フォルダから aws-exports.js を assets 配下に、.env をルートにダウンロードした後に置く。
9. `yarn install`
10. `yarn dev`で立ち上がるか確認

---

<br>

### **各回の作業の進め方**

1. Github で Issue を作成

   - issue の title がそのままブランチ名になるため、title は短めに

2. 画面右側「Development」右下の「Create a brench」からブランチ作成
   - Branch name 右下の「Change branch source」をクリックし、ブランチ切り出し元を develop にするのを忘れないように！
   - すでにある場合は画面右側「Development」からブランチを紐付ける
3. 画面右側「Assignees」から担当者を選ぶ
4. 画面右側「Labels」からラベルを選ぶ
5. ブランチをローカルに引っ張ってきて作業する
6. PR を作って develop → release → main と merge
   - すると自動でブランチが close するはず。しなければ手動で close

---

<br>

### **終わらせ方**

1. github のページからプルリク作成
   - その際、歯車マークからイシューを紐付ける（これで main にマージされたときに、自動でイシューがクローズするようになります）
2. コンフリクト起こしたら merge コマンドで解消（注意して進めてください）
3. ブランチ責任者がプルリク許可
4. リモートの作業ブランチ削除
5. ローカルで`git checkout main(or develop)` & `git pull origin main(or develop)`
6. `git branch -D 作業ブランチ名`
7. お疲れ様でした！

---

<br>

### **その他注意事項等**

- v-calender は vuetify3 で v-calender と v-date-picker が再実装され使えるようになるまでの代用ライブラリとして入れています。v-calender と v-date-picker が使えるようになったら適宜抜いて下さい。
