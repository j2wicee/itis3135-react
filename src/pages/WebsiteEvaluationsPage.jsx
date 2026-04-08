import { useDocumentTitle } from "../hooks/useDocumentTitle";

export function WebsiteEvaluationsPage() {
  useDocumentTitle("Website Evaluations");
  return (
    <>
      <h2>CRAP Website Design Analysis</h2>

      <section>
        <h3>
          <a href="https://www.apple.com/iphone/" target="_blank" rel="noreferrer">
            Apple
          </a>
        </h3>
        <ul>
          <li>
            <strong>Contrast:</strong> Apple is very good at making important
            items stand out visually using high-contrast colors and clear visual
            hierarchy. They utilize clean whitespace paired with a blue that
            draws your attention to the &quot;buy&quot; buttons.
          </li>
          <li>
            <strong>Repetition:</strong> Apple seems to have card components
            that they reuse across their website, maintaining a consistent
            design language. They keep consistent fonts and styling across their
            product sites.
          </li>
          <li>
            <strong>Alignment:</strong> Apple maintains a consistent alignment
            of elements across their website, using a grid system that keeps
            content neatly organized and easy to scan. They may switch between
            vertical and horizontal layouts, but they maintain alignment despite
            this fact. The way they use padding and margins to keep items away
            from the borders of the page and from other items make the page less
            cluttered and aesthetically pleasing.
          </li>
          <li>
            <strong>Proximity:</strong>Apple utilizes sections to group related
            content together, helping users navigate the site more effectively.
            On the iPhone page they have sections for the different models,
            places to buy, essentials, and more.
          </li>
        </ul>
      </section>

      <section>
        <h3>
          <a href="https://www.spacejam.com/1996/" target="_blank" rel="noreferrer">
            Space Jam
          </a>
        </h3>
        <ul>
          <li>
            <strong>Contrast:</strong> This website lacks the contrast compared
            to a powerhouse like Apple&apos;s site. There aren&apos;t bigger or
            more visually distinct elements to draw attention to important
            content. Everything is bright, making it hard to focus on more
            important information. Visuals can also be cluttered giving the user
            no real place to start.
          </li>
          <li>
            <strong>Repetition:</strong> When clicking on each link, the
            following pages follow the same layout, basic big image at the top
            and text at the bottom. However some of the pages go off this
            template and give the page more inconsistency. For example the
            &quot;Press Box Shuttle&quot; page has a different style and feel
            compared to the &quot;Junior Jam&quot; when they should be almost
            styled the same. It gives the sense that one thing is supposed to be
            more important than the other with no real reason or explanation to
            help the user differentiate this.
          </li>
          <li>
            <strong>Alignment:</strong> On the main page the main content is
            centered leaving a lot of white space on the sides and top making it
            seem very open. The following pages have similar styling with the
            images being centered and at the top and the text is just allowed to
            go across the entire screen without containment. I think adding a
            container for the text would give it more consistency because some
            pages have more information than the others and it can be
            overwhelming to have it just go across the entire screen. It would
            also make the page look more organized and less cluttered.
          </li>
          <li>
            <strong>Proximity:</strong> On the main page the content is grouped
            together with the clickable links being organized in a orbital
            pattern. When taking into account that this is a page about space
            jam and different planets it is a great layout but I would try to
            space it out a little more to make it less cluttered and easier to
            read. But proximity is alright not terrible.
          </li>
        </ul>
      </section>
    </>
  );
}
