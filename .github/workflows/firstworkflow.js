name: My first workflow

on: push

jobs:
    first_job:
        runs-on: ubuntu-latest
        steps:
        - name: Welcome Message
          run: echo "My first step Github Actions Job"

        - name: List Files
          run: ls

        - name: Read file
          run: cat README.md