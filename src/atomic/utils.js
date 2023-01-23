import { typography } from "./typography"
import { colors } from "./colors"
import { shadows } from "./shadows"

export function getSize(size) {
    return {
        size: typography[size]?.size,
        interline: typography[size]?.interline,
        weight: typography[size]?.weight,
        spacing: typography[size]?.spacing,
    };
};

export function checkColor(color) {
    return colors[color] ? colors[color] : color;
};

export function checkShadow(shadow) {
    return shadows[shadow] ? shadows[shadow] : shadow;
}