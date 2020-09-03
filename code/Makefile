APP_NAME := omo-console
BUILD_VERSION   := $(shell git tag --contains)
BUILD_TIME      := $(shell date "+%F %T")
COMMIT_SHA1     := $(shell git rev-parse HEAD )
SITE_ROOT       := ${shell pwd}/dist

.PHONY: build
build: 
	rm -rf dist
	ng build --prod

.PHONY: dist
dist:
	tar -zcf ${APP_NAME}-${BUILD_VERSION}.tar.gz ./dist
	rm -rf dist/*
	mv ${APP_NAME}-${BUILD_VERSION}.tar.gz ./dist/

.PHONY: run
run: 
	echo ${SITE_ROOT}
	caddy -conf Caddyfile

