import { Transition } from "framer-motion"

export const pageTransition = {
  initial: {
    opacity: 0,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 1.1,
  },
  transition: {
    duration: 0.6,
    ease: [0.42, 0, 0.58, 1], // easeInOut cubic bezier
  } as Transition,
}