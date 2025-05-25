import React, { createContext, useContext, useEffect, useRef } from "react";
import type * as Mixpanel from "mixpanel-browser";

// Define a type for the Mixpanel configuration
type MixpanelConfig = {
    token: string;
    screen_name: string;
    is_enabled: boolean;
    language: string;
    channel_name: string;
    subchannel_name: string;
};

// Context to provide Mixpanel configuration
const MixpanelContext = createContext<MixpanelConfig | null>(null);

export const MixpanelProvider: React.FC<{
    config: MixpanelConfig;
    children: React.ReactNode;
}> = ({ config, children }) => {
    return (
      <MixpanelContext.Provider value={config}>
          {children}
      </MixpanelContext.Provider>
    );
};

export function useMixpanel() {
    const context = useContext(MixpanelContext);
    if (!context) {
        throw new Error("useMixpanel must be used within a MixpanelProvider");
    }

    const { token, screen_name, is_enabled, language, channel_name, subchannel_name } = context;
    const mixpanelRef = useRef<typeof Mixpanel | null>(null);

    useEffect(() => {
        if (is_enabled && token) {
            // Dynamically import Mixpanel library
            import("mixpanel-browser").then((mixpanel) => {
                mixpanel.init(token);
                mixpanelRef.current = mixpanel;
            }).catch((error) => {
                console.error("Failed to load Mixpanel:", error);
            });
        }
    }, [token, screen_name, is_enabled]);

    const send = (eventName: string, data: Record<string, unknown>) => {
        if (is_enabled && mixpanelRef.current) {
            mixpanelRef.current.track(eventName, {
                screen_name,
                language,
                channel_name,
                subchannel_name,
                ...data
            });
        } else {
            console.warn("Mixpanel is not enabled or initialized.");
        }
    };

    return { send };
}
