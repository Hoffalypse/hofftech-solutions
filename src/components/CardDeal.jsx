import { earth } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Based in Colorado. <br className="sm:block hidden" /> Working Nationally.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        HoffTech Solutions is a U.S.-based small business serving federal, state, and local government clients across the country. Single point of contact, no offshore handoffs, and a stack built for the security and reliability requirements of public sector work.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={earth} alt="HoffTech Solutions national reach" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
