import * as express from 'express';
import { Response } from 'express';
import { Request } from 'express';
import * as bodyParser from 'body-parser';
import mainRoute from './routes';
import DataBaseServer from './libs/DataBase';
import * as cors from 'cors';


export default class Server {

  private app: express.Express;

  constructor(private config) {
    this.app = express();
  }

  bootstrap = (): Server => {
    this.initBodyParser();
    this.setUpRoutes();

    return this;

  }

  initBodyParser = (): void => {
    const { app } = this;
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
  }

  run = () => {
    const { app, config: { PORT: port, MONGO_URL: mongoUrl } } = this;
    console.log(mongoUrl);
    DataBaseServer.open(mongoUrl).then(() => {
      app.listen(port, error => {
        if (error) {
          throw error
        }
        console.log('App is running successfully at port number: ' + port);
      });
    });
  }


  setUpRoutes = (): Server => {
    const { app } = this;
    app.use(cors());
    console.log('-----------------------In Set Up routes----------------------');
    app.get('/health', (req: Request, res: Response) => {
      console.log('promise')

      res.send('okayyy');
    });
    app.use('/api', mainRoute);
    return this;
  }



}