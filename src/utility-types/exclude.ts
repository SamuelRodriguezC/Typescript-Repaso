// Permite excluir tipos de una unión Type 

type Varios = string | number | string[]


type onlyStrings = Exclude<Varios, number> // Elimina number - solo quedaría string y string[]


type paises = "Colombia" | "EEUU" | "argentina" | "chile" | "venezuela" | "brasil" | "españa" | "otro"
type latam = Exclude<paises, "españa" | "EEUU"> //Exluimos a españa y EEUU por que no pertenecen a latam