import { supabase } from "./supabase";

export async function saveEssay(data: any) {
  await supabase.from("essays").insert([data]);
}

export async function getEssays() {
  const { data } = await supabase.from("essays").select("*");
  return data || [];
}
