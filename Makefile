# Local dev server -- serves app/ from disk, proxies /api/ to the Fairwinds site.
# usage: make serve [PORT=3000]

PORT ?= 3000

serve:
	node devserver.mjs --port $(PORT)

# Point at the older /fairwinds storefront instead of FairwindsV2.
serve-v1:
	node devserver.mjs --port $(PORT) --upstream https://thumbprint.Four51OrderCloud.com/fairwinds

help:
	node devserver.mjs --help

.PHONY: serve serve-v1 help
