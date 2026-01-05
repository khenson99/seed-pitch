#!/bin/bash

# Clear any existing origin to avoid errors if re-running
git remote remove origin 2>/dev/null

echo "🔗 Connect to GitHub"
echo "---------------------------------------------------"
echo "Paste your new GitHub repository URL (e.g., https://github.com/username/repo.git):"
read repo_url

if [ -z "$repo_url" ]; then
  echo "❌ No URL provided. Exiting."
  exit 1
fi

echo ""
echo "⚙️  Configuring remote..."
git remote add origin "$repo_url"
git branch -M main

echo "🚀 Pushing to GitHub..."
git push -u origin main

echo ""
echo "✅ Done! Your code is now on GitHub."
echo "Now go to Netlify -> Add New Site -> Import from GitHub -> Select this repo."
