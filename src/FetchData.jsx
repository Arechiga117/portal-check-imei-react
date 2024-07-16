import React from "react";

function FetchData({imei}) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const url = (`https://01qymnly6l.execute-api.us-east-1.amazonaws.com/prod/?imei=${imei}`);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [url]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!data) {
    return <div>Loading...</div>;
  } else {
    
    return (
      <div>
        {}
        {data.map((item) => (
          <p key={item.id}>{item.name}</p>
        ))}
      </div>
    );
  }
}

export default FetchData;