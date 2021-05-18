# セットアップ

- 最初の一回のみ
  `$ npm install`

- 起動
  `$ npm run dev`

# 解説

## 技術スタック

- フロントエンド
  - preact
- バックエンド
  - fastify
- バンドルツール
  - rollup

今後

- DB
  - MariaDB

## rollup

`rollup.config.js`で

`src/server.js -> rollup -> build/server.js`
`src/client.js -> rollup -> public/client.js`

にバンドルするよう設定してある。

# SSR

## Fastify

server.js で各ページを renderToString している

## Preact

html に preact-router をかませて(src/preact/components/Router.js)、hydrate している(src/client.js)
