import { UsuarioModule } from './usuario/usuario.module';
import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    UsuarioModule, DatabaseModule]
})
export class AppModule { }
