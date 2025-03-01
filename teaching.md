---
title: Teaching
---

# At EPITA

EPITA is a French "*grande école d'ingénieurs*" specialized in software
engineering and computer science based in south Paris and other major cities
around the country. It was founded in 1984 and provides a very hands-on
approach: loads of projects and practicals and multiple internships.

Another specificity of EPITA is its use off "peer teaching" for practical
programming, meaning that some older students, the *assistants*, are employed
by the school to teach younger students. There are roughly 60 assistants per
year and they teach and help with programming projects for the first 3 years of
the curriculum.

I studied at EPITA and was one of these assistants, graduating in 2022.

Here are some of the things I teach there today.

## CMP (*Conception de Compilateurs*)

24h class revolving around designing and implementing a compiler in C++.
Companion class for the [Tiger Compiler](#tiger-compiler) project.

In 12 weeks, we go through the entirety of the compilation pipeline, from
basic lexing/parsing to instruction selection and register allocation. Compilers
are a fascinating topic and show up even in places where we do not
necessarily expect them, as shown by the recent boom of specialized languages
for Web 3 contracts or even more recent developments of compilation for AI and
LLMs.

## TYLA (*Typologie des Langages*)

12h class talking about programming languages: where they come from, how to
compare them, when to use which one, as well as playing with languages most
students wouldn't otherwise encounter before graduating[^tyla1].

[^tyla1]: Forth, Go, Swift, Ada, Pascal, Lua, Rust...

It's easy to forget -- perhaps because we have a deep emotional connection
to natural languages which we project onto them --  but programming
languages are merely *tools*. Most of them have a purpose, some of them should
only be used in very specific contexts, and some others just suck. And even
if you can use a hammer to nail a screw, maybe a screwdriver would be better[^tyla2].
Learning these tools, as well as *learning to learn* them is necessary to pick
up the language your boss tells you to use or simply stay relevant as trends in
languages come and go.

[^tyla2]: The hammer is C++, in case you were wondering.

This class is also the opportunity to give more insights on where our everyday
languages come from and how they're essentialy all old and flawed, as well as
promoting staying up to date with recent languages, even if they aren't without
flaws either.
As with every tool, we need to keep a critical mind and stay aware of the
context we're using them in.

## Tiger Compiler

Tiger Compiler is the 25-year-old compiler project of EPITA, and one of the
most in-depth projects teaching compilers, if not *the* most in-depth (I
might be biased).

It originated in late 1999 when Akim Demaille was looking for a
challenging long-term project for 3rd-year students, and has stuck around
since then. It's still a mandatory project of the main curriculum, and
guides students through writing a compiler in C++ for Andrew Appel's
Tiger language, following his 1998 classic book [Modern Compiler
Implementation](https://www.cs.princeton.edu/~appel/modern/)[^tc1]

[^tc1]: Still quite modern almost 30 years later.

As the project only lasts for around two months and writing a compiler from
scratch is tough[^tc2], students are instead given a codebase which they are
tasked with completing and improving to support missing features. For instance,
we give them a parser which parses only basic type definitions.

[^tc2]: Especially in C++.

Although students have been complaining for litteral decades about this
"fill-in-the-blanks" code, it's proven to be very effective for:

1. having them complete the project in a reasonable time.
2. limiting the spots where they can make mistakes to where mistakes are interesting.
3. showing them how a large project (~20 000 lines of C++) works and should be
  structured, as well as how to work within it and handle legacy code (some
  parts of the compiler being at this point older than students).

This last point is arguably the most important skill a software engineer
needs, and there's no way to learn it other than browsing through hundreds of
files to build habits. This makes Tiger an invaluable learning experience
even for students uninterested in compilers, especially since it takes
place before they go on internships where they can expect to encounter
similar-ish codebases.

Over the years, as some students end up maintaining the project the year after
they complete it, we've built a very unique community of past and present
maintainers. We have a dinner each year, which is always a great time.

I don't interact with students on the project directly and instead manage the
assistants who handle the project.

The subject of the project can be found [here](https://assignments.lre.epita.fr/)
and is open to everyone. Reference source code is obviously a well-kept secret.
If you intend to do the project, please keep it private to prevent student
plagiarism. Most of the code is ours anyway.

# At the Sorbonne

I've been involved with the *Compilation Avancée* class at Sorbonne Université
in M1 STL. I taught the first half of the class, focusing on bytecode, virtual
machines and garbage collection. The project for the class consists of writing a
VM for Lua5.1 bytecode, which I find quite fun (hopefully students do too!).
