// //app/api/auth/register/route.ts

// Auntes era para Prisma, se migró a Laravel

// import { prisma } from '@/lib/prisma';
// import { NextResponse } from 'next/server';
// import bcrypt from 'bcryptjs';
// import { z } from 'zod';

// const registerSchema = z.object({
//   nombreUsuario: z.string().min(2),
//   usuario: z.string().min(4),
//   correoUsuario: z.string().email(),
//   contrasena: z.string().min(6),
//   telefonoUsuario: z.string(),
//   fechaNacimientoUsuario: z.string().optional(),
//   generoUsuario: z.enum(['MASCULINO', 'FEMENINO', 'OTRO']).optional(),
//   rolUsuario: z.enum(['participante', 'organizador']),
// });

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();
//     const data = registerSchema.parse(body);

//     const existingUser = await prisma.usuarios.findUnique({
//       where: { correoUsuario: data.correoUsuario },
//     });

//     if (existingUser) {
//       return NextResponse.json(
//         { message: 'El correo electrónico ya está registrado' },
//         { status: 400 }
//       );
//     }

//     const hashedPassword = await bcrypt.hash(data.contrasena, 10);

//     const user = await prisma.usuarios.create({
//       data: {
//         nombreUsuario: data.nombreUsuario,
//         usuario: data.usuario,
//         correoUsuario: data.correoUsuario,
//         contrasena: hashedPassword,
//         telefonoUsuario: data.telefonoUsuario,
//         fechaNacimientoUsuario: data.fechaNacimientoUsuario,
//         generoUsuario: data.generoUsuario,
//         rolUsuario: data.rolUsuario,
//       },
//     });

//     // Excluye la contraseña del usuario que se envía de vuelta en la respuesta
//     const { contrasena, ...userWithoutPassword } = user;

//     return NextResponse.json(userWithoutPassword, { status: 201 });
//   } catch (error) {
//     if (error instanceof z.ZodError) {
//       return NextResponse.json(
//         { message: 'Datos de registro inválidos' },
//         { status: 400 }
//       );
//     }

//     return NextResponse.json(
//       { message: 'Error al crear la cuenta' },
//       { status: 500 }
//     );
//   }
// }