import { useEffect,useState } from "react";
import axios from "axios"


const useFetch = (url)  => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  console.log({url : url})

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url);
        if(res){
            setData(res.data.results);
            setLoading(false);
        }
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
},[]);
 return { data, loading, error};
}

export default useFetch;