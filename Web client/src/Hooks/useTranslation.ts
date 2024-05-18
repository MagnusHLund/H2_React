import { useSelector } from 'react-redux'
import danishTranslation from '../../translations/da_DK.json'
import englishTranslation from '../../translations/en_GB.json'
import { RootState } from './../Redux/Store'
import { Language, LanguageProps } from '../Redux/Slices/LanguageSlice'

type Translation = { [key: string]: string }

// This represents a mapping from Language to Translation.
type Translations = { [key in Language]: Translation }

// Define the translations object. This is where you import your actual translation data.
// Each language key maps to the imported JSON data for that language.
const translations: Translations = {
  da_DK: danishTranslation,
  en_GB: englishTranslation,
}

// Define the useTranslation hook. This is a custom hook that you can use in your components
// to get the correct translation based on the current language.
export const useTranslation = () => {
  // Use the useSelector hook from react-redux to get the current language state from the Redux store.
  // The language state includes the current language and the list of available languages.
  const languageState: LanguageProps = useSelector(
    (state: RootState) => state.language
  )

  // Get the current language from the language state.
  const currentLanguage = languageState.current

  // Get the list of available languages from the language state.
  const languages = languageState.languages

  // Get the Translation object for the current language.
  // This object includes all the translations for the current language.
  const currentTranslation: Translation =
    translations[languages[currentLanguage]]

  // Return a function that takes a translation key and returns the corresponding translation.
  // This function can be used in your components to get the correct translation for a given key.
  return (key: string) => currentTranslation[key]
}
