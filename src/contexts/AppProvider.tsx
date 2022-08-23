import { CssBaseline, ThemeProvider } from "@mui/material";
import { Session } from "@supabase/supabase-js";
import React, { useEffect, useState } from "react";
import { supabase, getProfile, SupabaseProfile } from "../APIClients/supabaseClient";
import { theme } from "../styling/theme";
import { ProfileContext } from "./ProfileContext";
import { SessionContext } from "./SessionContext";

export type Props = {
    children: React.ReactNode;
}

/**
 * Aggregates all app-level contexts into one wrapper provider
 * Initializes all app-level contexts
 */
export const AppProvider = ({ children }: Props) => {
    const [profile, setProfile] = useState<SupabaseProfile | null>(null)
    const [session, setSession] = useState<Session | null>(null)

    // Session Management
    useEffect(() => {
        const initialSession = supabase.auth.session()
        setSession(initialSession)

        // Initialize User Profile using existing session if not null
        const initProfile = async (session: Session | null) => {
            if (session) {
                console.log('Populating User Profile from Session')
                const userProfile = await getProfile(session);
                setProfile(userProfile)
            }
        }
        initProfile(initialSession);

        // Automagically updates session state whenever a supabase call changes the session
        supabase.auth.onAuthStateChange((event, newSession) => {
            setSession(newSession)
            if(event==="SIGNED_IN") initProfile(newSession);
            if(event==='SIGNED_OUT') setProfile(null)
        })
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <ProfileContext.Provider value={[profile, setProfile]}>
                <SessionContext.Provider value={[session, setSession]}>
                    {children}
                </SessionContext.Provider>
            </ProfileContext.Provider>
        </ThemeProvider>
    )
}