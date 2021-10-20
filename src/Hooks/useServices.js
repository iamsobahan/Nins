import { useEffect, useState } from "react";

const useServices = () => {
  const [service, setservice] = useState([]);

  useEffect(() => {
    fetch("https://iamsobahan.github.io/fetchapi/service.json")
      .then((res) => res.json())
      .then((data) => setservice(data));
  }, []);

  return [service, setservice];
};

export default useServices;
