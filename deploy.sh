#!/usr/bin/env bash
# Build de la documentation + déploiement sur doc.bartime.app
# (VM proxy → /var/www/bartime-docs, nginx statique déjà configuré).
set -euo pipefail
cd "$(dirname "$0")"

echo "▶ Build du site…"
npm run build

echo "▶ Déploiement vers proxy:/var/www/bartime-docs/ …"
rsync -av --delete --exclude '.DS_Store' \
  build/ proxy:/var/www/bartime-docs/

echo "✔ Déployé — https://doc.bartime.app"
