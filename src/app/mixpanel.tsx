import React, { createContext, useContext, useEffect, useRef } from "react";
import type * as Mixpanel from "mixpanel-browser";

type MixpanelConfig = {
    isEnabled: boolean;
    token: string;
    screenName: string;
    language: string;
    channelName: string;
    subChannelName: string;
};

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

    const { token, screenName, isEnabled, language, channelName, subChannelName } = context;
    const mixpanelRef = useRef<typeof Mixpanel | null>(null);

    useEffect(() => {
        if (isEnabled && token) {
            // Dynamically import Mixpanel library
            import("mixpanel-browser").then((mixpanel) => {
                mixpanel.init(token);
                mixpanelRef.current = mixpanel;
            }).catch((error) => {
                console.error("Failed to load Mixpanel:", error);
            });
        }
    }, [token, screenName, isEnabled]);

    const send = (eventName: string, data: Record<string, unknown>) => {
        if (isEnabled && mixpanelRef.current) {
            mixpanelRef.current.track(eventName, {
                language,
                screen_name: screenName,
                channel_name: channelName,
                sub_channel_name: subChannelName,
                ...data
            });
        } else {
            console.warn("Mixpanel is not enabled or initialized.");
        }
    };

    return { send };
}

