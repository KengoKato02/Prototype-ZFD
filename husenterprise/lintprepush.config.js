module.exports = {
 base: 'main',
 tasks: {
   'package.json': {
     concurrent: ['bun lint:pkg']
   },
   '*': {
     concurrent: ['bun lint:workspace', 'bun lint:unimported', 'bun lint:filesystem']
   }
 }
};