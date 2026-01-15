BUILD_DIR ?= build

POSTS=$(shell find posts/*)
POSTS_OUT=$(addprefix $(BUILD_DIR)/, $(patsubst %.md, %.html, $(POSTS)))

OUT = \
	$(BUILD_DIR)/index.html \
	$(BUILD_DIR)/blog.html \
	$(BUILD_DIR)/teaching.html \
	$(BUILD_DIR)/projects.html \
	$(BUILD_DIR)/misc.html \
	$(BUILD_DIR)/music.html \
	$(BUILD_DIR)/music.js \
	$(BUILD_DIR)/albums.js \
	$(POSTS_OUT)

ROOT = .

CSS = style/style.css
NAVBAR = navbar.html

PANDOC = pandoc --shift-heading-level-by 1 -s -B $(NAVBAR) --css=%ROOT/$(CSS) 
SED = sed -i -e 's/\(href=.*\)\.md/\1.html/g' -e 's/%ROOT/$(ROOT)/g'

.PHONY: all clean $(BUILD_DIR)

all: $(BUILD_DIR) $(OUT)

$(BUILD_DIR):
	mkdir -p $(BUILD_DIR)
	cp -r static/* $(BUILD_DIR)

$(BUILD_DIR)/%: % $(BUILD_DIR)
	cp $< $@

$(BUILD_DIR)/albums.js: albums2js.py albums.csv $(BUILD_DIR)
	./albums2js.py

$(BUILD_DIR)/posts/%.html: ROOT=..
$(BUILD_DIR)/posts/%.html: posts/%.md
	mkdir -p $(shell dirname $@)
	$(PANDOC) $< -o $@ --toc=true --toc-depth 2
	$(SED) $@

$(BUILD_DIR)/%.html: ROOT=.
$(BUILD_DIR)/%.html: %.md
	mkdir -p $(shell dirname $@)
	$(PANDOC) $< -o $@
	$(SED) $@

clean:
	rm -rf $(BUILD_DIR)
