import NextAuth, { User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        console.log("credentials", credentials);
        // POST login data to your backend
        const res = await fetch(
          "https://vaccine-app-backend-six.vercel.app/api/v1/auth/login",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password
            })
          }
        );

        return await res.json();
      }
    })
  ],
  pages: {
    signIn: "/auth/signin" // Define the sign-in page route
  },
  callbacks: {
    async jwt({ token, user }) {
      // Store user data in token
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.token = (user as any).token;
      }

      return token;
    },
    async session({ session, token }) {
      // Send token data to the session object
      session.user._id = token.id as string;
      session.user.email = token.email as string;
      session.user.name = token.name as string;
      session.user.token = token.token as string;
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt"
  }
});

export { handler as GET, handler as POST };
