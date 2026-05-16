import { card } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={card} alt="HoffTech Solutions" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo} style={{marginLeft: '90px'}} >
      <h2 className={styles.heading2}>
        Problems We Solve <br className="sm:block hidden" /> Every Day
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Many agencies and organizations struggle with manual intake processes, disconnected systems, outdated internal software, and slow response times. We design and build practical solutions that simplify operations and let staff focus on the work that actually matters.
      </p>

      <ul className="mt-6 list-disc list-inside text-dimWhite font-poppins text-[16px] leading-[28px] max-w-[470px]">
        <li>Manual, time-consuming processes</li>
        <li>Disconnected tools and platforms</li>
        <li>Outdated or hard-to-maintain internal software</li>
        <li>Slow response times to constituents or staff</li>
      </ul>
    </div>
  </section>
);

export default Billing;
