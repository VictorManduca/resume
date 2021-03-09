.PHONY: deploy

deploy:
	sudo mv src/assets/ ./
	sudo mv src/index.html ./index.html
	rm -rf .editorconfig README.md src/

	git init
	git add -A
	git commit --allow-empty -m 'deploy'

	git push -f https://github.com/VictorManduca/resume.git master:gh-pages
