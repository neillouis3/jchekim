import Image from 'next/image';

interface ImageType {
  src: string;
  alt: string;
}

interface ImageGridProps {
  images: ImageType[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div key={index} className="relative w-full h-64"> {/* Use Tailwind's aspect ratio */}
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
