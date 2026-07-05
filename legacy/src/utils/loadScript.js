const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      if (document.querySelector(`script[src="${src}"]`)) {
        resolve();
        return;
      }
  
      const script = document.createElement('script');
      script.src = src;
      script.async = false; // Ensures scripts are executed in order
      script.onload = () => {
        resolve();
      };
      script.onerror = () => reject(new Error(`Failed to load script ${src}`));
      document.body.appendChild(script);
    });
  };
  
  export default loadScript;