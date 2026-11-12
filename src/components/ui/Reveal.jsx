import { motion, useReducedMotion } from 'framer-motion';

const elements = {
  div: motion.div,
  article: motion.article,
};

export default function Reveal({ as = 'div', delay = 0, children, ...props }) {
  const reduceMotion = useReducedMotion();
  const Element = elements[as];
  const animation = reduceMotion ? {} : {
    initial: { opacity: 0.85, y: 6 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.25, delay },
  };

  return <Element {...animation} {...props}>{children}</Element>;
}
