import { Session } from "@supabase/supabase-js";
import React from "react";

export const SessionContext = React.createContext<Session | null>(null);