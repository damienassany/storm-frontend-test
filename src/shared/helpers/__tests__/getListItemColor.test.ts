import { getListItemColor, Importances } from "../getListItemColor";

describe("getListItemColor", () => {
  it("should return low importance colors", () => {
    const result = getListItemColor(Importances.Low);

    expect(result).toEqual({
      background: "#ebf6fa",
      border: "#b3e6fb"
    });
  });

  it("should return medium importance colors", () => {
    const result = getListItemColor(Importances.Medium);

    expect(result).toEqual({
      background: "#fbf4dd",
      border: "#fde9a7"
    });
  });

  it("should return high importance colors", () => {
    const result = getListItemColor(Importances.High);

    expect(result).toEqual({
      background: "#faebec",
      border: "#fbb3b3"
    });
  });
});
