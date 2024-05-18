import mysql from 'mysql'
import { getDatabaseInfo } from './constants.js'

let connection = null

function connectToDatabase() {
  const databaseInfo = getDatabaseInfo()
  connection = mysql.createConnection({
    host: databaseInfo['HOST'],
    user: databaseInfo['USER'],
    password: databaseInfo['PASS'],
    database: databaseInfo['NAME'],
  })

  connection.connect((error) => {
    if (error) throw error
    console.log('Connected to the database.')
  })
}

/**
 * @param {string} procedureName
 * @param {Array} args
 */
export function callProcedure(procedureName, args) {
  return new Promise((resolve, reject) => {
    connectToDatabase()
    const placeholders = args ? args.map(() => '?').join(',') : ''
    connection.query(
      `CALL ${procedureName}(${placeholders})`,
      args,
      (error, results) => {
        if (error) {
          reject(error)
        } else {
          resolve(results[0])
        }
        connection.end()
      }
    )
  })
}
