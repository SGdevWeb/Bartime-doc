import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

const quickLinks = [
  {
    title: "Démarrage rapide",
    description:
      "Créer son compte, profiter des 2 mois d'essai et réaliser votre premier encaissement.",
    to: "/docs/quick-start",
  },
  {
    title: "Guides par rôle",
    description:
      "Administrateur, barman ou adhérent : trouvez les fonctions qui vous concernent.",
    to: "/docs/guides/administrateur",
  },
  {
    title: "Abonnement",
    description:
      "Essai gratuit, formules mensuelle et annuelle, achat et résiliation.",
    to: "/docs/abonnement",
  },
];

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Commencer la lecture
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Accueil"
      description="Documentation officielle de BarTime — la buvette digitale de votre club : guides d'administration, d'encaissement et d'usage pour les adhérents."
    >
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {quickLinks.map((link) => (
                <div key={link.to} className="col col--4">
                  <div className="text--center padding-horiz--md">
                    <Heading as="h3">
                      <Link to={link.to}>{link.title}</Link>
                    </Heading>
                    <p>{link.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
