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
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSS_G8mqe97wY_PPbUy4rN237WjqZucaO9W3VVDiLQJ7rNtiadhU09jLm9mJ6Do2xobG5sDtURjNVeK/pubhtml?widget=true&amp;headers=false"
        width="100%"
        height="600"
        style={{ border: 'none' }}
        title="Denver ARTCC Airports"
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
