import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/vidmatrix.mp4';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Uses',
    description: 'A list of hardware and software I use to do my thing',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Uses"
          description="A somewhat comprehensive list of tools, apps, hardware, and more that I use on a daily basis to design and code things."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Design</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                  <Link href="https://www.figma.com">Figma</Link> is my primary tool for
                    UI design these days. Made the switch from Sketch in 2020 and haven't
                    looked back. Check my portfolio{' '}
                    <Link href="https://www.figma.com/design/64zsRxhnMm84wIkNrMva1g/H3ldex-Portfolio?node-id=2301-92&t=3OBV3xF5Q63lhKNK-1">a few projects</Link> that
                    i did in the web2 and web3 space.
                  </ListItem>
                  <ListItem>
                    Any motion graphics I create are created in Adobe After Effects. So
                    far I haven't found a non-Adobe product that's as good. If anyone has
                    suggestions please <Link href="/contact">message me</Link>.
                  </ListItem>
                  <ListItem>
                    For any 3D models and video editing I use{' '}
                    <Link href="https://www.blender.org/">Blender</Link>. Since 2.8 it's
                    become way simpler to use and in a lot of ways better than expensive
                    paid tools like 3DS Max or Maya.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                  I use <Link href="https://www.cursor.com/">Cursor</Link> as my text
                    editor, Cursor is the best way to code with AI.
                  </ListItem>
                  <ListItem>
                    Firefox is my main browser for both development and general use.
                  </ListItem>
                  <ListItem>
                    <Link href="https://reactjs.org/">React</Link> is my front end
                    Javascript library of choice. The component-centric mental model is
                    the first thing that truly made sense to me as a designer.
                  </ListItem>
                  <ListItem>
                    For 3D effects and image shaders I use{' '}
                    <Link href="https://threejs.org/">three.js</Link>. It has a bit of a
                    learning curve but you can do some really powerful stuff with it.
                  </ListItem>
                  <ListItem>
                    For CSS I've used a myriad pre-processors and css-in-js solutions like
                    styled-components, but these days I'm using vanilla CSS with{' '}
                    <Link href="https://postcss.org/">PostCSS</Link> to get upcoming CSS
                    features today.
                  </ListItem>
                  <ListItem>
                    For Javascript animations I use{' '}
                    <Link href="https://www.framer.com/motion/">Framer Motion</Link>, it's
                    a great way to add spring animations to React and three.js.
                  </ListItem>
                  <ListItem>
                    For Designing Illustrations I use{' '}
                    <Link href="https://www.adobe.com/">Adobe Illustrator</Link>, and{' '}
                    <Link href="https://www.figma.com/">Figma</Link>.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>System</ProjectSectionHeading>
              <Table>
              <TableBody>
                  <TableRow className={styles.tableRow}>
                    <TableHeadCell>Desktop</TableHeadCell>
                    <TableCell>ASUS ROG Strix G16CH-1370KF0960</TableCell>
                  </TableRow>
                  <TableRow className={styles.tableRow}>
                    <TableHeadCell>Operating system</TableHeadCell>
                    <TableCell>Intel Core i7-13700KF</TableCell>
                  </TableRow>
                  <TableRow className={styles.tableRow}>
                    <TableHeadCell>Browser</TableHeadCell>
                    <TableCell>Firefox</TableCell>
                  </TableRow>
                  <TableRow className={styles.tableRow}>
                    <TableHeadCell>Monitor</TableHeadCell>
                    <TableCell>ROG Swift OLED PG27UCDM</TableCell>
                  </TableRow>
                  <TableRow className={styles.tableRow}>
                    <TableHeadCell>Keyboard</TableHeadCell>
                    <TableCell>Apex Pro Gen3</TableCell>
                  </TableRow>
                  <TableRow className={styles.tableRow}>
                    <TableHeadCell>Mouse</TableHeadCell>
                    <TableCell>Razer Viper Ultimate</TableCell>
                  </TableRow>
                  <TableRow className={styles.tableRow}>
                    <TableHeadCell>Laptop</TableHeadCell>
                    <TableCell>Asus ROG Zephyrus G14</TableCell>
                  </TableRow>
                  <TableRow className={styles.tableRow}>
                    <TableHeadCell>Headphones</TableHeadCell>
                    <TableCell>Airpods Air</TableCell>
                  </TableRow>
                  <TableRow className={styles.tableRow}>
                    <TableHeadCell>Microphone</TableHeadCell>
                    <TableCell>Blue Yeti</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
