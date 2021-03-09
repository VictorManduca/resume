.PHONY: deploy

deploy:
	git checkout HEAD src/
	cd src/

	git init
	git add -A
	git commit --allow-empty -m 'deploy'

	git push -f https://github.com/VictorManduca/resume.git master:gh-pages

	cd -
