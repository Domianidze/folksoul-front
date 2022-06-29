import { useState, useEffect, useRef } from 'react';

const UseFileUpload = () => {
  const [image, setImage] = useState<File | null>();
  const [preview, setPreview] = useState<string | null>();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  const clickHandler = () => {
    if (!inputRef.current || preview) return;

    inputRef.current.click();
  };

  const changeHandler = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    } else {
      setImage(null);
    }
  };

  return {
    image,
    preview,
    inputRef,
    clickHandler,
    changeHandler,
  };
};

export default UseFileUpload;
