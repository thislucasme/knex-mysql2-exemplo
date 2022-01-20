import { Controller, Post } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Controller('usuarios')
export class UsuarioController {


	@Post('salvar')
	salvarUsuario() {

	}
}
