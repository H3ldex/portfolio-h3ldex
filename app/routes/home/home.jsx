import gamestackTexture2Large from '~/assets/TG2750.jpg';
import gamestackTexture2Placeholder from '~/assets/TG2.jpg';
import gamestackTexture2 from '~/assets/TG1750.jpg';
import gamestackTextureLarge from '~/assets/TG3.png';
import gamestackTexturePlaceholder from '~/assets/TG3.png';
import gamestackTexture from '~/assets/TG3.png';
import sliceTextureLarge from '~/assets/PPN1920.png';
import sliceTexturePlaceholder from '~/assets/PPN1920.png';
import sliceTexture from '~/assets/PPN800.png';
import sprTextureLarge from '~/assets/Wavelength1920.png';
import sprTexturePlaceholder from '~/assets/WavelengthDAO.png';
import sprTexture from '~/assets/Wavelength800w.png';
import laptopTextureLarge from '~/assets/onchain1920.png';
import laptopTexturePlaceholder from '~/assets/onnchain800.png';
import laptopTexture from '~/assets/onnchain800.png';
import phoneTextureLarge from '~/assets/oreox750ww.png';
import phoneTexturePlaceholder from '~/assets/oreox375ww.png';
import phoneTexture from '~/assets/oreox750ww.png';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Designer + Developer',
    description: `Design portfolio of ${config.name} — a product designer working on the web3 space, specializing in UI/UX design and illustrations.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Wavelength DAO"
        description="The most advanced AMM on Velas entirely community owned and managed."
        buttonText="View project"
        buttonLink="https://wavelength.exchange/"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: `${sprTexture} 1280w, ${sprTextureLarge} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Telegram Mini-App"
        description="Design and prototype a Telegram mini-app with a minigame for a client."
        buttonText="View prototype"
        buttonLink="https://www.figma.com/proto/cn2iiuyt7TewNzOrFj7Lfr/Telegram-Mini-App-PPN?page-id=0%3A1&node-id=239-1981&viewport=-392%2C340%2C0.3&t=CynScSlr9cCZI1GS-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=239%3A1981"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: `${gamestackTexture} 375w, ${gamestackTextureLarge} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: `${gamestackTexture2} 375w, ${gamestackTexture2Large} 750w`,
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="PrivatePools"
        description="DeFi platform focusing on private, permissioned liquidity pools."
        buttonText="View project"
        buttonLink="https://www.privatepools.network/"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        alternate={false}
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="My Portfolio"
        description="You can find more of my work on my Portfolio."
        buttonText="View Portfolio"
        buttonLink="https://www.figma.com/design/64zsRxhnMm84wIkNrMva1g/H3ldex-Portfolio?node-id=2301-92&t=OYhJlDtyeQtuIVAZ-1"
        model={{
          type: 'phoneLaptop',
          alt: 'Your project description',
          textures: [
            {
              srcSet: `${phoneTexture} 375w, ${phoneTextureLarge} 750w`,
              placeholder: phoneTexturePlaceholder,
            },
            {
              srcSet: `${laptopTexture} 800w, ${laptopTextureLarge} 1920w`,
              placeholder: laptopTexturePlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
