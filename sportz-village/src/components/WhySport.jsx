export default function WhySport() {
  return (
    <section id="about" className="container-page py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <img
              src="https://picsum.photos/seed/why-sport-1/400/380"
              alt="Child athlete with a medal"
              className="rounded-2xl object-cover h-48 sm:h-56 w-full"
            />
            <img
              src="https://picsum.photos/seed/why-sport-2/400/300"
              alt="Team of young athletes lined up"
              className="rounded-2xl object-cover h-36 sm:h-44 w-full"
            />
          </div>
          <img
            src="https://picsum.photos/seed/why-sport-3/400/700"
            alt="Girls playing kabaddi"
            className="rounded-[2rem] rounded-tr-[6rem] object-cover h-full w-full"
          />
        </div>


        <div>
          <p className="eyebrow">Why Sport Matters</p>
          <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl leading-tight text-navy">
            Advancing Child And Community Development Through{" "}
            <span className="underline-swipe">Sport</span>
          </h2>

          <div className="mt-5 space-y-4 text-slate text-[15px] leading-relaxed">
            <p>
              Millions of children across India spend important years of learning without
              access to safe, structured opportunities for play, sport and experiential
              learning. In many public schools serving underserved communities,
              opportunities for physical activity, self-expression and meaningful
              engagement remain limited, leaving children without access to environments
              where they can build confidence, develop social and life skills and reach
              their full potential.
            </p>
            <p>
              Through more than 20 years of working with children across India, we have
              seen how sport, physical activity and play can transform the way young
              people learn, grow and engage with the world around them. As part of
              Sportz Village's mission of "Getting 100 Million Kids to Play," the
              Foundation works to transform schools and communities into inclusive,
              child-centered ecosystems where every child, especially girls and
              marginalized groups, can participate, develop and aspire through and
              beyond sport.
            </p>
          </div>

          <a href="#about" className="btn-primary mt-7">
            About Us
          </a>
        </div>
      </div>
    </section>
  );
}
