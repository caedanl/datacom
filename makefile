#  ███╗   ███╗ █████╗ ██╗  ██╗███████╗
#  ████╗ ████║██╔══██╗██║ ██╔╝██╔════╝
#  ██╔████╔██║███████║█████╔╝ █████╗  
#  ██║╚██╔╝██║██╔══██║██╔═██╗ ██╔══╝  
#  ██║ ╚═╝ ██║██║  ██║██║  ██╗███████╗
#  ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝
#  

build-local:
	cd client && npm run build
	npm run develop

build-client-develop:
	cd client && npm start

build-production:
	cd client && npm build

dockerize:
	docker build -t datacom-app .

run-docker:
	docker run \
	-e DB_URL='mongodb+srv://caedan:ottoman-lavender-niobium-serge@data.w5s2x.mongodb.net/datacom'
	-e API_URL='http://localhost:3000' \
	-p 3000:3000 datacom-app