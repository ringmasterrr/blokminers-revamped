import { motion } from "framer-motion";

export const CardImage = ({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) => {
  return (
    <div className="relative mb-2 w-16 overflow-hidden rounded-lg">
      <motion.img
        src={src}
        alt={alt}
        className="object-cover w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      />
    </div>
  );
};
