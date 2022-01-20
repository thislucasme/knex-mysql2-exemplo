import { DatabaseService } from './database.service';
import { Module } from '@nestjs/common';

@Module({
    providers: [DatabaseService],
})
export class DatabaseModule { }
