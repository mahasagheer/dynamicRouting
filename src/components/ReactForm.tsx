import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const schema = yup
  .object({
    First_Name: yup.string().min(10).max(30).required(),
    Last_Name: yup.string().min(10).max(30).required(),
    emailAddress: yup.string().email().required(),
    Message: yup.string().min(10).max(600).required(),
  })
  .required();
const ReactForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      First_Name: "",
      Last_Name: "",
      Message: "Hello I wanted to reach out and ask if you can help with.",
    },
    resolver: yupResolver(schema),
  });
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
      <div className="bg-[#91DDCF] text-center pt-5 mx-[20%] my-[2%] ">
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
              {...register("First_Name")}
              placeholder={t("firstName")}
              className="mx-4  p-4 text-lg  mb-4"
            />
            <p>{errors.First_Name?.message}</p>
            <input
              {...register("Last_Name")}
              placeholder={t("lastName")}
              className="mx-4  p-4 text-lg mb-4"
            />
            <p>{errors.Last_Name?.message}</p>

            <input
              {...register("emailAddress")}
              placeholder={t("emailAddress")}
              className="mx-4  p-4 text-lg  mb-4"
            />
            <p>{errors.emailAddress?.message}</p>
            <textarea
              {...register("Message")}
              placeholder={t("textArea")}
              rows={4}
              className="mx-4  p-4 text-lg  mb-4"
            />
            <p>{errors.Message?.message}</p>
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
