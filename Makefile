POSTS=$(shell find posts/*)
POSTS_OUT=$(patsubst %.md, %.html, $(POSTS))

OUT = \
	index.html \
	blog.html \
	teaching.html \
	projects.html \
	misc.html \
	music.html \
	$(POSTS_OUT)

ROOT = .

CSS = style/style.css
NAVBAR = navbar.html

PANDOC = pandoc --shift-heading-level-by 1 -s -B $(NAVBAR) --css=%ROOT/$(CSS) 
SED = sed -i -e 's/\(href=.*\)\.md/\1.html/g' -e 's/%ROOT/$(ROOT)/g'

.PHONY: all clean

all: $(OUT)

posts/%.html: ROOT=..
posts/%.html: posts/%.md
	mkdir -p $(shell dirname $@)
	$(PANDOC) $< -o $@ --toc=true --toc-depth 2
	$(SED) $@

%.html: ROOT=.
%.html: %.md
	mkdir -p $(shell dirname $@)
	$(PANDOC) $< -o $@
	$(SED) $@

clean:
	$(RM) $(OUT)
