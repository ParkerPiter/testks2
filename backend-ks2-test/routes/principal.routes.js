const { Router } = require('express');
const userRouter = require('./users.routes')

const principalRouter = Router();

principalRouter.use('/user', userRouter);

module.exports = principalRouter;