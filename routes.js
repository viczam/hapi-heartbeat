export default [{
  path: '/heartbeat',
  method: 'GET',
  config: {
    handler(request, reply) {
      const { startedAt } = request.server.plugins['hapi-heartbeat'];
      reply({ startedAt });
    }
  }
}];
