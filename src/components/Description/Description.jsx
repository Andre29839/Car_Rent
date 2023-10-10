import homeImg from "../../images/heroBg.jpg";

const Description = () => {
  return (
    <section className="px-[16px] md:px-[24px] py-[20px] xl:py-[28px] xl:flex xl:gap-[8px]">
      <div className="text-text-primary mb-[12px] xl:mb-0 text-[14px] md:text-[18px] xl:tracking-wide bg-background p-[4px]">
        Welcome to our premier car rental platform, where your journey begins
        with convenience and flexibility. Whether you're planning a road trip, a
        business trip, or just need a temporary set of wheels, we've got you
        covered. Explore a wide range of vehicles, from compact cars for city
        escapades to spacious SUVs for family adventures. We provide transparent
        pricing, including any additional fees, ensuring you know exactly what
        to expect. Safety is our priority, and our well-maintained cars undergo
        regular inspections. Join the countless satisfied customers who have
        chosen us for their car rental needs. Start your adventure today with
        Our Service.
      </div>
      <img
        className="xl:w-[700px]"
        src={homeImg}
        alt="Parking"
        loading="lazy"
      />
    </section>
  );
};

export default Description;
