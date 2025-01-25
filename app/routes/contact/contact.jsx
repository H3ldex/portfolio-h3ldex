import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Icon } from '~/components/icon';
import { Input } from '~/components/input';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { tokens } from '~/components/theme-provider/theme';
import { Transition } from '~/components/transition';
import { useFormInput } from '~/hooks';
import { useRef } from 'react';
import { cssProps, msToNum, numToMs } from '~/utils/style';
import styles from './contact.module.css';

export const action = async ({ request }) => {
  // If you don't need an action, you can return null
  return null;
};

export const Contact = () => {
  const initDelay = tokens.base.durationS;

  return (
    <Section className={styles.contact}>
      <Transition unmount in timeout={1600}>
        {({ status, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <Heading
              className={styles.title}
              data-status={status}
              level={3}
              as="h1"
              style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
            >
              <DecoderText text="Say hello" start={status !== 'exited'} delay={300} />
            </Heading>
            <Divider
              className={styles.divider}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay, 0.4)}
            />
            <div className={styles.socialLinks}>
              <a 
                href="mailto:ask@h3ldex.dev" 
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="email" />
                <span className={styles.linkText}>ask@h3ldex.dev</span>
              </a>
              <a 
                href="https://discord.com/users/h3ld3x" 
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="discord" />
                <span className={styles.linkText}>@h3ld3x</span>
              </a>
              <a 
                href="https://twitter.com/H3lD3x" 
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="x" />
                <span className={styles.linkText}>@H3lD3x</span>
              </a>
              <a 
                href="https://codestag.xyz/contacts" 
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="bluesky" />
                <span className={styles.linkText}>CodeStag</span>
              </a>
            </div>
            <div className={styles.buttonContainer}>
              <Button 
                href="mailto:ask@h3ldex.dev"
                icon="send"
              >
                Contact Me
              </Button>
            </div>
          </div>
        )}
      </Transition>
      <Footer className={styles.footer} />
    </Section>
  );
};

function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}

// Make Contact the default export
export default Contact;