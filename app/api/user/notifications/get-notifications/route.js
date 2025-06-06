import { connectToDatabase } from "@/app/api/utils/db";
import Notification from "@/app/model/notification.model";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
import { config } from "@/app/api/utils/env-config";

export async function GET() {
  await connectToDatabase();
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const decoded = jwt.verify(token, config.jwtSecretKey);
    if (!decoded.id) {
      return NextResponse.json({ error: "Invalid token" }, { status: 403 });
    }
    const id = decoded.id;
    const notifications = await Notification.find({ userId: id }).sort({
      createdAt: -1,
    });
    if (!notifications) {
      return NextResponse.json(
        { message: "No notications found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ notifications }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
