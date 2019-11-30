export enum Importances {
    High,
    Medium,
    Low
}

export const getListItemColor = (importance: Importances) => {
    switch (importance) {
        case Importances.Low:
            return {
               background: "#ebf6fa",
               border: "#b3e6fb"
            };
        case Importances.Medium:
            return {
                background: "#fbf4dd",
                border: "#fde9a7"
            };
        case Importances.High:
            return {
                background: "#faebec",
                border: "#fbb3b3"
            };
    }
};
