import { Controller, Post } from '@nestjs/common';
import { UsuarioService } from './usuario.service';

@Controller('usuarios')
export class UsuarioController {
	constructor(private usuarioRepository: UsuarioService) { }

	@Post('salvar')
	salvarUsuario() {
		return this.usuarioRepository.buscar();
	}
}
