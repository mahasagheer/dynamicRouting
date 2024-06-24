// Filename - App.js

import { useState } from "react";
import { useTranslation } from "react-i18next";

// Contains the value and text for the options
const languages = [
  { value: "", text: "Options" },
  { value: "en", text: "English" },
  { value: "hi", text: "Hindi" },
  { value: "de", text: "German" },
  { value: "ur", text: "Urdu" },
  { value: "ko", text: "Korean" },
];

function App() {
  // It is a hook imported from 'react-i18next'
  const { t } = useTranslation();

  const [lang, setLang] = useState("en");

  // This function put query that helps to
  // change the language
  const handleChange = (e) => {
    setLang(e.target.value);
    let loc = "http://localhost:5173/";
    window.location.replace(loc + "?lng=" + e.target.value);
  };

  return (
    <div className="App">
      {/* We are showing the value by using the 
			keys we have created in the website */}
      <label>{t("choose")}</label>
      <select value={lang} onChange={handleChange} className="w-[15%]  p-2">
        {languages.map((item) => {
          return (
            <option key={item.value} value={item.value}>
              {item.text}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default App;

// import { useContext } from "react";
// import { LanguageContext } from "./AuthContext";
// const Language = () => {
//   const { handleChangeLanguage } = useContext(LanguageContext);
//   const languages = [
//     {
//       code: "en",
//       lang: "English",
//     },
//     {
//       code: "ko",
//       lang: "korean",
//     },
//     {
//       code: "hi",
//       lang: "hindi",
//     },

//     {
//       code: "ja",
//       lang: "Japanes",
//     },
//   ];
//   return (
//     <>
//       {languages.map((lng) => {
//         return (
//           <button
//             value={lng.code}
//             key={lng.code}
//             onClick={() => handleChangeLanguage(lng.code)}
//             className="text-lg p-2 bg-[#F19ED2] w-[20%] rounded-2xl mt-4 mx-9"
//           >
//             {lng.lang}
//           </button>
//         );
//       })}
//     </>
//   );
// };

// export default Language;
