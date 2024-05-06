import { useSelector } from 'react-redux'
import da_DK from '../../translations/da_DK.json'
import en_GB from '../../translations/en_GB.json'
import { RootState } from './../Redux/Store'
import { Language, LanguageProps } from '../Redux/Slices/LanguageSlice'

type translation = { about: string; [key: string]: string }

type Translations = { [key in Language]: translation }
const translations: Translations = { da_DK, en_GB }

export const useTranslation = () => {
  const languageState: LanguageProps = useSelector(
    (state: RootState) => state.language
  )

  const currentLanguage = languageState.current
  const languages = languageState.languages

  const translation: translation = translations[languages[currentLanguage]]
  return (key: string) => translation[key]
}
