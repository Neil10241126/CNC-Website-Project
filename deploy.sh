#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# 部署到 https://neil10241126.github.io
# git push -f git@github.com:neil10241126/neil10241126.github.io.git main

# 部署到 https://neil10241126.github.io/CNC-Website-Project
git push -f https://github.com/Neil10241126/CNC-Website-Project.git main:gh-pages

cd -