# Refeat FrontEnd

## Getting Started

Install dependencies in your local, (node, pnpm must be already installed in your computer)

```bash
pnpm install
```

&nbsp;

Duplicate `.env.sample` file and change it's name to `.env.local`
Ask FE team member about the value of env properties.

&nbsp;

Then run development server.

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

&nbsp;

if port 3000 is already in use, next automatically use next number. (ex, 3001 ... )
you can use port 3000 after killing server which already exists in port 3000.

```bash
npx kill-port 3000
```
