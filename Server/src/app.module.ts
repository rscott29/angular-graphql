import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CatsModule } from './cats/cats.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
@Module({
  imports: [
    CatsModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../Client/dist', 'fullstack'),   // <-- path to the static files
    }),
    MongooseModule.forRoot('mongodb+srv://rich:LFajbu1a6DtCVdEZ@cluster0-ubxsk.mongodb.net/test?retryWrites=true&w=majority'),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
      cors :{
        origin: '*',
      },
      tracing: true
    }),
  ],
})
export class AppModule {}
