import { earth } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Revolutionize Your  <br className="sm:block hidden" /> Business's Online Journey
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Experience a transformative shift in your company's online presence and unlock new possibilities with our cutting-edge website solutions.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={earth} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
