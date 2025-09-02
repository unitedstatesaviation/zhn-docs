import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Welcome to Denver',
  imgSrc: require('@site/static/img/ZDVb.png'),
    description: (
      <>
        This is the website of the Virtual Denver ARTCC (ZDV)
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div style={{ textAlign: 'center', margin: '0 auto' }}>
      <iframe
        src="https://docs.google.com/spreadsheets/d/1Xqw0kdb6zifq1a7fTMuKy0lUxKDPSBUHB8pQ6JC96Vg/edit?embedded=true"
        width="100%"
        height="600"
        style={{ border: 'none' }}
        title="Honolulu ARTCC Online Controllers"
      />
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
