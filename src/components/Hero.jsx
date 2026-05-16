import styles from "../style";
import {robot, word } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <>
      
      <div className="flex justify-center">
      <img src={word} alt="AInnovations" className=" w-[60%] h-[80%] relative z-[5]" />
      </div>

    <section id="home" className={`flex md:flex-row mt-[-40px] flex-col ${styles.paddingY}`}>
    
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
       
        <div className="flex flex-row justify-between items-center w-full ">
          
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] ">
             Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Web Development.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our next-generation web development company is at the forefront of the digital landscape, pushing boundaries and setting new standards in website design and development. Combining cutting-edge technologies and innovative approaches, we create immersive online experiences that captivate audiences and drive business growth.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 mb-10 relative`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5] mt-[-100px]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
    </>
  );
};

export default Hero;
