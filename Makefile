.PHONY: deploy

deploy: update_dependencies
	npm run build

	cd dist

	git init
	git add -A
	git commit -m 'deploy'

	git push -f https://github.com/VictorManduca/resume.git master:gh-pages

update_dependencies:
	rm -rf dist/ node_modules/ package-lock.json
	npm install
