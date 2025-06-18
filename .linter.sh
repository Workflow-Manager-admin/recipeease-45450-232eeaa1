#!/bin/bash
cd /home/kavia/workspace/code-generation/recipeease-45450-232eeaa1/recipeease_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

