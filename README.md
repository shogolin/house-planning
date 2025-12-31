# 2D間取りシミュレーター

ハウスメーカーの提案や土地情報をベースにした2D間取りシミュレーターです。
ブラウザで動作し、コードベースで数値を調整することで、即座に複数の間取り案（Plan A, Plan B...）を比較検討できます。

## セットアップ

### 依存関係のインストール

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:5173` を開いてください。

## 使い方

### プランの切り替え

画面上部のセレクターで「Plan A」と「Plan B」を切り替えることができます。

### 間取りの編集

`src/data/plans.ts` ファイルを編集することで、間取りを調整できます。

- すべての座標・サイズは**ミリメートル（mm）単位**で管理されています
- Plan Aをベースに、Plan Bは差分で定義されています
- ファイルを保存すると、ViteのHMR（Hot Module Replacement）により即座に反映されます

### 例: リビングのサイズを変更する

```typescript
// src/data/plans.ts の planARooms 配列内で
{
  id: 'living',
  name: 'LDK',
  width: 4140,  // 3640 から 4140 に変更（500mm広げる）
  height: 5460,
  // ...
}
```

## 技術スタック

- **Framework**: React (Vite)
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Graphics**: SVG (HTML5 inline SVG)
- **Linting**: ESLint

## プロジェクト構造

```
house-planning/
├── src/
│   ├── components/     # Reactコンポーネント
│   │   ├── Grid.tsx           # グリッド表示
│   │   ├── Room.tsx           # 部屋の描画
│   │   ├── PlanInfo.tsx       # 面積・畳数の表示
│   │   ├── PlanSelector.tsx   # プラン切り替えUI
│   │   └── FloorPlan.tsx      # 間取り図全体
│   ├── data/
│   │   └── plans.ts           # プランデータ定義
│   ├── types/
│   │   └── index.ts           # TypeScript型定義
│   ├── utils/
│   │   └── calculations.ts   # 計算ユーティリティ
│   ├── App.tsx               # メインアプリケーション
│   ├── main.tsx              # エントリーポイント
│   └── styles.css            # スタイル
├── .cursorrules              # Cursor用プロジェクト定義
├── .eslintrc.cjs            # ESLint設定
├── .gitignore               # Git除外設定
├── package.json             # 依存関係とスクリプト
├── tsconfig.json            # TypeScript設定
├── vite.config.ts           # Vite設定
└── README.md                # このファイル
```

## 単位系と座標

- **データ構造**: すべてミリメートル（mm）で管理
- **描画スケール**: 定数 `SCALE` (0.04) でピクセルに変換
- **座標系**: SVG標準（左上が原点 (0,0)）

## 機能

- ✅ 正確な縮尺表示
- ✅ 910mm（半間）グリッド表示
- ✅ 自動計算: 延床面積（平米・坪）、畳数
- ✅ リアルタイム反映（Vite HMR）
- ✅ 複数プランの比較

## 開発コマンド

### ビルド

```bash
npm run build
```

### プレビュー

```bash
npm run preview
```

### リント（コード品質チェック）

```bash
npm run lint
```

## コード品質

- TypeScriptの厳密な型チェック
- ESLintによるコード品質チェック
- 統一されたコードフォーマット


