import React, {useState, useEffect} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import axios from 'axios';
import CharacterGrid from './CharacterGrid';
import Search from './Search';
import Header from './Header';



const App = () => {

  const [item, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');


  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)


      setItems(result.data);
      setIsLoading(false);
    }

    fetchItems();
  },[query])

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} item={item} />
    </div>
  );
}

export default App;
