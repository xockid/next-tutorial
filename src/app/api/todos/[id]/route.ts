import { NextResponse } from "next/server";
import { store } from "../store";

export async function DELETE(req: Request) {
    const { pathname } = new URL(req.url);
    const id = pathname.split("/").pop();
    if (!id) {
        return NextResponse.json({ error: "Bad Request" }, { status: 400 });
    }

    const ok = store.remove(id);
    if (!ok) {
        return NextResponse.json({ error: "Not Found" }, { status: 404 });
    }
    return NextResponse.json({ ok: true });
}
