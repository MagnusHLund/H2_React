import axios from 'axios'

export const addVisitor = async () => {
  try {
    const response = await axios.post(
      'https://api.magnuslund.com/visitor/add',
      {}
    )
    return response.data
  } catch (error) {
    console.error(`An error has occurred: ${error}`)
    throw error
  }
}

export const sendEmail = async () => {}

export const getVisitor = async (): Promise<number> => {
  try {
    const response = await axios.get(
      'https://api.magnuslund.com/visitor/getCount'
    )
    const visitorNumber: number = response.data[0].TotalVisitors
    return visitorNumber
  } catch (error) {
    console.error(`An error has occurred: ${error}`)
    throw error
  }
}
