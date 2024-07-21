.PHONY: help env run down up clean cleanup

COMPOSE1 = docker-compose
COMPOSE2 = docker compose


env:
	@echo "Creating .env file with environment variables..."
	@echo "POSTGRES_USER=trans" > .env
	@echo "POSTGRES_PASSWORD=trans" >> .env
	@echo "POSTGRES_DB=trans" >> .env
	@echo "POSTGRES_PORT=5432" >> .env
	@echo "POSTGRES_HOST=db" >> .env
	@echo "REDIS_HOST=localhost" >> .env
	@echo "REDIS_PORT=6379" >> .env
	@echo "BACKEND_HOST=backend" >> .env
	@echo "BACKEND_PORT=8000" >> .env

run:
	${COMPOSE2} up

re-build:
	${COMPOSE2} up --build

down:
	@${COMPOSE2} down

restarting: down run

#CLEAN AND REMOVE
fclean:
		sudo docker compose down --rmi all --volumes

del:
		sudo docker system prune --force

del_vol:
		sudo docker volume prune -f

del_net:
		sudo docker network prune --force

purge: down fclean del del_vol del_net
