const { Router } = require('express');
const userRouter = require('./users.routes')

const principalRouter = Router();

principalRouter.get('/', (req, res) =>{
    res.send('Hola mundo!')
});

principalRouter.use('/user', userRouter);

module.exports = principalRouter;