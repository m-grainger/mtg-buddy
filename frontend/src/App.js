import "./App.css";
import Card from "./components/Card";
import axios from "axios";
import { useState, useEffect } from "react";

/* const fetchOne = async (cardId) => {
  try {
    console.log("test????????");
    const res = await axios.get(`http://localhost:8000/api/card/${cardId}`);
    console.log(`circus in app ${JSON.stringify(res.data, null, 2)}`);
    console.log(res.data.name);
    return res;
  } catch (error) {
    console.log(`ERROR!  ${error}`);
  }
};

const cardData = fetchOne("0000579f-7b35-4ed3-b44c-db2a538066fe"); */

const App = () => {
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    const fetchData = async (cardId) => {
      try {
        console.log("test????????");
        const res = await axios.get(`http://localhost:8000/api/card/${cardId}`);
        console.log(`circus in app ${JSON.stringify(res.data, null, 2)}`);
        console.log(res.data.name);
        setCardData(res.data);
        return res;
      } catch (error) {
        console.log(`ERROR!  ${error}`);
      }
    };

    fetchData("0000579f-7b35-4ed3-b44c-db2a538066fe");
  }, []);

  console.log(`card data check: ${JSON.stringify(cardData, null, 2)}`);

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-purple-500 to-blue-500">
      <div className="absolute top-0 left-0 mt-4 ml-20">
        <input
          type="text"
          placeholder="Search"
          className="mt-5 ml-4 px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-gray-500"
        />
        <button
          type="submit"
          className="ml-2 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-bold"
        >
          Submit
        </button>
      </div>
      <div className="h-screen w-screen flex justify-center items-center mt-10">
        <div className="w-[90%] h-[90%] flex justify-center items-center bg-pink-300 bg-opacity-20 rounded-lg p-10">
          <div className="w-3/5 h-full border-black border-2 rounded-lg mr-4">
            {/*             <Card cardId={cardData.cardId} cardName={cardData.cardName} /> */}
            {cardData && <Card cardId={cardData.name} cardName={cardData.id} />}
          </div>
          <div className="w-2/5 h-full border-black border-2 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
