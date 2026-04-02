import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  const logo = useBaseUrl('/img/logo.svg');

  return (
    <Layout
      title={siteConfig.title}
      description="Capstone documentation site for the Chemware Engineering industrial plant modeling project.">
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroInner}>
              <img className={styles.logo} src={logo} alt="Chemware Docs icon" />
              <Heading as="h1" className={styles.title}>
                Chemware Docs
              </Heading>
              <Link className={styles.cta} to="/docs/intro">
                Documentation
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
