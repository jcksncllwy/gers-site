import React from "react";
import { Session } from "@supabase/supabase-js";
import { WriteableContextType } from "./types";

type ContextType = WriteableContextType<Session | null>

export const SessionContext = React.createContext<ContextType | null>(null);
