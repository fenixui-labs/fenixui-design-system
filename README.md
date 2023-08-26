Setup `gitsign`

```bash
go install github.com/sigstore/gitsign@latest

export GOPATH=$HOME/go
export PATH=$PATH:$GOPATH/bin

git config --local commit.gpgsign true  # Sign all commits
git config --local tag.gpgsign true  # Sign all tags
git config --local gpg.x509.program gitsign  # Use Gitsign for signing
git config --local gpg.format x509  # Gitsign expects x509 args
```

Install Node with `fnm`

```bash
curl -fsSL https://fnm.vercel.app/install | bash

fnm install v20.5.1

corepack enable

fnm use
```

To create a release

```bash
pnpm run changeset

# Commit changeset

# Push new commit

# Run release github action workflow

# `changeset` bot will open a PR
```