// De una unuon type permite solo extrar los tipos mencionados luego de la coma ,


type paises =
  | "Colombia"
  | "EEUU"
  | "Argentina"
  | "España"

type latam = Extract<paises, "Colombia" | "Argentina">


const example: latam = "Colombia"