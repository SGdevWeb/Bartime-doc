# AGENTS.md — Bartime-doc

Documentation officielle de BarTime, servie sur **https://doc.bartime.app**
(Docusaurus v3, TypeScript, locale **fr**).

## Commands

```bash
npm start        # serveur de dev (http://localhost:3000)
npm run build    # build statique dans build/ (onBrokenLinks: throw)
npm run serve    # prévisualise le build
./deploy.sh      # build + déploiement (tar over ssh) vers proxy:/var/www/bartime-docs/
```

## Structure

```
docusaurus.config.ts   — url doc.bartime.app, locale fr, blog désactivé,
                         plugin @easyops-cn/docusaurus-search-local (fr)
src/css/custom.css     — palette BarTime (#457b9d / #21808d)
src/pages/index.tsx    — accueil (hero +3 liens rapides)
docs/
  intro.md             — présentation + sommaire
  quick-start.md       — parcours premier encaissement
  guides/              — catégorie « Guides » (_category_.json)
    administrateur.md  — produits, adhérents, rôles, exports, facturation
    barman.md          — carte, encaissement, recharges, caisse
    adherent.md        — solde, QR, historique, multi-association
  abonnement.md        — essai2 mois, formules, achat, résiliation
  faq.md
static/img/logo.png    — icône de l'app (source : Bartime-front AppIcon)
deploy.sh              — build + tar over ssh → proxy:/var/www/bartime-docs/
```

## Conventions

- **Langue** : français intégral (contenu, front matter `title`/`description`, accueil).
- **Une page = un rôle ou un objectif** ; liens internes en chemins
  relatifs (`./quick-start`, `../faq`) — `onBrokenLinks: throw` casse le
  build si un lien casse.
- **Pas de blog** pour l'instant (`blog: false` dans la config ; réactiver
  = retirer le `false` + recréer le dossier `blog/`).
- **Pas de captures d'écran en v1** — itération2 prévue (captures depuis
  l'app iOS / simulateur).
- Claims factuels uniquement : s'appuyer sur le code réel
  (`Bartime-front`) — ne pas promettre de fonctionnalités inexistantes.
  La version Android n'est pas encore publiée : toujours mentionner
  « arrive très prochainement ».

## Deployment

- Hébergé sur la VM **proxy** (`ssh proxy`, dans `~/.ssh/config`) :
  nginx `bartime-public.conf` → `root /var/www/bartime-docs` (cert
  Let's Encrypt déjà actif — **ne pas toucher au nginx**).
- Déploiement : `./deploy.sh` (build puis `tar over ssh` — rsync est
  absent de proxy ; le script vide les contenus de
  `/var/www/bartime-docs` puis extrait le build à la place). Le dossier
  distant appartient à `sam:www-data` : un `chown -R sam:www-data`
  one-shot a été fait (à refaire si les permissions sont réinitialisées).
- Repository git : `git@github.com:SGdevWeb/Bartime-doc.git` (privé).

## Gotchas

- `node_modules` et `build/` sont gitignorés — ne jamais les commiter.
- Le logo est un PNG128×128 dérivé de `Bartime-front/ios/**/BarTime-1024.png`
  (redimensionné via `sips -Z 128`) ; le remplacer = recopier + redimensionner.
- La recherche locale indexe `docs/` et les pages (`indexBlog: false`) :
  après ajout de page, le build régénère l'index automatiquement.
