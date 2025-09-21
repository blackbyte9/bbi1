import { readTests } from "@/lib/test/read";

export async function GET() {
    const tests = await readTests();
    return Response.json(tests.sort((a, b) => a.name.localeCompare(b.name)));
}
