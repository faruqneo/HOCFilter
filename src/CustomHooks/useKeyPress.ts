import React from "react";

const keydown = "keydown";
const keyup = "keyup";

type KeyType = {
    key: string
};

const useKeyPress = (targetKey: string) => {
    const [keyPressed, setKeyPressed] = React.useState(false);
  
    React.useEffect(() => {
      const downHandler = ({ key }: KeyType) => {
        if (key === targetKey) {
          setKeyPressed(true);
        }
      };
  
      const upHandler = ({ key }: KeyType) => {
        if (key === targetKey) {
          setKeyPressed(false);
        }
      };
  
      window.addEventListener(keydown, downHandler);
      window.addEventListener(keyup, upHandler);
  
      return () => {
        window.removeEventListener(keydown, downHandler);
        window.removeEventListener(keyup, upHandler);
      };
    }, [targetKey]);
  
    return keyPressed;
  };

  export default useKeyPress;