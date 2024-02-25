import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { JogoService } from './game.jogo.service';
import { GameSocket } from './game.jogo.controllerSocket';
import { GameService } from '../game.service';
import { GameRepository } from '../game.repository';


@Module({
  imports: [],
  controllers: [],
  providers: [JogoService, PrismaService, GameSocket, GameRepository, GameSocket],
  exports: [],
})
export class JogoModule {}
