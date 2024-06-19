
import './App.css';

function App() {

    // GET method
    const getMethod = async (endpoint) => {
      try {
        const response = await fetch(`${baseURL}${endpoint}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching data', error);
        throw error;
      }
    };
  
    // POST method
    const postMethod = async (endpoint, data) => {
      try {
        const response = await fetch(`${baseURL}${endpoint}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        return result;
      } catch (error) {
        console.error('Error posting data', error);
        throw error;
      }
    };
  
    // DELETE method
    const deleteMethod = async (endpoint) => {
      try {
        const response = await fetch(`${baseURL}${endpoint}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        return result;
      } catch (error) {
        console.error('Error deleting data', error);
        throw error;
      }
    };

  return (
    <>
      <div>
        <h1>This is a webpage for signal R testing</h1>
        <button onClick={getMethod}>For Get Method</button>
        <button onClick={postMethod}>For Post Method</button>
        <button onClick={deleteMethod}>For Delete Method</button>
      </div>
      
    </>
  )
}

export default App
