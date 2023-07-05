## Url: https://js-case-next-13.vercel.app/

## Description
This is a simple portfolio blog with the ability to create, delete posts. 
Main important features:
1. Next.js 13 authentication with Google OAuth and Handle register and login.
2. Next.js 13 API routes
3. Next.js 13 Image Optimization
4. Next.js 13 Font Optimization 
5. Next.js 13 Image Upload to Cloudinary (Dashboard panel, create new post)
6. Data fetching locally Portfolio folder from json files. Generate page dinamically using [category] folder.
7. Next.js 13 SEO generate meta tags for each page automatically and manually.
8. Next.js 13 + Framemotion animation (just for fun 😊). In future I will add more animation to this project.

## Additional Information
- This project was created on the basis of a tutorial Next.js 13 by Lama Dev https://www.youtube.com/watch?v=VE8BkImUciY
- But it has significant changes before the original version that I added myself:
1. Added a new Home page with framemotion animation
2. Added mobile menu
3. CSS styles have been redesigned and adaptability to any device has been added.
4. Added upload images to the cloudinary service for Dashboard panel (for create new post). It was very important for me to learn how to do this. In the original version, Form Input was used for this in which you simply entered the path to a local image or a link from the Internet. Which could lead to serious errors in the application (Next Image dont like String data without '/' 😊)
5. Validation for deleting a post and much more that I have already redone.
6. I spent quite a few hours posting this project on Vercel. On localhost:3000 everything worked fine, but when I sent the project to Vercel, many component imports began to give an error that it was not found. The whole problem is in the SRC folder when I deleted it and redid the jsconfig.json config a little, which largely fixed the problem. There were also a lot of minor issues with api/posts fetching data but this was fixed by temporarily commenting out those pages. After a successful Deploy, they worked properly. 


## If you want to use the project for your own purposes you need to put your data in your .env file for this project to work
- MONGO_URI=your mongo uri, click connect on Cluster => Drivers => take link =>  and after put your password inside link without "<>" (dashboard.mongodb.com)
- GOOGLE_CLIENT_ID=your google client id (console.developers.google.com)
- GOOGLE_CLIENT_SECRET=your google client secret (console.developers.google.com)
- NEXTAUTH_SECRET=your next auth secret (https://next-auth.js.org/getting-started/example)
- NEXTAUTH_URL=your next auth url (http://localhost:3000) or (https://yourdomain.com)
- NEXTAUTH_URL_INTERNAL=your next auth url (http://localhost:3000) or (https://yourdomain.com)
- NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your cloudinary cloud name (https://cloudinary.com/)


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started 
First, run install dependencies:

```bash
npm install
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
