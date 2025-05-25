import { useEffect, useRef } from "react";
import type * as Mixpanel from "mixpanel-browser";

export function useMixpanel(token: string, screen_name: string, is_enabled: boolean) {
    const mixpanelRef = useRef<typeof Mixpanel | null>(null); // Use the imported type

    useEffect(() => {
        if (is_enabled && token) {
            // Dynamically import Mixpanel library
            import("mixpanel-browser").then((mixpanel) => {
                mixpanel.init(token);
                mixpanel.track("Screen View", { screen_name });
                mixpanelRef.current = mixpanel;
            });
        }
    }, [token, screen_name, is_enabled]);

    const send = (data: Record<string, any>) => {
        if (is_enabled && mixpanelRef.current) {
            mixpanelRef.current.track("Custom Event", data);
        } else {
            console.warn("Mixpanel is not enabled or initialized.");
        }
    };

    return { send };
}
