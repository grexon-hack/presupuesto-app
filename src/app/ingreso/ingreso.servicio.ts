import { Ingreso } from "./ingreso.model";

export class IngresoServicio {
    ingresos : Ingreso[] = [
        new Ingreso("Sueldo", 4000),
        new Ingreso("Prestamo", 700)
    ]
}