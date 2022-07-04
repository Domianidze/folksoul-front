import { useState, useEffect, useRef } from 'react';

import { ChangeEventHandler } from 'react';

const useFileUpload = () => {
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

  const changeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    const files = e.target.files;

    if (files) {
      const file: File = files[0];

      setImage(file);
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

export default useFileUpload;
