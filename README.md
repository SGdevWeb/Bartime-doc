# Documentation BarTime

Source de **[doc.bartime.app](https://doc.bartime.app)** — documentation
officielle de BarTime (Docusaurus v3, français).

## Commandes

```bash
npm install        # initialiser
npm start          # dev server → http://localhost:3000
npm run build      # build statique → build/
./deploy.sh        # build + déploiement sur doc.bartime.app
```

## Contenu

| Page                            | Sujet                                            |
| ------------------------------- | ------------------------------------------------ |
| `docs/intro.md`                 | Présentation et sommaire                         |
| `docs/quick-start.md`           | De la création du compte au premier encaissement |
| `docs/guides/administrateur.md` | Produits, adhérents, rôles, exports, facturation |
| `docs/guides/barman.md`         | Carte, encaissement, recharges, caisse           |
| `docs/guides/adherent.md`       | Solde, QR code, historique, multi-association    |
| `docs/abonnement.md`            | Essai2 mois, formules, achat, résiliation        |
| `docs/faq.md`                   | Questions fréquentes                             |

## Déploiement

```bash
./deploy.sh
```

Le script build le site puis synchronise `build/` vers
`proxy:/var/www/bartime-docs/` (nginx statique + Let's Encrypt déjà
configurés — aucune modification serveur nécessaire).

## Personnalisation

- **Charte** : `src/css/custom.css` (primaire `#457b9d`, identique à
  bartime.app)
- **Configuration** : `docusaurus.config.ts` (url, navbar, footer,
  recherche locale)
- **Logo** : `static/img/logo.png` (icône de l'app redimensionnée)

Voir `AGENTS.md` pour les conventions complètes.
