#!/bin/sh
# Helper: stage, commit, and push changes. Run from repository root.

BRANCH="main"
if [ ! -z "$1" ]; then
  BRANCH="$1"
fi

git add .
git commit -m "chore: add HR case study draft and asset scaffolding"
git push origin "$BRANCH"
