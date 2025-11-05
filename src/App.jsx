import axios from "axios";
import "./App.css";
import GridImages from "./components/GridImages";
import Loader from "./components/Loader/index";
import { useState, useEffect } from "react";

// Сайт который показывает рандом фото https://api.unsplash.com/photos/random?client_id=-Pe-APVWBlBVlwKE9LehYeVOqnngyuViF50HR0RSsvY
// Хуки useState, useEffect
// Axios, Ui опционально
// GitHub pages
//App, GridImages, Images

function App() {
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchImage = async () => {
      setIsLoading(true);
      setError(false);
      try {
        const apiUrl =
          "https://api.unsplash.com/photos/random?client_id=-Pe-APVWBlBVlwKE9LehYeVOqnngyuViF50HR0RSsvY";
        const resp = await axios.get(apiUrl);
        setImage(resp.data);
      } catch (err) {
        console.error("Подробности ошибки:", err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImage();
  }, []);

  if (error) {
    return <div>Не удалось загрузить изображение.</div>;
  }

  return (
    <div className="container">
      <div className="container_wrapper">
        {isLoading ? <Loader /> : <GridImages image={image} />}
      </div>
    </div>
  );
}

export default App;
