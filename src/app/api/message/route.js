import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request, response) {
    try {
        const { firstname, lastname, email, tel, message } = await request.json();
        const newMessage = await prisma.message.create({
            data: {
                firstname,
                lastname,
                email,
                tel,
                message
            },
        });
        return new Response(JSON.stringify({ success: true, data: newMessage }), { status: 201 });
    } catch (error) {
        console.error('Error creating message:', error);
        return new Response(JSON.stringify({ success: false, error: 'Internal Server Error' }), { status: 500 });
    }
}
