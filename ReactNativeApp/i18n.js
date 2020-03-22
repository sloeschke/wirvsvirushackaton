import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const languageDetector = {
    type: 'languageDetector',
    async: true,
    detect: cb => cb('de'),
    init: () => { },
    cacheUserLanguage: () => { },
};

i18n
    .use(languageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translations: {
                    "Welcome Message": "Welcome to FoodMatching App.",
                    "Corona FAQs": "Here you can find frequently asked questions",
                    "welcome": "Hello, <br/> <strong>Welcome</strong>",
                    "EN": "English",
                    "DE": "German",
                    "title1": "Your extra layer of security",
                    "description1": "--Use single-use gloves to pick up items from shelves\n--Do not reuse gloves and do not touch your face, the area around your eyes, or your nose with them\n--You do not have gloves? Use the small plastic bags for fruits and vegetables instead. Again: Do not touch your skin or face with them.\n--See correct usage: https://www.youtube.com/watch?v=xueBYfElFEg",
                    "imageUrl1": "https://firebasestorage.googleapis.com/v0/b/wirvsvirus-65979.appspot.com/o/Hackathon_wear_gloves.png?alt=media&token=46ac2b21-1c22-4d54-a960-02e7ab9b561f",
                    "title2": "Night owl or early bird? Be both",
                    "description2": "--Infection risk increases in crowded areas\n--Try to avoid trips to the supermarket during rush hours\n--Are you encountering too many people? Go for a short walk and check again afterwards\n--<Link to time slot management app>",
                    "imageUrl2": "https://firebasestorage.googleapis.com/v0/b/wirvsvirus-65979.appspot.com/o/Hackathon_Layout-Time.png?alt=media&token=1ede6536-9f44-4b6f-85b1-2006599fc423",
                    "title3": "Choose wisely!",
                    "description3": "--Stand back before choosing goods\n--Feel free to pick your favorites from the shelves, but be careful: Once handled, you should not put it back.\n--One after another: Please keep distance from others",
                    "imageUrl3": "https://firebasestorage.googleapis.com/v0/b/wirvsvirus-65979.appspot.com/o/Hackathon_pick_products.png?alt=media&token=bb09e758-2799-4019-ab3b-3f22e897d4c7",
                    "title4": "Are you at the counter?",
                    "description4": "--Pay contactless via card or phone\n--Do not approach the cashier too much",
                    "imageUrl4": "",
                    "title5": "Ist die Stimmung doch mal angespannt?",
                    "description5": "",
                    "imageUrl5": ""
                }
            },
            de: {
                translations: {
                    "Welcome Message": "Willkommen bei FoodMatching App.",
                    "Corona FAQs": "Hier finden Sie häufig gestellte Fragen",
                    "welcome": "Hello, <br/> <strong>Willkommen</strong>",
                    "EN": "Englisch",
                    "DE": "Deutsch",
                    "title1": "Deine extra Schutzschicht",
                    "description1": "--Einmalhandschuhe beim Anfassen von Waren verringern das Infektionsrisiko. \n--Verwende die Handschuhe nicht f\u00fcr mehrere Eink\u00e4ufe. Ber\u00fchre sie beim Anziehen nicht von au\u00dfen\n--Keine Handschuhe zur Hand? Verwende Plastikt\u00fcten aus der Obst und Gem\u00fcseabteilung\n--Fasse dir auch mit Handschuhen nicht ins Gesicht, damit du keine Viren darauf \u00fcbertr\u00e4gst\n--So benutzt du sie richtig: https://www.youtube.com/watch?v=xueBYfElFEg",
                    "imageUrl1": "https://firebasestorage.googleapis.com/v0/b/wirvsvirus-65979.appspot.com/o/Hackathon_wear_gloves.png?alt=media&token=46ac2b21-1c22-4d54-a960-02e7ab9b561f",
                    "title2": "Fr\u00fcher Vogel oder Nachteule? Beides gut!",
                    "description2": "--Aufenthalte in gr\u00f6\u00dfere Menschenmengen erh\u00f6hen das Infektionsrisiko\n--Versuche deinen Einkauf au\u00dferhalb von Sto\u00dfzeiten zu machen\n--Sollte es zu voll sein, nutz die Zeit und geh eine Runde spazieren, um dem Ansturm zu entgehen",
                    "imageUrl2": "https://firebasestorage.googleapis.com/v0/b/wirvsvirus-65979.appspot.com/o/Hackathon_Layout-Time.png?alt=media&token=1ede6536-9f44-4b6f-85b1-2006599fc423",
                    "title3": "Triff deine Wahl!",
                    "description3": "--Gehe nicht zu nah an die Lebensmitteln heran solange du aussuchst\n--Such dir dein liebstes Lebensmittel aus bevor du es anfasst. Was du in die Hand nimmst Sollte nicht zur\u00fcck ins Regal kommen\n--Einer nach dem anderen: Achte auf Abstand zu deinen Mitmenschen",
                    "imageUrl3": "https://firebasestorage.googleapis.com/v0/b/wirvsvirus-65979.appspot.com/o/Hackathon_pick_products.png?alt=media&token=bb09e758-2799-4019-ab3b-3f22e897d4c7",
                    "title4": "Bist du an der Kasse?",
                    "description4": "--Bezahle bargeldlos wenn immer m\u00f6glich (EC / Kreditkarte / Handy)\n--Sch\u00fctze die Kassierer*innen und bleib hinter der Scheibe ",
                    "imageUrl4": "",
                    "title5": "Seid lieb zueinander!",
                    "description5": "",
                    "imageUrl5": ""
                }
            }
        },
        fallbackLng: "de",
        debug: false,

        // have a common namespace used around the full app
        ns: ["translations"],
        defaultNS: "translations",

        keySeparator: false, // we use content as keys

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
