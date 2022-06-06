import { useEffect, useState } from "react"

const getStoredTestGroup = (): number | false => {
  if (typeof window !== 'undefined' && window.navigator?.cookieEnabled && 'sessionStorage' in window) {
    const storedValue = window.sessionStorage.getItem('testGroup');
    if (storedValue !== null) {
      const parsedValue = parseInt(storedValue, 10);
      if (!isNaN(parsedValue)) {
        return parsedValue;
      }
    }
  }
  return false;
};

const storeTestGroup = (testGroup: number): void => {
  if (typeof window !== 'undefined' && window.navigator?.cookieEnabled && 'sessionStorage' in window) {
    window.sessionStorage.setItem('testGroup', testGroup.toString());
  }
};

const getTestGroup = (min: number, max: number): number => {
  const storedValue = getStoredTestGroup();
  if (storedValue === false || storedValue < min || storedValue > max) {
    return getRandInclusive(min, max);
  }
  return storedValue;
}

const getRandInclusive = (min: number, max: number): number => {
  max = Math.floor(max);
  min = Math.floor(min);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const useTestGroup = (min = 1, max = 12): number => {
  const [ testGroup, setTestGroup ] = useState<number>(() => getTestGroup(min, max));

  useEffect(() => {
    setTestGroup(getTestGroup(min, max));
  }, [ min, max ]);

  useEffect(() => {
    storeTestGroup(testGroup);
  }, [ testGroup ]);

  return testGroup;
}