import { Router } from 'express'
const router = Router()
import bodyParser from 'body-parser';

router.use(bodyParser.json());

router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'React Redux Firebase'
  })
});


export default router
