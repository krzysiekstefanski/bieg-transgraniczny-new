import { typography } from "./typography"
import { colors } from "./colors"

export function getSize(size) {
    return {
        size: typography[size]?.size,
        interline: typography[size]?.interline,
        weight: typography[size]?.weight,
        spacing: typography[size]?.spacing,
    };
};

export function getColor(color) {
    return colors[color] ? colors[color] : color;
};