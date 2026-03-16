import StyleDictionary from "style-dictionary";

// ── Custom transform: strip Token Studio group prefix ────────────────────────
// Token Studio nests tokens in groups (e.g. "primitive.color.neutral.50").
// We want CSS vars like --color-neutral-50, not --primitive-color-neutral-50.
StyleDictionary.registerTransform({
  name: "name/strip-group",
  type: "name",
  filter: (token) => token.path[0] === "primitive" || token.path[0] === "semantic",
  transform: (token) => token.path.slice(1).join("-"),
});

// ── Config ───────────────────────────────────────────────────────────────────
const sd = new StyleDictionary({
  source: ["src/tokens/tokens.json"],

  platforms: {
    css: {
      transformGroup: "css",
      transforms: ["name/strip-group", "color/css", "size/rem"],
      prefix: "",
      buildPath: "src/tokens/",
      files: [
        {
          // Primitive tokens — raw scale values
          destination: "primitive.generated.css",
          format: "css/variables",
          filter: (token) => token.path[0] === "primitive",
          options: {
            selector: ":root",
            outputReferences: false,
          },
        },
        {
          // Semantic tokens — reference primitives
          destination: "semantic.generated.css",
          format: "css/variables",
          filter: (token) => token.path[0] === "semantic",
          options: {
            selector: ":root",
            outputReferences: true,
          },
        },
      ],
    },
  },
});

await sd.buildAllPlatforms();
console.log("\n✅ Tokens built successfully");
