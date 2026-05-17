import { credibilitySignals } from "../constants";
import styles from "../style";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {credibilitySignals.map((signal) => (
      <div key={signal.id} className={`flex-1 flex justify-start items-center flex-row m-3 min-w-[260px]`}>
        <div className="flex flex-col">
          <p className="font-poppins font-normal text-[14px] leading-[20px] text-gradient uppercase tracking-wider">
            {signal.title}
          </p>
          <h4 className="font-poppins font-semibold text-[22px] leading-[30px] text-white mt-1">
            {signal.value}
          </h4>
          {signal.subtitle && (
            <p className="font-poppins font-normal text-[13px] leading-[18px] text-dimWhite mt-1 italic">
              {signal.subtitle}
            </p>
          )}
        </div>
      </div>
    ))}
  </section>
);

export default Stats;
