# KawAnime's API

## Purpose

There are two purposes planned for this API:

1. Analytics. Because of the content of KawAnime, I would not like to send analytics to famous
  analytics softwares. But I'd still love to know how many users I'm impacting. The sole purpose
  of the analytics API is then only to know the number of users KawAnime gathered, or at least
  a good enough approximation.

2. Updates. Not implemented yet. The plan would be that the app could check for important updates
  on this API and display them into the app.

## Dev

### Redis

This API relies on Redis and will try to connect to it immediatly when started so you need to have
Redis installed and a redis server launched in the background.

#### Install Redis

[Download and install redis from the official website](https://redis.io/download)

#### Start a Redis server

Simply open a terminal and type:

```bash
redis-server
```

### Start the app

#### Dev mode

Dev mode is handled with `nodemon` so the changes will make the server restart. To start dev mode,
simply type

```bash
npm run dev
```

#### Run tests

Tests are handled with `Jest`. Simply run

```bash
npm test
```

#### Production mode

This API is built with Babel and ES6 features so you'll need to transpile the code to node code first.

```bash
npm run build
```

Then you can simply start the app in production mode.

```bash
npm start
```

## Contributing

Any contribution is appreciated.

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request.

## License

MIT License

Copyright (c) Kylart
