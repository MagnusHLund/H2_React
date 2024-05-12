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
  connectToDatabase()
  const placeholders = args.map(() => '?').join(',')
  connection.query(`CALL ${procedureName}(${placeholders})`, args, (error) => {
    if (error) throw error
    console.log('Stored procedure executed successfully.')
  })

  connection.end()
}
