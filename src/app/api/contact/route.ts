import { NextResponse } from "next/server";
export async function POST(request: Request) {
    void request;
    return NextResponse.json(
        { error: "Direct contact is available by email." },
        { status: 410 }
    );
}






