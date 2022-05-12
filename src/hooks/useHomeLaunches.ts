import { useEffect, useState } from 'react';
import Home from '../models/Home';
import { getHome } from '../repository/Home';

export default function useHome() {
  const [home, setHome] = useState<Home | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchHome = async () => {
    setLoading(true);

    setHome(await getHome());

    setLoading(false);
  };

  useEffect(() => {
    fetchHome();
  }, []);

  return {
    home,
    loading,
    fetchHome
  };
}
