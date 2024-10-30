import { prisma } from "@/lib/prisma";
import NextAuth, { User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { NextAuthOptions } from "next-auth";

// Definimos una interfaz para User con propiedades extendidas
interface CustomUser extends User {
  usuarioID: number;
  correoUsuario: string;
  nombreUsuario: string;
  rolUsuario: string;
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        correoUsuario: { label: "correoUsuario", type: "email" },
        contrasena: { label: "contrasena", type: "password" }
      },
      async authorize(credentials): Promise<User | null> {
        if (!credentials?.correoUsuario || !credentials?.contrasena) {
          throw new Error("Credenciales inválidas");
        }

        const user = await prisma.usuarios.findUnique({
          where: { correoUsuario: credentials.correoUsuario }
        });

        if (!user || !user?.contrasena) {
          throw new Error("Usuario no encontrado");
        }

        const isCorrectPassword = await bcrypt.compare(
          credentials.contrasena,
          user.contrasena
        );

        if (!isCorrectPassword) {
          throw new Error("Contraseña incorrecta");
        }
        
        return {
          id: user.usuarioID.toString(),
          usuarioID: user.usuarioID,
          correoUsuario: user.correoUsuario,
          nombreUsuario: user.nombreUsuario,
          rolUsuario: user.rolUsuario,
        } as CustomUser;
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.rolUsuario = (user as CustomUser).rolUsuario;
        token.usuarioID = (user as CustomUser).usuarioID;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.rolUsuario = token.rolUsuario as string;
        session.user.usuarioID = token.usuarioID as number;
      }
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
