# Fullstact online shop (TypeScript, Next.js, BetterAuth, Drizzle, Neon postgreSQL, Resend)

This code features fullstack online shop with authentification via betterAuth, password reset via email with Resend, user and admin roles, admin dashboard to easily add products and manage users, dynamic routes to each product page, middleware protection, products cart, reviews for products, profile page.

------
## 1. Authentification


this code features fully functional login, signup, forgot password, reset password forms. made with Zod validation, Resend, BetterAuth, BetterAuth admin plugin, drizzle orm, and postgres database. 
middleware uses <code>getCookieCache(request)</code> which provides fast and secure method of route protection. 

## 2. Admin Dashboard

dashboard provides a way to easily add new products and delete users. once you add a product there, a product page will be made automatically with reviews form for each product. you can also easily delete or update product details here.

## 3. Products and products cart 

once you add a product throught admin dashboard, a product page, a reviews form and add-to-cart functionality is automatically working. 

## 4. Profile page 

i will be expanding functionality of profile page in future, but so far you can change your username there. it also uses zod validation just like signup and login forms. 

# How to test it out? 

first install dependancies, then create .env and fill it. it has to include 
<code>DATABASE_URL </code>
<code>BETTER_AUTH_SECRET</code>
<code>BETTER_AUTH_URL</code>
<code>GOOGLE_CLIENT_ID</code> 
<code>GOOGLE_CLIENT_SECRET</code>(for authentification with google, you can skip if you dont need it)
<code>GITHUB_CLIENT_ID</code>
<code>GITHUT_CLIENT_SECRET</code>(for authentification with github, you can also skip if you dont need it)
<code>RESENT_API_KEY</code>
after setting up env generate and push migration

## Important!
you are given user role by default, to test admin functionality you need to give it to yourself in your database(it is easy, just type admin in role table)


