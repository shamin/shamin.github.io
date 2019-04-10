---
path: "/cli-utilities"
date: "2019-04-10T17:12:33.962Z"
title: "Some really useful command line utilities."
---

There are a lot of command line utilities available in bash that can help you process millions of data in seconds. Some of them are

## Head
Head is a command line utility to print first part of files given in standard input
`head -1 data.txt` - prints the first line of data.txt file

[Read More](https://shapeshed.com/unix-head/)

## Tail
Tail is a command line utility to print the last part of files given in standard input. ie It works just the opposite of head
`tail -1 data.txt` - prints the last line of data.txt file

[Read More](https://shapeshed.com/unix-tail/)

## Cat
Cat is a command line utility for concatenating files and printing to standard output.
`cat data.txt` - prints the contents of data.txt file

[Read More](https://shapeshed.com/unix-cat/)

## Grep
Grep is a is a command line utility for printing lines that match a pattern.
`cat data.txt | grep "some-data"` - Search for `some-data` in the data.txt file and print the lines which contains the text

[Read More](https://shapeshed.com/unix-grep/)

## Shuf
Shuf is a command line utility which generates random permutations from input lines to standard output.
`cat data.txt | shuf` - Prints the content of data.txt shuffled

[Read More](https://shapeshed.com/unix-shuf/)

## Uniq
Uniq is a command line utility which can be used for filtering repeated lines in a file.
`cat data.txt | uniq` - Filtering repeated lines in data.txt file and prints it. 

[Read More](https://shapeshed.com/unix-uniq/)

## Cut
Cut is a command line utility for cutting sections from each line of files and writing the result to standard output.
`echo 'baz' | cut -b 2` - Prints `a` that is the secord character as specified in the cut.

[Read More](https://shapeshed.com/unix-cut/)

## Join
Join is a command line utility for joining lines of two files on a common field. 
`join file1.txt file2.txt` - Joins the data of 2 files based on some common field.

[Read More](https://shapeshed.com/unix-join/)

## Split
Split is a command line utility that can be used to split a file into pieces.
`split -l 200 split_me.txt` - Split split_me.txt to n files having 200 lines

[Read More](https://www.folkstalk.com/2012/06/split-command-examples-in-unix-linux.html)

## jq
jq is a command line utility used for processing JSON.
`jq '.' data.json` - Pretty prints data.json file

[Read More](https://shapeshed.com/jq-json/)

## awk
awk is a command line utility that searches for certain patterns and specified actions on that line.

[Read More](https://www.gnu.org/software/gawk/manual/gawk.html#toc-Part-I_003a-The-awk-Language)
