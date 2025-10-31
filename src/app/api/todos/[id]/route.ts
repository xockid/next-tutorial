import { NextResponse } from "next/server";
import { store } from "../store";

type Params = { params: { id: string } };

export async function DELETE(_: Request, { params }: Params) {
    const ok = store.remove(params.id);
    if (!ok) return NextResponse.json({ error: "Not Found" }, { status: 404 });
    return NextResponse.json({ ok: true });
}
