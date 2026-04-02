import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const stats = [
  {value: '58', label: 'Markdown pages migrated'},
  {value: '26', label: 'PDF artifacts preserved'},
  {value: '24', label: 'LaTeX source files available'},
  {value: '19', label: 'Diagrams and screenshots'},
];

const collections = [
  {
    title: 'Formal Deliverables',
    description:
      'Problem statement, SRS, design, hazard analysis, V&V plan/report, and traceability artifacts.',
    href: '/docs/capstone',
    eyebrow: 'Course package',
  },
  {
    title: 'Implementation Notes',
    description:
      'Module-level writeups for authentication, dashboard, canvas, results, caching, and subnetworks.',
    href: '/docs/capstone/CodeExplanation',
    eyebrow: 'Engineering detail',
  },
  {
    title: 'Compatibility & Ops',
    description:
      'Factory test preparation, compatibility checks, upgrade flows, issue reports, and quick starts.',
    href: '/docs/capstone/usercustom',
    eyebrow: 'Field readiness',
  },
  {
    title: 'Architecture Assets',
    description:
      'Architecture PDFs, detailed design, UI images, class diagrams, and original source material.',
    href: '/docs/capstone/Design',
    eyebrow: 'System structure',
  },
  {
    title: 'Presentations',
    description:
      'Proof-of-concept demo, Rev0 material, final presentation deck, poster, and expo output.',
    href: '/docs/capstone/Presentations',
    eyebrow: 'Communication',
  },
  {
    title: 'Raw Source Bundle',
    description:
      'Original Makefiles, TeX sources, and the untouched top-level files from the source docs directory.',
    href: '/docs/capstone/sourceRoot',
    eyebrow: 'Archive fidelity',
  },
];

const journey = [
  {
    step: '01',
    title: 'Requirements to release',
    description:
      'The site preserves the formal course deliverables while making them easier to scan and navigate.',
  },
  {
    step: '02',
    title: 'Engineering notes beside artifacts',
    description:
      'Detailed implementation markdown now sits next to the project paperwork instead of being buried in the repo.',
  },
  {
    step: '03',
    title: 'Downloadable originals',
    description:
      'PDF, TeX, PPTX, and diagram assets remain downloadable from the same section pages.',
  },
];

function HomepageHeader() {
  const dashboardImage = useBaseUrl('/img/showcase/dashboard.png');
  const canvasImage = useBaseUrl('/img/showcase/canvas.png');
  const loginImage = useBaseUrl('/img/showcase/login.png');

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <div className={styles.eyebrow}>Chemware Engineering Documentation Hub</div>
            <Heading as="h1" className={styles.heroTitle}>
              Capstone documentation,
              <span className={styles.heroAccent}> rebuilt as a polished Docusaurus site.</span>
            </Heading>
            <p className={styles.heroSubtitle}>
              Industrial plant modeling, simulation UI design, engineering walkthroughs, and
              course deliverables are now organized as a browsable knowledge base instead of a
              loose archive.
            </p>
            <div className={styles.heroActions}>
              <Link className={clsx('button button--primary button--lg', styles.primaryAction)} to="/docs/intro">
                Explore the docs
              </Link>
              <Link className={clsx('button button--secondary button--lg', styles.secondaryAction)} to="/docs/capstone/SRS">
                Open the SRS
              </Link>
            </div>
          </div>

          <div className={styles.visualStage}>
            <div className={styles.visualCardLarge}>
              <img src={dashboardImage} alt="Dashboard view of the plant modeling interface" />
            </div>
            <div className={styles.visualCardSmall}>
              <img src={canvasImage} alt="Canvas view of the modeling interface" />
            </div>
            <div className={styles.visualCardAccent}>
              <img src={loginImage} alt="Login screen for the application" />
            </div>
            <div className={styles.visualBadge}>
              <span>Factory workflow</span>
              <strong>Docs + design + deliverables</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Capstone documentation site for the Chemware Engineering industrial plant modeling project.">
      <HomepageHeader />
      <main>
        <section className={styles.statsSection}>
          <div className="container">
            <div className={styles.statsGrid}>
              {stats.map((stat) => (
                <article key={stat.label} className={styles.statCard}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.collectionsSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <p>Curated entry points</p>
              <Heading as="h2">Everything from the original docs folder, organized by purpose.</Heading>
            </div>
            <div className={styles.collectionsGrid}>
              {collections.map((collection) => (
                <Link key={collection.title} className={styles.collectionCard} to={collection.href}>
                  <span>{collection.eyebrow}</span>
                  <Heading as="h3">{collection.title}</Heading>
                  <p>{collection.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.journeySection}>
          <div className="container">
            <div className={styles.journeyPanel}>
              <div className={styles.sectionHeader}>
                <p>Migration strategy</p>
                <Heading as="h2">The archive stays complete, but the browsing experience changes.</Heading>
              </div>
              <div className={styles.journeyGrid}>
                {journey.map((item) => (
                  <article key={item.step} className={styles.journeyCard}>
                    <span>{item.step}</span>
                    <Heading as="h3">{item.title}</Heading>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
