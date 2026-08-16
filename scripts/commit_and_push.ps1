# Helper PowerShell script to stage, commit, and push changes. Run from repository root.
param(
  [string]$Branch = 'main'
)

git add .
git commit -m 'chore: add HR case study draft and asset scaffolding'
git push origin $Branch
