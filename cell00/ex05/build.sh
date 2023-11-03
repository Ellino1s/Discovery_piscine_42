#!/bin/bash

if [ $# -eq 0 ]; then
  echo "No arguments provided."
  exit 1
fi
for arg in "$@"; do
    new_folder_name="ex$arg"
    mkdir "$new_folder_name"
done

