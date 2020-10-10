import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
/**
 * Below imported for Fastify use
 */
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { join } from 'path';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);

  //The factory below uses Express by default. Commented out to use Fastify instead
  //const app = await NestFactory.create(AppModule);
  //Use Fastify
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    /*Below, I have deliberately added the options object here setting the values to the default. 
     There are many other fastify options, see https://www.fastify.io/docs/latest/Server/*/
    new FastifyAdapter({logger: false, ignoreTrailingSlash: false, bodyLimit: 1048576, caseSensitive: true})
  );
  app.useGlobalPipes(new ValidationPipe());

  //In production environment, better to disable detailed error message as shown below:
  /*
  app.useGlobalPipes(new ValidationPipe(
    {disableErrorMessages: true,}
    ));
    */

  /**
   * Pius note: You can set global prefix for routes e.g. for versioning purpose
    */

   //app.setGlobalPrefix('v1');

   /**
    * Let's create static folders for public
    */
   app.useStaticAssets({
    root: join(__dirname, '..', 'public'),
    prefix: '/public/',
  });

  /**
   * Let's create folders for views template
   */
  app.setViewEngine({
    engine: {
      nunjucks: require('nunjucks'),
    },
    templates: join(__dirname, '..', 'views'),
  });
  //  await app.listen(3001);
  //await app.listen(3000);
  //For fastify, include 0.0.0.0 to listen on all IPs on the system. Otherwise, fastify will only listen on localhost.
  await app.listen(3003, '0.0.0.0');

  //More NOTES about fastify use: See https://docs.nestjs.com/techniques/performance for redirect and options
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
