import { useEffect, useState } from "react";

const useServices = () => {
  const [service, setservice] = useState([]);
  // data loading from github hosting json file and export it
  useEffect(() => {
    fetch("https://iamsobahan.github.io/fetchapi/service.json")
      .then((res) => res.json())
      .then((data) => setservice(data));
  }, []);

  return [service, setservice];
};

export default useServices;
