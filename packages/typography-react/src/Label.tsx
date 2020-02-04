import React, { ReactNode } from "react";
import { LabelVariant } from "@fremtind/jkl-core";
import cx from "classnames";

interface Props {
    variant?: LabelVariant;
    forceCompact?: boolean;
    srOnly?: boolean;
    children: ReactNode;
    standAlone?: boolean;
    htmlFor?: string;
}

export function Label({ variant = "medium", forceCompact, srOnly, children, standAlone, htmlFor }: Props) {
    const className = cx("jkl-label", {
        [`jkl-label--${variant}`]: variant,
        "jkl-label--compact": forceCompact,
        "jkl-label--sr-only": srOnly,
    });

    const C = standAlone ? "label" : "span";

    if (!standAlone && htmlFor) {
        htmlFor = undefined;
        if (process.env.NODE_ENV !== "production") {
            console.warn(
                "WARNING: The standard Label component renders as a <span> element, which does not take a htmlFor prop. If you want the Label to belong to a specific input, use the standAlone prop, which renders as a <label> element instead. In most cases the Label component should not be used directly, as it is part of all our input components.",
            );
        }
    }

    return (
        <C className={className} htmlFor={htmlFor}>
            {children}
        </C>
    );
}
