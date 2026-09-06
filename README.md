# mayobimu Personal Website
技術や暮らしについての発信と活動をまとめる、mayobimuの個人サイトです。

## 開発環境
- Next.js
- TypeScript
- Tailwind CSS
- pnpm
- Docker

## 起動方法(Docker)

開発サーバーを起動します。

```bash
docker compose up
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開きます。

開発サーバーを停止します。
```bash
docker compose down
```

## デプロイ

`main`ブランチにpushすると、GitHub Actions経由で自動的にビルド&デプロイされます(S3 + CloudFront)。

## 本番構成

- ホスティング: AWS S3 + CloudFront(静的サイト)
- 独自ドメイン: [mayobimu.com](https://mayobimu.com)
- CI/CD: GitHub Actions
