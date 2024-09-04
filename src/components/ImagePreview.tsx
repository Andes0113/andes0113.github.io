import { useEffect, useState } from 'react';
import type { RichImage } from '@/common/data';

export default function ImagePreview({ images }: { images: RichImage[] }) {
  const [selected, setSelected] = useState(0);
  const selectedImage = images[selected];

  useEffect(() => {
    const interval = setInterval(() => {
      setSelected((sel) => (sel < images.length - 1 ? sel + 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Add indexes to images to maintain their order
  const indexedImages = images.map((img, idx) => ({ ...img, idx }));

  // Set image as the "beginning" of the carousel when selected
  // Previewed images start as the images after then wrap to images before
  const previewedImages = indexedImages
    .slice(selected + 1)
    .concat(indexedImages.slice(0, selected));

  return (
    <div className="image-previewer">
      <div className="main-image-container">
        <img src={selectedImage.src} alt={selectedImage.alt} />
      </div>
      <div className="image-previews">
        {previewedImages.map((image) => (
          <button key={image.id}>
            <img
              src={image.src}
              alt={image.alt}
              onClick={() => setSelected(image.idx)}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
