import { useEffect, useState } from 'react';

export default function GetViewportWidth() {
  const [ vpWidth, setVpWidth ] = useState<number>(0);

  useEffect(() => {
    function getWidthOnResize() {
        setVpWidth(window.innerWidth)
    }

    setVpWidth(window.innerWidth);
    window.addEventListener('resize', getWidthOnResize);
    return () => window.addEventListener('resize', getWidthOnResize);
  }, [])

  return [vpWidth]
  
}