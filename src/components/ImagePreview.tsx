import { useState } from 'react';
import type { RichImage } from '@/common/data';

export default function ImagePreview({ images }: { images: RichImage[] }) {
  const [selectedId, setSelectedId] = useState(images[0].id);
  const selectedImage = images.find((img) => img.id == selectedId)!;
  const previewedImages = images.filter((img) => img.id != selectedId);

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
              onClick={() => setSelectedId(image.id)}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
