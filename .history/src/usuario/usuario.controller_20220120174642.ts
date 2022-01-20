import { Controller, Post } from '@nestjs/common';

@Controller('usuarios')
export class UsuarioController {

	@Post('salvar')
	salvarUsuario() {

	}
}
