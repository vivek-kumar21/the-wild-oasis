import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://hotpkhnqwyhpegnsdxpc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvdHBraG5xd3locGVnbnNkeHBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUwMzQyNTYsImV4cCI6MjAxMDYxMDI1Nn0.DpkSedYJLdGHC-SAR4LJq8phPCVNhh8CdC-nk2F8LTg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
