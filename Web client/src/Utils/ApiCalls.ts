import axios from 'axios'

export const addVisitor = async () => {
  try {
    const response = await axios.post('http://localhost:1408/visitor/add', {})
    return response.data
  } catch (error) {
    console.error(`An error has occurred: ${error}`)
    throw error
  }
}

export const sendEmail = async () => {}

export const getVisitor = async () => {
  try {
    const response = await axios.post('http://localhost:1408/visitor/get')
    return response.data
  } catch (error) {
    console.error(`An error has occurred: ${error}`)
    throw error
  }
}
