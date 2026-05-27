# Publikacja Szycko Studio

Repozytorium lokalne jest gotowe i ma pierwszy commit.

Docelowa domena:

```text
szyckostudio.pl
```

## GitHub Pages

1. Zaloguj GitHub CLI:

```powershell
gh auth login
```

2. Utwórz repozytorium i wypchnij stronę:

```powershell
cd C:\Users\szyck\Documents\Codex\2026-05-21\umia-by-od-podstaw-stworzy-mi\website-szycko-studio
git branch -M main
gh repo create szyckostudio.pl --public --source . --remote origin --push
gh repo edit Majsterek79/szyckostudio.pl --enable-pages
gh api repos/Majsterek79/szyckostudio.pl/pages -X POST -f source.branch=main -f source.path=/
```

Jeśli GitHub odpowie, że Pages już istnieje, to nie jest błąd.

## DNS home.pl dla GitHub Pages

Dla domeny głównej `szyckostudio.pl` ustaw rekordy:

```text
A  @  185.199.108.153
A  @  185.199.109.153
A  @  185.199.110.153
A  @  185.199.111.153
```

Dla `www.szyckostudio.pl`:

```text
CNAME  www  Majsterek79.github.io
```

Po propagacji w GitHub Pages włącz `Enforce HTTPS`.
