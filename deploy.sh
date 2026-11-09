#!/usr/bin/env bash
# Build de la documentation + déploiement sur doc.bartime.app
# (VM proxy → /var/www/bartime-docs, nginx statique déjà configuré).
#
# Note : rsync n'est pas installé sur proxy → on utilise tar over ssh.
# Le dossier appartient à sam:www-data (chown one-shot) : on vide les
# contenus puis on extrait le build à la place (même inode, nginx lit).
set -euo pipefail
cd "$(dirname "$0")"

echo "▶ Build du site…"
npm run build

echo "▶ Déploiement vers proxy:/var/www/bartime-docs/ …"
ssh proxy 'find /var/www/bartime-docs -mindepth 1 -delete'
tar --exclude='.DS_Store' -C build -cf - . | ssh proxy 'tar -C /var/www/bartime-docs -xf -'

echo "✔ Déployé — https://doc.bartime.app"
