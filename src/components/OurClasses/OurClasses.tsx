import { SelectedPage } from "../../models/SelectedPage";
import { ClassType } from "../../models/ClassType";

import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";

import { motion } from "framer-motion";

import HeaderText from "../HeaderText/HeaderText";
import Class from "../Class/Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae iure tenetur nobis autem provident officiis eligendi amet velit incidunt, vitae aut atque. Doloremque inventore, officia unde et ut aliquam fugit!",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae iure tenetur nobis autem provident officiis eligendi amet velit incidunt, vitae aut atque. Doloremque inventore, officia unde et ut aliquam fugit!",
    image: image2,
  },
  {
    name: "Core Classes",
    description:
      "lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae iure tenetur nobis autem provident officiis eligendi amet velit incidunt, vitae aut atque. Doloremque inventore, officia unde et ut aliquam fugit!",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae iure tenetur nobis autem provident officiis eligendi amet velit incidunt, vitae aut atque. Doloremque inventore, officia unde et ut aliquam fugit!",
    image: image4,
  },
  {
    name: "Fitness Classes",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae iure tenetur nobis autem provident officiis eligendi amet velit incidunt, vitae aut atque. Doloremque inventore, officia unde et ut aliquam fugit!",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (page: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HeaderText>OUR CLASSES</HeaderText>
            <p className="py-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repudiandae iure tenetur nobis autem provident officiis eligendi
              amet velit incidunt, vitae aut atque. Doloremque inventore,
              officia unde et ut aliquam fugit!
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[22.063rem] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[175rem] whitespace-nowrap">
            {classes.map((item: ClassType, index: number) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
