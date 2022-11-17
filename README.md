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

### **ブランチ紹介**

#### **master(main)ブランチ**

- 本番環境のブランチです。
- 直プッシュ禁止です。
- feature ブランチからマージされます。(バックエンド構築後は develop からマージされます)

#### **develop ブランチ**

- バックエンド構築後に追加します。
- 開発環境のブランチです。
- feature ブランチからマージされます。
- 直プッシュ禁止です。

#### **feature ブランチ**

- 作業用ブランチです。
- 基本的には 1 Issue に対して 1 branch を develop ブランチから切ります。
- コンフリクトは merge で解消してください。

<br>

**feature ブランチの命名規則**

> feature/{イシュー番号}<br>
> 例：feature/125

<br>

### **commit メッセージのルール**

```bash
[Prefix] 〇〇なため、△△を追加
```

**Prefix ルール**
| prefix | 内容 |
| --- | --- |
| add | ファイル追加 |
| delete | ファイル削除 |
| feat | 新機能 |
| fix | バグ修正 |
| update | 設定ファイル類更新 |
| docs | ドキュメントのみ変更 |
| style | 空白、フォーマット、セミコロン追加など |
| refactor | 仕様に影響が無いコード（リファクタ） |
| pref | パフォーマンス向上関連 |
| test | テスト関連 |
| chore | ビルド、補助ツール、ライブラリ関連 |

### **その他注意事項等**

- vue3-table-lite は vuetify3 で v-data-table が再実装され使えるようになるまでの代用ライブラリとして入れています。v-data-table が使えるようになったら適宜抜いて下さい。
