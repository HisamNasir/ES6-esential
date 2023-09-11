'use client'
import { useState, useEffect } from 'react';

const Task15 = () => {
  const imgPaths = [
    '/images/img1.jpg',
    '/images/img2.jpg',
    '/images/img3.jpg',
  ];

  const [loadedImage, setloadedImage] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoad] = useState(true);
  useEffect(() => {
    const loadImage = (imgPath) => {
      return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = imgPath;

        image.onload = () => {
          resolve(imgPath); };
        image.onError = (err) => {
          reject(err); };  });
    };

    const loadImages = async () => {
      try {
        const promises = imgPaths.map((imgPath) => loadImage(imgPath));
        const loaded = await Promise.all(promises);
        setloadedImage(loaded);
        setLoad(false); }
        catch (err) {
        setLoad(false);
        setError('File not found'); } };

    loadImages();
  }, [imgPaths]);

  if (error) {
    return (
      <div className="text-red-500">
        {error}
      </div>
    );
  }
  if (loading) {
    return             <div className='absolute z-10 w-full h-full flex justify-center items-center'>
    <div className='flex space-x-2 text-white'>
        <div className='animate-pulse'>Loading</div>
        <div className=' animate-spin'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
        </div>
    </div>
</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-2 gap-2">
        {loadedImage.map((imgPath, index) => (
          <div key={index}>
            <img src={imgPath} alt={`Async Image ${index}`} className="m-2 w-56 h-56 object-cover rounded-3xl" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task15;
