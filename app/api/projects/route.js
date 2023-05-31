import { NextResponse } from "next/server";
import projects from "./projects.json";

export async function GET(request) {
  return NextResponse.json(projects);
}
