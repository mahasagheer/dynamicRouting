import i18n from "i18next";
import LanguageDetector from "i18next-cli-language-detector";
import { initReactI18next } from "react-i18next";
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    resources: {
      en: {
        translation: {
          contact: "Contact Us",
          lineOne:
            " Lets get this conversation started. Tell us a bit about yourself and we shall get in touch as soon as we can.",
          button: " Submit",
          firstName: "First Name",
          lastName: "Last Name",
          emailAddress: "xyz@gmail.com",
          textArea: "Hello I wanted to reach out and ask if you can help with.",
        },
      },
      hi: {
        translation: {
          contact: "संपर्क करें",
          lineOne:
            " आइए यह बातचीत शुरू करें। हमें अपने बारे में कुछ बताएं और हम यथाशीघ्र संपर्क करेंगे।",
          button: " जमा करना",
          firstName: "पहला नाम",
          lastName: "उपनाम",
          emailAddress: "xyz@gmail.com",
          textArea:
            "नमस्ते, मैं आपसे संपर्क करना चाहता था और पूछना चाहता था कि क्या आप मदद कर सकते हैं।",
        },
      },
      ko: {
        translation: {
          contact: "문의하기",
          lineOne:
            " 이 대화를 시작해 보겠습니다. 귀하에 대해 조금 알려주시면 최대한 빨리 연락드리겠습니다.",
          button: " 제출하다",
          firstName: "이름",
          lastName: "성",
          emailAddress: "xyz@gmail.com",
          textArea: "안녕하세요. 도움을 주실 수 있는지 문의드리고 싶습니다.",
        },
      },
      ja: {
        translation: {
          contact: "お問い合わせ",
          lineOne:
            " この会話を始めましょう。あなた自身について少し教えてください。できるだけ早くご連絡させていただきます。",
          button: " 提出する",
          firstName: "ファーストネーム",
          lastName: "苗字",
          emailAddress: "xyz@gmail.com",
          textArea:
            "こんにちは、私は連絡して、あなたが手伝ってくれるかどうか尋ねたかったのです",
        },
      },
    },
  });
