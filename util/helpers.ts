export function randomColor() {
  const values = [
    [
      "#DAAFE9",
      "#C7DBF5",
      "#AAD5FB",
      "#ADE5DA",
      "#B0EDC3",
      "#FDF0A4",
      "#F8D6A2",
    ],
    [
      "#C47ADA",
      "#90BAEE",
      "#75BAFA",
      "#72D5BF",
      "#73DE8C",
      "#FBE66E",
      "#F5B969",
    ],
    [
      "#AE44B7",
      "#5E7ABC",
      "#5E7ABC",
      "#4DACA9",
      "#63B75A",
      "#EDBD4A",
      "#EC9740",
    ],
    [
      "#501B87",
      "#021B6B",
      "#0C2794",
      "#337277",
      "#2F6A52",
      "#AE802F",
      "#AD6127",
    ],
  ];

  return values[Math.floor(Math.random() * values.length)][
    Math.floor(Math.random() * values[0].length)
  ];
}

export const deserializeData = (data: any) =>
  data.map((val: any) =>
    JSON.parse(val, (key, value) => {
      if (typeof value === "string" && value.startsWith("BIGINT::")) {
        return BigInt(value.substr(8));
      }
      return value;
    })
  );
