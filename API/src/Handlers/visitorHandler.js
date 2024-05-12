import { callProcedure } from '../Utils/database.js'

export function addVisitor(req, res) {
  // Stored procedure arguments [ip, last_visit]
  callProcedure('InsertOrUpdateVisitor', [req.ip])
  res.send('Received POST request')
}
