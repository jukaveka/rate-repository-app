import { useEffect, useState } from "react";

const useReporitories = () => {
  const [repositories, setRepositories] = useState();
  const [loading, setLoading] = useState(false);

  const fetchRepositories = async () => {
    setLoading(true);

    const response = await fetch(
      "http://192.168.187.127:5000/api/repositories"
    );

    if (!response.ok) {
      throw new Error("Could not fetch repositories from backend");
    }

    const json = await response.json();

    setLoading(false);
    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return { repositories, loading, refetch: fetchRepositories };
};

export default useReporitories;
