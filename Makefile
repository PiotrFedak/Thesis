DOCKER_COMPOSE = docker-compose
DC_FILE = -f docker-compose.yml
FRONTEND_SERVICE = frontend
BACKEND_SERVICE = backend

all: build

build:
	$(DOCKER_COMPOSE) $(DC_FILE) build

up:
	$(DOCKER_COMPOSE) $(DC_FILE) up -d

down:
	$(DOCKER_COMPOSE) $(DC_FILE) down

restart-frontend:
	$(DOCKER_COMPOSE) $(DC_FILE) restart $(FRONTEND_SERVICE)

restart-backend:
	$(DOCKER_COMPOSE) $(DC_FILE) restart $(BACKEND_SERVICE)

status:
	$(DOCKER_COMPOSE) $(DC_FILE) ps

pull:
	$(DOCKER_COMPOSE) $(DC_FILE) pull

test-frontend:
	$(DOCKER_COMPOSE) $(DC_FILE) run --rm $(FRONTEND_SERVICE) npm test

test-backend:
	$(DOCKER_COMPOSE) $(DC_FILE) run --rm $(BACKEND_SERVICE) php artisan test

clean:
	$(DOCKER_COMPOSE) $(DC_FILE) down --rmi all --volumes --remove-orphans
