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
      <img src={FeatureList[0].imgSrc} alt="Denver Logo" className={styles.featureSvg} style={{ maxWidth: '200px', height: 'auto' }} />
      <h3 style={{ marginTop: '1rem' }}>{title}</h3>
      <p>{description}</p>
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
