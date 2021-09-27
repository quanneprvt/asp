const Koa = require('koa');
const logger = require('koa-logger');
const Router = require('koa-router');
const responses = require('./responses');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();

app.use(cors());
app.use(bodyParser());
app.use(logger());

const PORT = 4000;

router.get('/api/inbox/loans', ctx => {
  // returnRes(ctx, 'loans');
  const query = ctx.request.query;
  if (query.feature) {
    ctx.body = {
      data: responses.loans[responses.loans.length - 1],
    };
  } else if (query.admin) {
    ctx.body = {
      data: responses.loans,
    };
  } else {
    ctx.body = {
      data: responses.loans.filter((loan, idx) => idx >= 3),
    };
  }
});

router.post('/api/inbox/loans', ctx => {
  const body = ctx.request.body;
  const data = {
    id: responses.length,
    type: 'loan',
    action: 'review',
    amount: body.amount,
    member: body.name,
    status: 'pending',
    info: {
      dates: {
        timestamp: body.date,
      },
    },
  };
  responses.loans.push(data);
  ctx.body = {
    data
  }
});

router.delete('/api/inbox/loans', ctx => {
  const body = ctx.request.body;
  const data = responses.loans.filter(loan => loan.id === body.id)[0];
  responses.loans.splice(responses.loans.indexOf(data), 1);
  ctx.body = {
    data
  }
});

router.put('/api/inbox/loans', ctx => {
  const body = ctx.request.body;
  const data = responses.loans.filter(loan => loan.id === body.id)[0];
  data.status = body.status;
  responses.loans[responses.loans.indexOf(data)] = {...data};
  ctx.body = {
    data
  }
});

app.use(router.routes());
app.use(router.allowedMethods({throw: true}));

console.log(`Server running on port ${PORT}\n`);
app.listen(PORT);
