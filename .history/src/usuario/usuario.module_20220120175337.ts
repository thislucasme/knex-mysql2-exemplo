import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [UsuarioController],
    providers: [UsuarioService],
})
export class UsuarioModule { }
