.PHONY: build-development

remove-development:
	docker compose down
	
build-development: ## Build the development docker image.
	docker compose build

.PHONY: start-development
start-development: ## Start the development docker container.
	docker compose up