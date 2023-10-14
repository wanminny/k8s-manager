.PHONY: run install build image push clean

tag = v0.1
releaseName = k8s-manager
dockerhubUser = wanminny

ALL: run

install:
	npm install

run: install
	npm run dev

build: install
	npm run build

image:
	docker build -t ${dockerhubUser}/${releaseName}:${tag} --platform=linux -f docker/Dockerfile .

push: image
	docker push ${dockerhubUser}/${releaseName}:${tag}

clean:
	-rm -rf ./dist ./node_modules