import {AnimatePresence, motion} from "framer-motion";

const PageAnimation = ({ children, keyValue, init = {opacity: 0}, animate = { opacity: 1 }, transition = { duration: 0.9 }, className }) => {
    return(
        <AnimatePresence>
            <motion.div key={keyValue} initial={init} animate={animate} transition={transition} className={className}>
                {children}
            </motion.div>
        </AnimatePresence>
    )
}
export default PageAnimation;
