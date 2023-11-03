#!/bin/bash

if [ $# -eq 0 ]; then
  echo "No arguments provided."
elif [ $# -le 3 ]; then
  for arg in "$@"; do
    echo "$arg"
  done
else
  for i in {1..3}; do
    echo "${!i}"
  done
fi
