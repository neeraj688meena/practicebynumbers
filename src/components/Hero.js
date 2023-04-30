import ImgHero from "../assets/hero-img.png";

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero_left">
        <h1 className="sub-heading">Welcome back, Chris.</h1>
        <p>
          Let's take a look at your day today !. You have 0 patients scheduled
          and 0 new patients.You are scheduled to produce $0.00. You need to
          produce $0.00 stay on the track this month. <span>View Huddle</span>
        </p>
        <div className="hero_bitton">
          <button>Create a Custom Campaign</button>
          <button>Work on My Tasks</button>
          <button>Find Revenue Opprtunities</button>
        </div>
      </div>
      <div className="hero_right">
        <img src={ImgHero} />
      </div>
    </section>
  );
};
export default Hero;
