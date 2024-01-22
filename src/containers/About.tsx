import { useEffect, useState } from 'react';
import { HeroImage, ListItem, Wrapper, Link } from '../components';
import { getSectionAnimation } from '../animations';
import { aboutSection, author } from '../utils/portfolio';
import { getId } from '../utils/helper';

const About = () => {
  const { title, img, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex gap-16 items-center lg:items-start flex-col lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          <p>
            Discovering my passion for coding and web technologies during my
            Chemical Engineering bachelor's program, I decided I was going to further my
            education in this field. And so after completing five years studying Chemical
            Engineering and gaining two years working as a frontend web
            developer in 2017, I pursued a second bachelor’s in Computer
            Science.
          </p>
          <p>
            In 2022, I joined a small team, where my role was not just on the
            frontend but I was actively involved in the entire architecture and
            end-to-end product development. This experience was a crash course
            for me into various new web coding technologies and beyond. In early
            2023, I began working with Elixir and joined a startup as a
            Technical Product Support for their chatbot service developed using
            Elixir. 
          </p>
          <p>
            When I’m not coding or learning something new, you’ll find me
            playing video games, watching anime or indulging in my recently
            discovered passion for design.
          </p>

          {list && (
            <>
              <p>{list.title}</p>
              <ul className="text-sm gap-1 grid grid-cols-2 w-2/3">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </>
          )}
        </div>
        <HeroImage src={img} alt={author.name} />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
