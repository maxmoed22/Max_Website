# Running the Live Preview

Instructions for starting and stopping the local dev server used to preview the site while editing.

## Start the dev server

Run in a terminal from the project root:

```powershell
npm run dev
```

This starts Next.js on [http://localhost:3000](http://localhost:3000) with hot-reload — changes to files under [src/](../src) appear automatically without needing a restart.

Alternatively, in VS Code you can run the **Next.js: dev server** task (Terminal → Run Task…) which does the same thing in the background.

## View the preview

Once the server says `Ready`, open [http://localhost:3000](http://localhost:3000) in your browser, or use VS Code's Simple Browser to view it inside the editor.

## Stop the dev server

- If running in a normal foreground terminal: click into that terminal and press `Ctrl+C`, then confirm with `Y` if prompted.
- If running as a background VS Code task or you've lost track of the terminal, you can free up the port directly in PowerShell:

```powershell
Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue |
  Select-Object -ExpandProperty OwningProcess -Unique |
  ForEach-Object { Stop-Process -Id $_ -Force -ErrorAction SilentlyContinue }
```

You can confirm it stopped by re-running:

```powershell
Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue
```

No output means the port is free and the server is stopped.

## Verifying the build (optional)

To check the site compiles cleanly without running the dev server:

```powershell
npm run build
```
