import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { GiBasketballBall } from 'react-icons/gi';

const FloatingBubbles = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const floatUpTransition = {
    duration: 10,
    ease: 'linear',
    repeat: Infinity,
    repeatType: 'loop',
  };

  const bubbleVariants = {
    initial: {
      y: 500,
      opacity: 1,
    },
    animate: {
      y: -500,
      opacity: 0,
    },
  };

  const xMovement = useTransform(mouseX, [0, window.innerWidth], [-40, 20]);
  const yMovement = useTransform(mouseY, [0, window.innerHeight], [-20, 20]);

  return (
    <div className="pointer-events-none md:block">
      {[...Array(8)].map((_, index) => (
        <motion.div
          key={index}
          className="fixed"
          style={{
            left: `${Math.random() * 80 + 10}%`,
            bottom: 0,
          }}
          x={xMovement}
          y={yMovement}
          variants={bubbleVariants}
          initial="initial"
          animate="animate"
          transition={{ ...floatUpTransition, delay: index * 2 }}
        >
          <GiBasketballBall
            size={30 + Math.random() * 20}
            className="dark:text-custom-red text-custom-blue"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingBubbles;
