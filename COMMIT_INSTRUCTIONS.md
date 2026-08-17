# Commit & Push Instructions

I added the HR case study draft and asset scaffolding. To commit and push these changes to your GitHub repo, run one of the helper scripts below from the repository root.

Linux / macOS (bash):
```bash
chmod +x scripts/commit_and_push.sh
./scripts/commit_and_push.sh main
```

Windows (PowerShell):
```powershell
.\scripts\commit_and_push.ps1 -Branch main
```

Notes:
- Ensure your local repo has the correct remote `origin` and you have push permissions.
- If your default branch is `master` or another name, pass that branch name instead of `main`.
- These scripts run `git commit` — if no changes are staged, the commit command will fail. You can inspect `git status` first.
