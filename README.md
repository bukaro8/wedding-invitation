# Wedding Invitation

Digital wedding invitation built with Next.js, TypeScript, Tailwind CSS, Prisma, and PostgreSQL.

## Local Development

Install dependencies:

```bash
npm install
```

Create a local environment file from the example:

```bash
cp .env.example .env
```

Start PostgreSQL with Docker:

```bash
npm run db:up
```

Run Prisma migrations:

```bash
npm run db:migrate
```

Start the Next.js development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Use this local PostgreSQL connection string:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/wedding_invitation?schema=public"
ADMIN_SECRET="replace-with-a-local-secret"
```

## Database Commands

```bash
npm run db:up       # Start local PostgreSQL
npm run db:down     # Stop local PostgreSQL
npm run db:migrate  # Run Prisma migrations
npm run db:studio   # Open Prisma Studio
```
