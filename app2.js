const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Served </title> </head>')
      res.write(`<html><body><table>
        <thead>
        <tr>
        <th>New City</th>
        <th>Reason</th>
        <th>Distance from Los Angeles</th>
        <th>Travel Cost</th>
        </tr>
        </thead>
    <tbody>
        <tr>
        <td>New York</td>
        <td>Times Square, explore city</td>
        <td>~2500 miles</td>
        <td>$500</td>
        </tr>
        <tr>
        <td>Miami</td>
        <td>Warm weather, beaches</td>
        <td>~2500 miles</td>
        <td>$1000</td>
        </tr>
        <tr>
        <td>Washington D.C.</td>
        <td>Museums, gardens</td>
        <td>~2500 miles</td>
        <td>$500</td>
        </tr>
        <tr>
        <td>Portland</td>
        <td>Explore waterfalls, forests</td>
        <td>~960 miles</td>
        <td>$300</td>
        </tr>
    </tbody>
    </table>
    </body>
  </html>`)
      res.write('Content \n')
      res.write('More content \n')
      res.write('Hello World')    
      res.end('</body></html>')
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the start
})