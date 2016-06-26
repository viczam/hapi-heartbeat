import pkg from './package.json';
import routes from './routes';

export function register(server, options, next) {
  server.expose('startedAt', new Date());
  server.route(routes);
  next();
}

register.attributes = {
  pkg,
  dependencies: []
};
