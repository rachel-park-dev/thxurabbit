import {rest} from 'msw'
import user from './user.json'

export const handlers = [
  rest.get('/user', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(user))
  }),
  rest.post('/login', (req, res, ctx) => {

    user.push({
      id: 5,
      username: 'test',
      password: 'test',
    })

    return res(ctx.status(201), ctx.json({}))



  }),
];
