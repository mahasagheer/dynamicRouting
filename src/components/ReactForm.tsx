import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
const ReactForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const {
    t,
    i18n: { language, changeLanguage },
  } = useTranslation();
  const languages = [
    {
      code: "en",
      lang: "English",
    },
    {
      code: "ko",
      lang: "korean",
    },
    {
      code: "hi",
      lang: "hindi",
    },

    {
      code: "ja",
      lang: "Japanes",
    },
  ];
  console.log(language);
  const handleChangeLanguage = (lang) => {
    changeLanguage(lang);
    console.log(language);
  };
  return (
    <>
      {languages.map((lng) => {
        return (
          <button
            value={lng.code}
            key={lng.code}
            onClick={() => handleChangeLanguage(lng.code)}
            className="text-lg p-2 bg-[#F19ED2] w-[20%] rounded-2xl mt-4 mx-9"
          >
            {lng.lang}
          </button>
        );
      })}
      <div className="bg-[#91DDCF] text-center pt-10 mx-[20%] my-[5%] ">
        <h1 className="text-3xl">{t("contact")}</h1>
        <p className="text-lg mb-2">{t("lineOne")}</p>
        <form
          onSubmit={handleSubmit((data) =>
            alert(
              `${data.First_Name} ${data.Last_Name} Submitted a Message by ${data.emailAddress}`
            )
          )}
        >
          <div className="flex flex-col justify-center ">
            <input
              {...register("First_Name", { required: true })}
              placeholder={t("firstName")}
              className="mx-4  p-4 text-lg  mb-4"
            />
            {errors.First_Name && (
              <p className="text-sm text-left ml-4 p-1">
                First Name is required
              </p>
            )}
            <input
              {...register("Last_Name", { required: true })}
              placeholder={t("lastName")}
              className="mx-4  p-4 text-lg mb-4"
            />

            <input
              {...register("emailAddress", { required: true })}
              placeholder={t("emailAddress")}
              className="mx-4  p-4 text-lg  mb-4"
            />
            {errors.emailAddress && (
              <p className="text-sm text-left ml-4 p-1">
                Valid Email Address is required
              </p>
            )}
            <textarea
              {...register("Message")}
              placeholder={t("textArea")}
              rows={4}
              className="mx-4  p-4 text-lg  mb-4"
            />
          </div>
          <button
            type="submit"
            className="text-lg p-2 bg-[#F19ED2] w-[20%] rounded-2xl	mb-4 "
          >
            {t("button")}
          </button>
        </form>
      </div>
    </>
  );
};

export default ReactForm;
