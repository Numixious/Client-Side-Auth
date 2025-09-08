# Client Authentication System

This project is a simple client-side authentication system built with Next.js, TypeScript, Tailwind CSS, and the Shadcn library.

## Features

- **Login Page**

  - Input for Iranian mobile numbers with validation.
  - Sends a GET request to `https://randomuser.me/api/?results=1&nat=us`.
  - Stores user data (name, email, picture) in `localStorage`.
  - Redirects to the Dashboard page upon successful login. 

- **Dashboard Page**
  - Displays a welcome message with the user's name.
  - Logout button clears `localStorage` and redirects to the Login page.
  - Redirects to the Login page if no user data is found in `localStorage`.

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd client-auth
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Folder Structure

- `app/login/page.tsx`: Login page implementation.
- `app/dashboard/page.tsx`: Dashboard page implementation.
- `public/`: Static assets.
- `styles/`: Global styles.

## Technical Details

- **Validation**: Iranian mobile number validation using regex.
- **State Management**: Client-side state handled with `localStorage`.
- **Styling**: Tailwind CSS for responsive and accessible design.
- **Routing**: Next.js App Router for navigation.

## Dependencies

- Next.js
- TypeScript
- Tailwind CSS
- Shadcn UI

## License

This project is licensed under the MIT License.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
"# Client-Side-Auth" 
