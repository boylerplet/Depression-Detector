import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';

const Post = (props) => {
  const { steps } = props;
  const { name, r1 } = steps;
  const [result, setResult] = useState()

  const state = {
    name: name.value,
    text: r1.value,
  }

  const score = useMemo(() => result, [result])

  useEffect(() => {
    // Create a POST request to the server
    const controller = new AbortController();
    const fetchScore = async () => {
      await axios.post(`http://127.0.0.1:5000/chatbot`, JSON.stringify(state), {
        headers: {
          'Content-Type': 'application/json'
        }, signal: controller.signal
      }).then((res) => {
        console.log(res);
        setResult(res.data.response.result)
      }).catch(function (error) {
        console.log(error);
      });
    }

    fetchScore();

    // Clean up function
    return () => {
      // Cancel any pending request if the component unmounts
      controller.abort();
    };
  }, [score]);

  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <p>{`The text has been submitted`}</p>
      <p>{result && `Your score is ${result.toFixed(2)} %`}</p>
    </div>
  );
};

export default Post;