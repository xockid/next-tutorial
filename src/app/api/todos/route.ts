import { NextResponse } from "next/server";
import { store } from "./store";

export async function GET() {
    // 캐시 비활성화 (항상 최신 데이터)
    return NextResponse.json(store.findAll(), {
        headers: { "Cache-Control": "no-store" },
    });
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const text = String(body?.text ?? "").trim();
        if (!text) {
            return NextResponse.json(
                { error: "text is required" },
                { status: 400 }
            );
        }
        const created = store.add(text);
        return NextResponse.json(created, { status: 201 });
    } catch {
        return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    }
}
