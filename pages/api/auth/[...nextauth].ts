import NextAuth from "next-auth/next";
import Auth0Provider from "next-auth/providers"
import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import DiscordProvider from "next-auth/providers"


export default NextAuth ({
    providers: [
        GitHubProvider({
          clientId: "a126ad83fd760325a0fb",
          clientSecret: "1107c90fe91dca1d12a6d6a0adb17c15fc1c07f0"
        })
      ]
})