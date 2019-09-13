import { Module } from '@nestjs/common';
import { CatsResolvers } from './cats.resolvers';
import { CatsService } from './cats.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CatSchema } from './database/cat-mongoose-schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema}])],
  providers: [CatsService, CatsResolvers],
})
export class CatsModule {}