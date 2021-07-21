//import "./NewsList.css";
import NewsCard from "components/news/NewsCard";
import { useEffect, useState } from "react";
import axios from "axios";
import AddNewsDialog from "components/news/AddNewsDialog"; 

export default function NewsList() {

  const [newsList, setNewsList] = useState([]);
  const [locale, setLocale] = useState("en");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchNews() {
      const data = await axios.get(
        "https://sheltered-plateau-06495.herokuapp.com/newsposts?_locale=" + locale
      );
      setNewsList([...data?.data]);
    }
    fetchNews();
  }, [locale]);

  function setLang() {
    setLocale(window.locales.value);
  }

  function showAddNewsDialog() {
    setShowModal(!showModal);
  }

  return (
    <div className="newslist">
      <div className="newslistbreadcrumb">
        <div className="newslisttitle">
          <h3>World News</h3>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <select name="locales" id="locales" onChange={setLang}>
              <option value="en">English</option>
              <option value="es">Spanish</option>
            </select>
          </div>
        </div>
      </div>
      <div className="newslist-content">
        {newsList?.map((newsItem, i) => (
          <NewsCard newsItem={newsItem} key={i} />
        ))}
      </div>
      {showModal ? <AddNewsDialog closeModal={showAddNewsDialog} /> : null}
    </div>
  );
}