// types/next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    usuarioID: number;
    correoUsuario: string;
    nombreUsuario: string;
    rolUsuario: string;
  }

  interface Session {
    user: {
      usuarioID: number;
      correoUsuario: string;
      nombreUsuario: string;
      rolUsuario: string;
    };
  }

  interface JWT {
    usuarioID: number;
    rolUsuario: string;
  }
}
