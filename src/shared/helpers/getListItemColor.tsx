export enum Importances {
    Low,
    Medium,
    High
}

// TODO tests
export const getListItemColor = (importance: Importances) => {
    switch (importance) {
        case Importances.Low:
            return "green";
        case Importances.Medium:
            return "yellow";
        case Importances.High:
            return "red";
    }
};
