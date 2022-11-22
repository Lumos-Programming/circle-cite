# Lumos Circle Site

## Lumos のサークルサイト(Nuxt3 + Vuetify) です

### **Get started**

1. vscode を入れてください
2. vscode の拡張機能 prettier/eslint/stylelint/Vue Language Features (Volar) を入れてください(vetur は無効化してください)
3. Node と Node バージョン管理ツールと yarn の環境構築をしてください
4. `git clone https://github.com/Lumos-Programming/LumosWeb.git`
5. `code -r LumosWeb`
6. `git config --local user.name "ユーザーネーム"`や`git config --local user.email メールアドレス`で 個人用 github のアカウントの情報を登録してください(スキップしても OK)
7. `git checkout develop` & `git pull origin develop`(バックエンド構築後)
8. `git checkout -b feature/{ブランチ番号}`
9. `yarn install`
10. 開発開始

### **終わらせ方**

1. github のページからプルリク作成
   - その際、歯車マークからイシューを紐付ける（これで main にマージされたときに、自動でイシューがクローズするようになります）
2. コンフリクト起こしたら merge コマンドで解消（注意して進めてくださいね）
3. ブランチ責任者がプルリク許可
4. リモートの feature ブランチ削除
5. ローカルで`git checkout main(or develop)` & `git pull origin main(or develop)`
6. `git branch -D feature/{イシュー番号}`
7. お疲れ様でした！

### **その他注意事項等**

- vue3-easy-data-table は vuetify3 で v-data-table が再実装され使えるようになるまでの代用ライブラリとして入れています。v-data-table が使えるようになったら適宜抜いて下さい。
