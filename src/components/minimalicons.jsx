import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const MinimalIcons = ({ items, className, isDark }) => {
  return (
    <motion.div
      className={`flex gap-6 items-center justify-center ${className || ''}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {items.map((item, index) => (
        <motion.a
          key={index}
          href={item.href} // Use the href from the item
          target={item.href?.startsWith('http') ? '_blank' : '_self'} // Open external links in new tab
          rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined} // Security for external links
          aria-label={item.label}
          variants={itemVariants}
          whileHover={{
            scale: 1.15,
            y: -5,
          }}
          whileTap={{ scale: 0.95 }}
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.006)',
            border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: isDark ? '#B0B7B5' : '#333333',
            fontSize: '24px',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)',
          }}
          className={
            isDark
              ? 'hover:bg-[rgba(19,112,98,0.1)] hover:border-[#137062] hover:text-[#137062] hover:shadow-[0_8px_20px_rgba(19,112,98,0.3)]'
              : 'hover:bg-[rgba(59,157,157,0.1)] hover:border-[#3b9d9d] hover:text-[#3b9d9d] hover:shadow-[0_8px_20px_rgba(59,157,157,0.3)]'
          }
        >
          {item.icon}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default MinimalIcons;
