import styles from "../style";

const experienceItems = [
  {
    id: "exp-1",
    label: "Aerospace & Defense",
    title: "PickNik Robotics",
    body:
      "Contributed to production-grade robotics software delivered to clients including NASA Johnson Space Center and Lockheed Martin. Worked on the MoveIt Pro platform for manipulation applications used in space and defense programs.",
  },
  {
    id: "exp-2",
    label: "Veterinary / Sensitive Data",
    title: "Crux Imaging",
    body:
      "Co-founded and operate a production veterinary teleradiology platform built on Next.js, Firebase, and a custom DICOM/PACS pipeline. Handles sensitive medical imaging data with role-based access control and a security posture aligned with NIST 800-171 principles.",
  },
  {
    id: "exp-3",
    label: "Stack",
    title: "Modern, Cloud-Native, Secure",
    body:
      "React, Next.js, TypeScript, Firebase, Google Cloud, PostgreSQL, Python, and ROS. Single point of contact — no offshore handoffs, no legacy contractor bloat.",
  },
];

const ExperienceCard = ({ label, title, body }) => (
  <div className="flex-1 min-w-[300px] max-w-[400px] m-4 p-8 rounded-[20px] feedback-card">
    <p className="font-poppins font-normal text-[14px] leading-[20px] text-gradient uppercase tracking-wider mb-3">
      {label}
    </p>
    <h4 className="font-poppins font-semibold text-white text-[22px] leading-[30px] mb-3">
      {title}
    </h4>
    <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
      {body}
    </p>
  </div>
);

const Testimonials = () => (
  <section id="experience" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Experience That <br className="sm:block hidden" /> Translates to Government Work
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          We bring hands-on experience building production systems for organizations with strict security, reliability, and compliance requirements — including aerospace, defense, and regulated healthcare environments.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full relative z-[1]">
      {experienceItems.map((item) => <ExperienceCard key={item.id} {...item} />)}
    </div>
  </section>
);

export default Testimonials;
