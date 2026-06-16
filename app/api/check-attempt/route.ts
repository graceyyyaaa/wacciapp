import { supabase } from "@/lib/supabase";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const user = searchParams.get("user");

  if (!user) {
    return Response.json({
      attempted: false,
    });
  }

  const { data } = await supabase
    .from("results")
    .select("*")
    .eq("candidate_name", user);

  return Response.json({
    attempted: data && data.length > 0,
  });
}
